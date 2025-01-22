# Tuning Auto PID

## Prerequisites
- Measuring tape
- Field space
- Fruit snacks
- Robot with a swerve drivetrain
- Tape

## Steps for Basic Drive PID Tuning

1. Create an autonomous routine that moves 1 meter on the X axis
2. Mark 1 meter distance on the X axis using tape
3. Line up the robot with the tape marks, ensuring correct drive direction
4. Disable Limelight vision system (tune it so it cannot see anything)
5. Set initial PID constants:
    - P = 1.0
    - I = 0.0
    - D = 0.0

## Tuning Process

### Drive Sideways Tuning
1. Run the autonomous routine
2. Increase P value until robot consistently reaches the tape mark
3. Extend the test distance to 2 meters
4. Verify performance at longer distance
5. Further tune if needed
6. If slight overshooting occurs, add B (feed-forward) value

### Rotation Tuning
1. Modify autonomous path to include 180-degree in place rotation
2. Set initial PID constants:
    - P = 1.0
    - I = 0.0
    - D = 0.0
3. Tune rotation P value until turn is consistent
4. If slight overshooting occurs, add B (feed-forward) value

## Completion
- Once satisfied with performance, commit the changes to your GitHub branch