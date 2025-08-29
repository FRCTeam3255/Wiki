# Step-by-Step Guide to Update CAD for Simulation

## 1. Export Moving Components
- Identify all components that can move (e.g., drivetrain, elevator base stage, elevator 2nd stage, elevator carriage).
- Think about which big parts move.
- Right-click on the part you want to hide, then select **Suppress** until only the desired component is visible.
- Save the file as **STEP AP214** in your Downloads folder.
- If prompted with "One or more components are hidden or suppressed," click **No**.
- Repeat these steps for all moving parts.

## 2. Use CAD Assistant
- Open the exported file in **CAD Assistant**.
- Apply colors to the model as needed.
- Export the file and save it as a **GLB file**.
- Save the GLB file in your repository under the `Robot_` folder inside the `assets` folder:
    - Name the base (e.g., drivetrain) as `model`.
    - Name the second stage (e.g., elevator base) as `model_0`.
    - Name the third stage (e.g., elevator 2nd stage) as `model_1`, and so on.
- Repeat these steps for all parts.

## 3. Start Simulation
- Open **Advantage Scope** and start the sim.

## 4. Update `config.json`
- Open the `config.json` file in your code.
- Copy the following code for each component:
- Adjust the values until all robot parts are correctly oriented and facing forward.
- Ensure each component has its own unique set of code.

Follow these steps carefully to ensure your CAD model is correctly updated for simulation.