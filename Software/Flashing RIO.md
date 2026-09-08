# Flashing roboRIO

## roboRIO 2 (SD Card Version)

!!! important

    If you are reusing a roboRIO (for a new robot build or when swapping RIOs), always re-flash the SD card before deploying code.

Follow these steps to flash the RIO 2 with a new image:

1. Download [Balena Etcher](https://etcher.balena.io/)
2. Insert SD card into your computer
3. Open RIO imaging tool
4. Click SD card icon in tool
5. Drag the latest image from the SD Images folder to Balena Etcher
6. Flash the SD card and insert it into the RIO 2
7. Set RIO with RIO setter tool
8. Reboot RIO by pressing the reset button on the RIO
9. Deploy code to the robot

If issues occur, [see official docs for more information](https://docs.wpilib.org/en/2025/docs/zero-to-robot/step-3/roborio2-imaging.html)

## roboRIO 1
1. Connect roboRIO USB Device port to the PC.
    - This requires a USB Type A male (standard PC end) to Type B male cable (square with 2 cut corners),
    - most commonly found as a printer USB cable
1. Right click **roboRIO imaging tool** and **run as admin** from desktop shortcut
    - also located at `C:\Program Files (x86)\National Instruments\LabVIEW 2023\project\roboRIO Tool`
1. Make sure the roboRIO is selected in the top left pane
2. Select `Format Target` in the right pane
3. Enter a team number in the `Team Number` box
4. Select the latest image version in the box.
5. Click `Reformat` to begin the imaging process.
6. The imaging process will take approximately 3-10 minutes. A progress bar in the bottom left of the window will indicate progress.
7. When the imaging completes you should see the dialog above. `Ok`, then click the `Close` button at the bottom right to close the imaging tool. 8. Reboot the roboRIO using the Reset button to have the new team number take effect.

If issues occur, [see official docs for more information](https://docs.wpilib.org/en/2025/docs/zero-to-robot/step-3/imaging-your-roborio.html)
