# Motor Specifications

This page displays motor specifications of common motors used in FRC robotics.

| Motor      | Type      | Weight   | Max RPM | Motor Controller | Body Length | Stall Torque | Stall Current | Free Current |
| ---------- | --------- | -------- | ------- | ---------------- | ----------- | ------------ | ------------- | ------------ |
| [Kraken x60](https://docs.wcproducts.com/welcome/electronics/kraken-x60/kraken-x60-motor/overview-and-features/physical-specifications) | Brushless | 1.2 lbs  | 6,000   | ✅ Built-In      | 2.96 in     | 7.09 N·m     | 366 A         | 2 A          |
| [Kraken x44](https://docs.wcproducts.com/welcome/electronics/kraken-x44/kraken-x44-motor/overview-and-features/physical-specifications) | Brushless | 0.75 lbs | 7,530   | ✅ Built-In      | 2.938 in    | 4.05 N·m     | 275 A         | 2 A          |
| [Falcon 500](https://github.com/CrossTheRoadElec/Device-CADs/raw/master/FALCON_500_CAD/Falcon_500_CAD.zip) | Brushless | 1.1 lbs  | 6,380   | ✅ Built-In      | 3.537 in     | 4.69 N·m     | 257 A         | 1.5 A        |
| Bag Motor  | Brushed   | 0.71 lbs | 13,180  | ‼️ NEEDED        | TBD     | 0.43 N·m     | 53 A          | 1.8 A        |
| Mini CIM   | Brushed   | 2.16 lbs | 5,840   | ‼️ NEEDED        | TBD     | 1.41 N·m     | 89 A          | 3 A          |
| [CIM](https://andymark.com/products/2-5-in-cim-motor?srsltid=AfmBOopRTpRAgTDV7Awqjnpu_aVtWq6B4HCb6E8OT3ZpgJrpc_-5Ri-E)        | Brushed   | 2.8 lbs  | 5,310   | ‼️ NEEDED        | 4.70 in     | 2.425 N·m    | 131 A         | 2.7 A        |

!!! important

    Brushed motors are "dumb" motors and need motor controllers (TalonSRX) wired between them and the robot.

!!! note

    These values represent the free speed (no load) RPM for each motor.

!!! tip

    When selecting a motor, consider not just the RPM but also the torque requirements, weight constraints, and available space on your robot.
