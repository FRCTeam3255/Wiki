1. Go to [New Repository - Standard Swerve Template](https://github.com/organizations/FRCTeam3255/repositories/new?template_name=Standard_Swerve_Code&template_owner=FRCTeam3255)
2. Make sure **Owner** is set to FRCTeam3255
   ![alt text](../.images/Software/Creating_new_Robot_Project/image.png)
3. Set **Repository name** to the format: `YYYY_Robot_Code` or `YYYY_Offbot_Code` for example `2024_Robot_Code` or `2024_Offbot_Code`
4. Clone the Repo
5. set merge type restriction
   - Uncheck all but **Allow squash merging**
   - ![alt text](../.images/Software/Creating_new_Robot_Project/image-1.png)

6. Set the following settings to be checked off
   - ![alt text](../.images/Software/Creating_new_Robot_Project/image-2.png)

7. Go to Rules/Rulesets
   1. Select New Rulesets -> Import a ruleset
   2. ![alt text](../.images/Software/Creating_new_Robot_Project/image3.png)
   3. Download [all_branches.json](../.downloads/rulesets/all_branches.json){:download}
   3. Download [protect_main.json](../.downloads/rulesets/protect_main.json){:download}

TODO WIP INSTRUCTIONS:

- add branch rules
- add build restriction
