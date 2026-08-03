# Setting CAN IDs

CAN IDs are set using **Phoenix Tuner X** for CTRE devices (TalonFX motors, CANcoders, CANdle, etc.) and **REV Hardware Client** for REV devices (SPARK MAX, SPARK FLEX, etc.).

Make sure all CAN IDs match the values defined in your codebase's `RobotMap.java`.

---

## Setting IDs with Phoenix Tuner X (CTRE Devices)

1. Connect to the robot via USB or Wi-Fi.
2. Open **Phoenix Tuner X**.
3. All detected CAN devices will appear in the device list.
4. Select the device you want to configure.
5. In the device panel, find the **CAN ID** field and enter the correct ID from `RobotMap.java`.
6. Click **Set** to confirm the change. The device will blink to confirm the update.
7. Repeat for all CTRE devices.

---

## Setting IDs with REV Hardware Client (REV Devices)

1. Connect to the robot via USB-C on the device or via the PDH.
2. Open **REV Hardware Client**.
3. Select the device you want to configure from the device list.
4. In the **Basic** tab, find the **CAN ID** field and enter the correct ID from `RobotMap.java`.
5. Click **Save Configuration** to confirm the change.
6. Repeat for all REV devices.

---

## After Changing CAN IDs

> **Important:** After changing any CAN IDs, you must restart the robot code for the changes to take effect.

1. Open the **FRC Driver Station**.
2. Navigate to the **Setup** tab (gear icon ⚙️).
3. Click **Restart Robot Code**.
4. Wait for the robot code to restart and confirm all devices are communicating correctly.
