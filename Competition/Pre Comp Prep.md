# Pre Comp Prep

## Configuring second robot before off-season comp

### Configuring

!!! important

    DO IN THIS ORDER **WITHOUT** CYCLING POWER

    DO THIS BEFORE CONFIGURING RADIO FOR COMP

1. Set limelights to new team number via web page
    - static IP to new team 
2. set Rio to new team number using roboRIO team number setting tool
3. config radio to new team number via web page


### Validation
1. Choose driver station laptop and label it with new number via tape
2. Set team number in driver station software
3. Set team number in Elastic
4. Confirm connection to robot in driver station software
5. Confirm connection to limelights in web page



## Driver Station Prep

!!! important

    During a match, **only Elastic and Driver Station** should be open on the driver station laptop.

1. Make sure the [FRC Driver Station software](https://docs.wpilib.org/en/stable/docs/software/driverstation/driver-station.html) is up to date.
2. Disable sleep on the driver station laptop:
    - Open **Settings → System → Power & Sleep**
    - Set all sleep/screen-off timers to **Never**


## Clearing Logs

Delete all logs before going to competition to free up storage space and avoid confusion during the event.

### Driver Station Logs

1. On the driver station laptop, navigate to `C:\Users\Public\Documents\FRC\Log Files`
2. Delete all files in that folder.

### roboRIO Data Logs

1. Connect to the robot (robot must be on).
2. Open the [WPILib Data Log Tool](https://docs.wpilib.org/en/stable/docs/software/telemetry/datalog-download.html) in the WPILib VS Code extension or via the web dashboard.
3. Delete all `.wpilog` files stored on the roboRIO or the USB drive attached to it.

## Event packing

See [Universal Pack List](https://docs.google.com/spreadsheets/d/1OLDXrAsIJp9OF6TsXpPJK3FehrNwZnzNa4Dif_LCrPo/edit?usp=sharing)
