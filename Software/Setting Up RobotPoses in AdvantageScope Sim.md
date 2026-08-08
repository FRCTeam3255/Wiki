# Setting Up RobotPoses for AdvantageScope Simulation

Use this guide to make your subsystem `RobotPose` components move correctly in AdvantageScope simulation.

## In SolidWorks
Measure each component pivot point relative to the SolidWorks origin and record those values.

!!! tip
    Be consistent about what you call the robot front before taking any measurements.

## In Code
Record each pivot measurement relative to the **front of the robot** in this order:

1. `x` = forward/back
2. `y` = left/right
3. `z` = up/down

![WPILib Robot Coordinate System](https://docs.wpilib.org/en/stable/_images/robot-3d.svg)

!!! warning
    If a value looks flipped in simulation, verify sign (`+` vs `-`) before changing anything else.

## In AdvantageScope
1. Add each pivot point as a cone in your 3D view.
2. Compare cone locations to your expected mechanism pivot points.
3. If cones are incorrect, check:
    - measurement correctness,
    - coordinate order (`x`, `y`, `z`),
    - sign (positive vs negative).
4. Use trial and error to correct values until cones line up exactly.

If the cone locations are wrong, the mechanism will not move correctly in simulation. Do not continue until cone placement looks correct.
