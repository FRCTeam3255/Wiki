# 3D Printing

Use these steps to prepare an STL for printing with the correct Bambu Studio Robotics process profile for the printer, nozzle, and material you are using.

## Prepare the File

1. Pull from Fabrication Github folder
2. Open the `Fabrication` folder.
3. Go to the `3D print queue`.
4. Right-click the desired STL and open it with **Bambu Studio**.
5. In the project filament drop-down, select desried filament.
5. In the **Process** drop-down, confirm that the correct preset is selected for the desired filament (typically PLA CF).

## Slice the Plate

1. Click **Auto Orient**.
2. Arrange all objects on the plate.
3. Click **Slice Plate**.
4. Save the file and give it a clear name.

## Export to the Printer

1. Get the SD card from the 3D printer and plug it into the computer.
2. Click **Export Plate Sliced File**, then save the plate to the SD card.
3. Eject the SD card when prompted.
4. On the printer screen, open the SD card files, select the file you exported, and start the print.

Afterwards, drag the 3MF file to the in-progress folder.
Remove the STL from the queue folder.
Once print is complete, drag STL and 3MF file to completed folder.
