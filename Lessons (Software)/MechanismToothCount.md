# Reading CAD for Tooth Count and Motor Direction

## Open the CAD Assembly

Start with the mechanism and work toward the motor.

1. Open the mechanism assembly in CAD.
2. Click the output gear, pulley, or sprocket that is attached to the mechanism.
3. Look at the sidebar label for the part.
4. If the label includes `t`, that is the tooth count.
5. Keep clicking one stage at a time until you reach the motor.

For example, you might write the stages down like this:

> Mechanism gear: 60t driven by a 12t gear. Next stage: 52t driven by a 26t gear.

---

## Writing the Tooth Count in Code

### Single Stage

```java
// Mechanism gear: 60 tooth, driven by a 12 tooth gear
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = 60.0 / 12.0;
```

### Multiple Stages

```java
// Mechanism gear: 60 tooth, driven by a 12 tooth gear
// Next stage toward motor: 52 tooth, driven by a 26 tooth gear
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = (60.0 / 12.0) * (52.0 / 26.0);
```

!!! note "Always use decimal numbers"
    Use `12.0` instead of `12` to avoid integer division giving incorrect results.

## Reading Motor Direction from CAD

Pick what you want the mechanism's positive direction to be first, then trace back toward the motor.

- **Gears touching each other** reverse direction every time they mesh.
- **Chain or belt stages** keep the same direction unless the belt is crossed.
- If you count an **odd** number of gear meshes between the mechanism and motor, the motor spins the **opposite** direction of positive mechanism motion.
- If you count an **even** number of gear meshes, the motor spins the **same** direction as positive mechanism motion.

When you finish tracing the stages, set motor inversion so a positive command moves the mechanism in the positive direction you picked.

---

## Rotational to Linear Conversion

> Mechanism sprocket: 50t driven by a 10t sprocket. The sprocket pitch diameter is 1.751 inches.

For mechanisms that move linearly (elevator), multiply the sprocket or wheel diameter by **π** to get the distance traveled per rotation (circumference):

```java
// Sprocket diameter: 2 inches
// Mechanism sprocket: 50 tooth, driven by a 10 tooth sprocket
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = (50.0 / 10.0) / (2.0 * Math.PI);
```

---

## Additional Resources

- [CTRE Phoenix 6 Documentation](https://v6.docs.ctr-electronics.com/)
- [WPILib Documentation](https://docs.wpilib.org/)
