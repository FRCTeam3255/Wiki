# Step-by-Step Guide to Update CAD for Simulation

## 1. Export Moving Components
- Identify all components that can move (e.g., drivetrain, elevator base stage, elevator 2nd stage, elevator carriage).
![image](../.images/Software/Updating%20CAD%20models/Screenshot%202025-08-26%20195451.png)
- Think about which big parts move.
- Right-click on the part you want to hide, then select **Suppress** until only the desired component is visible.
![image](../.images/Software/Updating%20CAD%20models/Screenshot%202025-08-28%20181418.png)
- Save the file as **STEP AP214** in your Downloads folder.
![image](../.images/Software/Updating%20CAD%20models/Screenshot%202025-08-28%20181622.png)
- If prompted with "One or more components are hidden or suppressed," click **No**.  
![image](../.images/Software/Updating%20CAD%20models/Screenshot%202025-08-26%20200419.png)
- Repeat these steps for all moving parts.
- ***REMEMBER: make sure all components are collapsed (at zeroed position)... or you will need to spend another hour on this crap***... don't ask how I know this

## 2. Use CAD Assistant
![image](../.images/Software/Updating%20CAD%20models/Screenshot%202025-08-26%20201739.png)
- Open the exported file in **CAD Assistant**.
- Apply colors to the model as needed.
![image](../.images/Software/Updating%20CAD%20models/Screenshot%202025-08-26%20202024.png)
- Export the file and save it as a **GLB file**.
- Save the GLB file in your repository under the `Robot_` folder inside the `assets` folder:
    - Name the base (e.g., drivetrain) as `model`.
    - Name the second stage (e.g., elevator base) as `model_0`.
    - Name the third stage (e.g., elevator 2nd stage) as `model_1`, and so on.
    ![image](../.images/Software/Updating%20CAD%20models/Screenshot%202025-08-26%20202613.png)
- Repeat these steps for all parts.

## 3. Start Simulation
- Open **Advantage Scope** and start the sim.

## 4. Update `config.json`
- Open the `config.json` file in your code.
- Copy the following code for the Drivetrain:
```json
{
  "name": "Offbot 2025",
  "disableSimplification": false,
  "rotations": [
    {
      "axis": "x",
      "degrees": 180
    },
    {
      "axis": "y",
      "degrees": 0
    },
    {
      "axis": "z",
      "degrees": 90
    }
  ],
  "position": [
    0,
    0,
    0
  ],
  "cameras": [],

  "components": []
}
```
- For each components, copy the following code
```json
{
      "zeroedRotations": [
        {
          "axis": "x",
          "degrees": 0
        },
        {
          "axis": "y",
          "degrees": 0
        },
        {
          "axis": "z",
          "degrees": 0
        }
      ],
      "zeroedPosition": [
        0,
        0,
        0
      ]
    }
```
- Adjust the values until all robot parts are correctly oriented and facing forward.
- Ensure each component has its own unique set of code.

Follow these steps carefully to ensure your CAD model is correctly updated for simulation.