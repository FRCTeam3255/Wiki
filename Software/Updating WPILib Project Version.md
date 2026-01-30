# Updating WPILib Project Version

!!! important

    This process should be done at the start of each new build season when a new version of WPILib is released

## Standard Project Conversion

1. Open project in new WPILib
2. When prompted with "This project is not compatible...", click `yes`
3. At the next screen, leave all settings as is and click `Import Project`
4. At the next prompt click `yes`
5. At the next prompt "Project successfully created. Would you like to open?" click `no`
6. Open file explorer
7. Navigate to the new imported folder (same name but with "-imported")
8. Enable seeing hidden files
9. Select and drag all "-imported" contents into the original project folder and `replace all`
10. Install new vendor libraries
11. Revert `.gitignore`
12. Revert `extension.json` if there are changes to it
13. Partially revert `settings.json` (revert things in custom section)

## SuperCORE Projects ONLY

!!! warning

    These additional steps are **only** for projects that use SuperCORE

1. Revert `settings.gradle`
2. In `build.gradle` copy the new `id "edu.wpi.first.GradleRIO" version "xxxx.x.x"`
3. Revert `build.gradle`
4. Paste the copied `id "edu.wpi.first.GradleRIO" version "xxxx.x.x"`
5. Update the year in `SuperCORE.json` and `LocalSuperCORE.json`

## See Also

- [WPILib Install](WPILib%20Install.md) - Installing the new version of WPILib
- [Vendor Libraries](Vendor%20Libraries.md) - Installing vendor libraries
