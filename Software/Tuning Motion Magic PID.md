# Tuning Motion Magic PID

Follow these steps to tune the Motion Magic PID for your robot:

## Prerequisites
- Use a fresh battery to ensure consistent performance during tuning.
- Ensure you are connected to the robot via its Wi-Fi.
- Open the `ConstMotion.java` or `ConstRotors.java` file to adjust the PID constants.
- **Verify the gear ratio is correct** (sensor to mechanism ratio in configuration).
- **Verify the direction is correct** before beginning tuning.
- **Make sure soft limits are in Units Rotations** (not raw encoder units).

### For Arm Mechanisms:
- **Deploy should be a positive value** (e.g., moving the arm outward/upward should increase position).
- **Use the closed loop sign setting** in the motor configuration to invert feedback polarity if needed (ensures feedback matches motor direction).
- **Verify the forward limit is in the correct direction** before tuning to prevent damage.

## Steps

1. **Set Gravity Type**  
    Configure the gravity compensation type in `ConstMotion.java` or `ConstRotors.java` based on your mechanism:
    - **Elevator_Static**: For vertical lifts (elevators, lifts)
    - **Arm_Cosine**: For rotating arms (pivoting mechanisms)
    
    ```java
    MOTOR_NAME_CONFIG.Slot0.GravityType = GravityTypeValue.Elevator_Static; // or Arm_Cosine
    ```

2. **Use Phoenix Tuner for Initial Tuning**  
    - Open Phoenix Tuner and connect to your robot.
    - Navigate to the motor controller you're tuning.
    - Use Phoenix Tuner's built-in PID tuning interface to adjust values in real-time:
      - Start with all PID constants set to `0`.
      - Tune `kS` (Static Gain) first - increase until the mechanism begins to move slightly.  
        > **Note:** Keep this value as low as possible while ensuring the mechanism moves.
      - Tune `kG` (Gravity Compensation) - increase until the mechanism holds position without drifting.  
        > **Note:** If the gear ratio is high enough, `kG` might just be `0` as the mechanism can hold itself.
      - Tune `kP` (Proportional Gain) - increase until the mechanism reaches setpoint without overshooting.
    - Fine-tune the values in Phoenix Tuner until you achieve desired performance.

3. **Transfer Values to Constants File**  
    Once you have tuned the PID values in Phoenix Tuner:
    - Copy the final tuned values from Phoenix Tuner.
    - Update the corresponding constants in `ConstMotion.java` or `ConstRotors.java`:
    
    ```java
    // Feedforward
    MOTOR_NAME_CONFIG.Slot0.kS = 0.25;    // Value from Phoenix Tuner
    MOTOR_NAME_CONFIG.Slot0.kG = 0.30;    // Value from Phoenix Tuner
    // PID
    MOTOR_NAME_CONFIG.Slot0.kP = 10.0;    // Value from Phoenix Tuner
    ```
    
    - Deploy the code with the new constants to verify the mechanism still performs as expected.

## For Flywheel Mechanisms

Flywheels use **velocity control** rather than position control. The key constants to tune are `kS` and `kV`.

1. **Set kS**  
   Tune `kS` (Static Gain) the same way as other mechanisms — increase it until the flywheel just begins to spin.  
   > **Note:** Keep this value as low as possible while still overcoming static friction.

2. **Set kV**  
   Tune `kV` (Velocity Gain) so that, with only feedforward active (no PID), the flywheel reaches **slightly below** your lowest velocity setpoint.  
   This ensures the closed-loop controller (kP) only needs to make small corrections upward, avoiding overshoot.
   > **Tip:** Test at your lowest expected RPM setpoint and increase `kV` until the flywheel gets close but does not exceed it.

3. **Transfer Values to Constants File**  
   Once tuned, copy the values into your constants file:

   ```java
   // Feedforward
   MOTOR_NAME_CONFIG.Slot0.kS = 0.25;    // Value from Phoenix Tuner
   MOTOR_NAME_CONFIG.Slot0.kV = 0.12;    // Value from Phoenix Tuner (reach slightly below lowest setpoint)
   // PID (fine-tune if needed)
   MOTOR_NAME_CONFIG.Slot0.kP = 1.0;     // Value from Phoenix Tuner
   ```

   - Deploy the code with the new constants to verify the flywheel performs as expected at all setpoints.

## Additional Notes
- If you encounter issues with feedforward, you may need to revisit and refine your feedforward calculations.
