import { exec } from "child_process"
import { readFileSync, readdirSync } from "fs"
import { platform } from "os"
import { cwd, exit } from "process"

import { deleteFile, dirExists, fileExists, mkdir, writeFile } from "./utils/fileSystem"

let abilitiesData = {
  abilities: [],
}

function execCommand(cmd, slient = false): Promise<void> {
  return new Promise((res, rej) => {
    const cp = exec(cmd, { env: process.env, cwd: cwd() })

    if (!slient) cp.stdout.pipe(process.stdout)
    cp.on("exit", () => res())
    cp.on("error", (err) => rej(err))
  })
}

const textDecoder = new TextDecoder()
const xorKey = 0x95 //3.5: 0x95 3.6: 0x97

const blkParse = true //Please set configAvatar to false when using it.

;(async () => {
  if (!(await dirExists("json"))) mkdir("json")

  if (blkParse) {
    if (platform() == "darwin") await execCommand("./tool/blkstuff -d blk/24230448.blk -o bin")
    else if (platform() == "win32") await execCommand("./tool/blkstuff.exe -d blk/24230448.blk -o bin")
    else exit()
  }
  const binFiles = readdirSync("./bin")

  for (const binFile of binFiles) {
    const fileContent = readFileSync(`./bin/${binFile}`)

    const decodedText = blkParse
      ? textDecoder.decode(Buffer.from(fileContent).map((byte) => byte ^ xorKey))
      : textDecoder.decode(Buffer.from(fileContent))

    if (decodedText.includes("NormalMove/Walk")) {
      // ConfigAvatar Check

      const avatarNameList = decodedText
        .match(/Avatar_\w+_FallingAnthem/g)
        .filter((value, index, self) => {
          return (
            self.indexOf(value) === index &&
            !value.includes("Pole") &&
            !value.includes("Girl") &&
            !value.includes("Boy")
          )
        })
        .map((value) => {
          const fix = value.replace("Avatar_", "").replace("_FallingAnthem", "")
          const index = fix.indexOf("_")
          return index !== -1 ? fix.substring(0, index) : fix
        })

      for (const avatarName of avatarNameList) {
        console.log(`parse AvatarName: ${avatarName}`)
        const avatarWords = decodedText
          .match(/Avatar\w+/g)
          .filter((word) => word.includes(avatarName))
          .filter((value, index, self) => {
            return (
              self.indexOf(value) === index &&
              ![
                "Pole",
                "Girl",
                "Boy",
                "Male",
                "Talent",
                "Fight",
                "Constellation_1",
                "Constellation_2",
                "Constellation_3",
                "Constellation_4",
                "Constellation_5",
                "Material",
                "Show",
                "Data",
                "Bow",
                "Claymore",
                "Sword",
                "Catalyst",
                "Polearm",
                "Weapon",
              ].some((word) => value.includes(word))
              // It is necessary to exclude AbilityData and TalentData.
            )
          })

        for (const word of avatarWords) {
          abilitiesData.abilities.push({ abilityID: word, abilityName: word, abilityOverride: "" })
        }
        abilitiesData.abilities = abilitiesData.abilities.filter(
          (person, index, self) => index === self.findIndex((p) => p.abilityName === person.abilityName)
        )

        await writeFile(`./json/ConfigAvatar_${avatarName}.json`, JSON.stringify(abilitiesData, null, "\t"))

        abilitiesData.abilities = []
      }
      if (await fileExists("bin/24230448.0.bin")) await deleteFile("bin/24230448.0.bin")
    }
  }
})()
