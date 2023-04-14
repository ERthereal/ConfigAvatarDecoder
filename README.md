# ConfigAvatarDecoder

Tool to generate the minimum ConfigAvatar data required to run GC  
Automatic recognition of character names eliminates the need for bin file mapping  
As we are searching through the entire binary of BinOutput, there is a possibility of unexpected data being output.
To improve accuracy, you need to place only the binary of ConfigAvatar in the bin folder.

It should work with any version  

## Usage

```
npm i
npm run start
```

## Export Data (Baizhuer) ※ If using only the ConfigAvatar binary
```json
{
	"abilities": [
		{
			"abilityID": "Avatar_Baizhuer_ExtraAttack",
			"abilityName": "Avatar_Baizhuer_ExtraAttack",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_Attack01",
			"abilityName": "Avatar_Baizhuer_Attack01",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_Attack02",
			"abilityName": "Avatar_Baizhuer_Attack02",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_Attack03",
			"abilityName": "Avatar_Baizhuer_Attack03",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_Attack04",
			"abilityName": "Avatar_Baizhuer_Attack04",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_ElementalArt",
			"abilityName": "Avatar_Baizhuer_ElementalArt",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_ElementalBurst",
			"abilityName": "Avatar_Baizhuer_ElementalBurst",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_ElementalBurst_Funnel_Handler",
			"abilityName": "Avatar_Baizhuer_ElementalBurst_Funnel_Handler",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_ElementalBurst_Funnel_Shoot",
			"abilityName": "Avatar_Baizhuer_ElementalBurst_Funnel_Shoot",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_Heal_ControlAbiilty",
			"abilityName": "Avatar_Baizhuer_Heal_ControlAbiilty",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_HealWhenGather",
			"abilityName": "Avatar_Baizhuer_HealWhenGather",
			"abilityOverride": ""
		},
		{
			"abilityID": "Avatar_Baizhuer_FallingAnthem",
			"abilityName": "Avatar_Baizhuer_FallingAnthem",
			"abilityOverride": ""
		}
	]
}
```

## Contact

```
Discord: kumadayo#2407
```

## Credit
khang06 for genshinblkstuff