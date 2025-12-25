# Tuning Motion Magic PID

Follow these steps to tune the Motion Magic PID for your robot:

## Prerequisites
- Ensure you are connected to the robot via its Wi-Fi.
- Open the `constants.py` file to adjust the PID constants.
- Use a fresh battery to ensure consistent performance during tuning.

## Steps

1. **Set Initial PID Constants**  
    Set all PID constants (`kP`, `kI`, `kD`, `kF`, etc.) to `0` in `constants.py`.

2. **Tune `kS` (Static Gain)**  
    - Gradually increase the `kS` value.  
    - Deploy the code after each adjustment.  
    - Stop increasing `kS` once the mechanism begins to move slightly.  
      > **Note:** Keep this value as low as possible while ensuring the mechanism moves.

3. **Tune `kG` (Gravity Compensation)**  
    - Set a setpoint for the mechanism.  
    - Gently raise the mechanism to the setpoint and release it while the robot is enabled.  
    - If the mechanism does not hold its position, incrementally increase the `kG` value.  
    - Deploy the code after each adjustment.  
    - Stop increasing `kG` once the mechanism holds its position without drifting.

4. **Tune `kP` (Proportional Gain)**  
    - Gradually increase the `kP` value.  
    - Deploy the code after each adjustment.  
    - Stop increasing `kP` once the mechanism begins to overshoot the setpoint.  
    - Dial back `kP` slightly to achieve the highest value that does not cause overshooting.

## Additional Notes
- If you encounter issues with feedforward, you may need to revisit and refine your feedforward calculations.
