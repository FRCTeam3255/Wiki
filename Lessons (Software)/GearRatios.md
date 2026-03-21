# Gear Ratios and Unit Conversions

## What Is a Gear Ratio?

A **gear ratio** describes how many times the motor must spin for the mechanism to spin once. In FRC, we use it to configure `SensorToMechanismRatio` so the motor controller knows how far the mechanism has moved.

- The **Driving** gear is on the motor/input side
- The **Driven** gear is on the mechanism/output side

---

## Writing the Gear Ratio

### Single Stage

```java
// Stage 1: 12 tooth driving, 60 tooth driven
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = 1.0 / (12.0 / 60.0);
```

### Multiple Stages

```java
// Stage 1: 12 tooth driving, 60 tooth driven
// Stage 2: 26 tooth driving, 52 tooth driven
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = 1.0 / ((12.0 / 60.0) * (26.0 / 52.0));
```

!!! note "Always use decimal numbers"
    Use `12.0` instead of `12` to avoid integer division giving incorrect results.

---

## Rotational to Linear Conversion

For mechanisms that move linearly (elevator, drivetrain), multiply the sprocket or wheel diameter by **π** to get the distance traveled per rotation:

```java
// Sprocket diameter: 2 inches
// Stage 1: 10 tooth driving, 50 tooth driven
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = 1.0 / ((10.0 / 50.0) * (2.0 * Math.PI));
```

---

## How Mechanical Gives You Gear Info

Mechanical will give you the tooth counts for each gear stage. For example:

> "Stage 1 is a 12 tooth driving a 60 tooth. Stage 2 is a 26 tooth driving a 52 tooth."

Plug those numbers directly into the formula:

```java
// Stage 1: 12 tooth driving, 60 tooth driven
// Stage 2: 26 tooth driving, 52 tooth driven
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = 1.0 / ((12.0 / 60.0) * (26.0 / 52.0));
```

For a linear mechanism, mechanical will also give you the sprocket or pulley pitch diameter:

> "Stage 1 is a 10 tooth driving a 50 tooth. The sprocket pitch diameter is 1.751 inches."

```java
// Stage 1: 10 tooth driving, 50 tooth driven
// Sprocket pitch diameter: 1.751 inches
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = 1.0 / ((10.0 / 50.0) * (1.751 * Math.PI));
```

---

## Additional Resources

- [CTRE Phoenix 6 Documentation](https://v6.docs.ctr-electronics.com/)
- [WPILib Documentation](https://docs.wpilib.org/)

