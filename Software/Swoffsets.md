# Swoffsets (Swerve Offsets)

## Resources you must gather
- A straight-edge, slightly longer than the distance between modules (A 1 inch tube works fine for this)
- 2 Swoffset Bricks (3d printed, found in the Electrical Cabinet's "Other Tools" Drawer)
- A Laptop with the following Software installed:
    - Glass
    - Code for that robot
    - FRC Driver Station
    - AdvantageScope
    - Phoenix Tuner
- A Controller
- Gaff Tape & A Sharpie

---
## Set the Front of the Robot (if not already done)
If this hasn't been done already, you need to determine where the *front* of the robot will be and name the modules accordingly.
The front of the robot is typically the side that the scoring mechanism is on, but it can be any side. Having it be the scoring mechanism side makes it easy to remember. 

Whichever side you choose, you need to keep it consistent across *both robots, the AdvantageScope models, and PathPlanner.* You'll need to communicate which side is the front to the rest of your team.

### Steps
1. Pick a side to be the front!
2. Take Gaff tape and *physically label* the front of the robot so that it's visible from the underside
3. Also label the **robot's** left & right. This saves lots of headaches later 
> If you're looking at the underside, this will be the OPPOSITE of *your* left and right, since they're relative to where the robot's left is when it's on the ground.
4. Put small labels near each module to indicate if they're `Front left, Front Right, Back Left, or Back Right`. 
5. Using Phoenix Tuner, set the CAN id's & names of all Motors & CANCoders to match their physical location. 

---
## Actually getting the swoffsets
1. Power on the robot
2. Deploy your current code to the robot if you haven't already
2. Identify the *front right and back right* swerve modules
3. Rotate *both* Bevels to face the robot's **right**
    - Bevels are the spiky lookin gear things on the side of the wheel
4. Insert the Swoffset blocks into those modules, then press your straightedge to ensure that they're straight.
    - ![Swoffset Blocks](../.images/Software/Swoffsets/IMG_8986.jpg)
    - ![Straightedge](../.images/Software/Swoffsets/IMG_8987.jpg)
5. Connect to the robot, then open Glass
6. Navigate to the dropdown that shows the Absolute (Raw) Encoder values for your modules
    - Front Left = 0, Front Right = 1, Back Left = 2, Back Right = 3
    - ![Glass](../.images/Software/Swoffsets/glass_eu4L6ovWEM.png)
7. Copy the Absolute Encoder Raw value for that module and paste it into the offset constant in your code
8. Once you've done both modules, repeat steps 2-7 with the *front left and back left* modules

---
## Verifying that it works
1. Redeploy code to the robot, now with the correct offsets
2. Open AdvantageScope and navigate to the `Swerve` tab
3. Drag over the `Desired States` and `Actual States` to the Sources
4. Open driverstation, connect a controller, and begin driving
5. If pressing up on the joystick makes the robot drive forwards, you've done swoffsets correctly!
6. Verify that the `Desired States` match `Actual States` using the AdvantageScope UI and revel in how cool they look
![AdvantageScope](../.images/Software/Swoffsets/AdvantageScope_(WPILib)_HAoyjhRLd6.png)
