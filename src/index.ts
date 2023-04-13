import { readFileSync, readdirSync } from "fs"
import { writeFile } from "./utils/fileSystem"

const abilitiesData = {
  abilities: [],
}

const textDecoder = new TextDecoder()
const binFiles = readdirSync("./bin")

;(async () => {
  for (const binFile of binFiles) {
    const fileContent = readFileSync(`./bin/${binFile}`)
    const decodedText = textDecoder.decode(Buffer.from(fileContent))
    const avatarName = decodedText
      .match(/Avatar_\w+/g)
      .filter((word) => word.includes("Attack01"))[0]
      .replace("Avatar_", "")
      .replace("_Attack01", "")
    const avatarWords = decodedText.match(/Avatar\w+/g).filter((word) => word.includes(avatarName))

    for (const word of avatarWords) {
      abilitiesData.abilities.push({ abilityID: "", abilityName: word })
    }

    await writeFile(`./json/ConfigAvatar_${avatarName}.json`, JSON.stringify(abilitiesData, null, "\t"))
  }
})()
