# Setting Up RobotPoses for AdvantageScope Simulation

Use this guide to make your subsystem `RobotPose` components move correctly in AdvantageScope simulation.

## In SolidWorks
Measure each component pivot point relative to the SolidWorks origin and record those values.

If your SolidWorks origin is **not** at the robot front-center, also measure the origin offset from the robot front-center so you can convert values before entering them in code.

!!! tip
    Be consistent about what you call the robot front before taking any measurements.

## In Code
Record each pivot measurement relative to the **front of the robot** in this order:

1. `x` = forward/back
2. `y` = left/right
3. `z` = up/down

If you measured from a different CAD origin, convert to front-relative values first using your measured origin offset.

![WPILib Robot Coordinate System](../.images/Software/RobotPoses/robot-3d.svg)

## Rule of Thumb for Building Mechanism Poses
- Use `Pose3d.kZero` when placing a mechanism pose relative to the robot origin.
- For connected mechanisms (for example, a hood on a turret or an intake on an elevator), replace `Pose3d.kZero` with the parent mechanism's current `Pose3d` (for example, the turret `Pose3d` for a hood, or the elevator `Pose3d` for an intake).
- Use `.transformBy(...)` for slides and translation-based motion (for example, elevators or sliding intakes).
- Use `.rotateAround(...)` for pivots and rotation-based motion (for example, turrets, hoods, or pivot intakes).

!!! warning
    If a value looks flipped in simulation, verify sign (`+` vs `-`) before changing anything else.

## In AdvantageScope
1. Log mechanism component poses as `Pose3d[]`, then add that logged path once in your 3D view so AdvantageScope renders all component cones automatically.  
        <img width="565" height="67" alt="image" src="https://github.com/user-attachments/assets/d1c0f05e-bf17-4a51-b56d-bef21006a803" />
3. Compare cone locations to your expected mechanism pivot points.
4. If cones are incorrect, check:
    - measurement correctness,
    - coordinate order (`x`, `y`, `z`),
    - sign (positive vs negative).
5. Correct one axis at a time:
    - If the cone is mirrored front/back, flip the sign of `x`.
    - If the cone is mirrored left/right, flip the sign of `y`.
    - If the cone is mirrored up/down, flip the sign of `z`.
    - If the cone moves in a completely wrong direction, verify the axis order is still `x`, then `y`, then `z`.
6. After cone placement is correct, test mechanism motion in simulation.

If the cone locations are wrong, the mechanism will not move correctly in simulation. Do not continue until cone placement looks correct.
