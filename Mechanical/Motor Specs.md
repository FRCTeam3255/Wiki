# Motor Specifications

This page displays motor specifications of common motors used in FRC robotics.

| Motor      | Type      | Weight   | Max RPM | Motor Controller | Body Length | Stall Torque | Stall Current | Free Current |
| ---------- | --------- | -------- | ------- | ---------------- | ----------- | ------------ | ------------- | ------------ |
| Kraken x60 | Brushless | 1.2 lbs  | 6,000   | ✅ Built-In      | 2.96 in     | 7.09 N·m     | 366 A         | 2 A          |
| Kraken x44 | Brushless | 0.75 lbs | 7,530   | ✅ Built-In      | 2.938 in    | 4.05 N·m     | 275 A         | 2 A          |
| Falcon 500 | Brushless | 1.1 lbs  | 6,380   | ✅ Built-In      | 3.25 in     | 4.69 N·m     | 257 A         | 1.5 A        |
| Bag Motor  | Brushed   | 0.71 lbs | 13,180  | ‼️ NEEDED        | 3.90 in     | 0.43 N·m     | 53 A          | 1.8 A        |
| Mini CIM   | Brushed   | 2.16 lbs | 5,840   | ‼️ NEEDED        | 3.94 in     | 1.41 N·m     | 89 A          | 3 A          |
| CIM        | Brushed   | 2.8 lbs  | 5,310   | ‼️ NEEDED        | 4.37 in     | 2.425 N·m    | 131 A         | 2.7 A        |

!!! important

    Brushed motors are "dumb" motors and need motor controllers (TalonSRX) wired between them and the robot.

!!! note

    These values represent the free speed (no load) RPM for each motor.

!!! tip

    When selecting a motor, consider not just the RPM but also the torque requirements, weight constraints, and available space on your robot.
