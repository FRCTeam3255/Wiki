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

Use the WPILib Units library when working with measured values:

```java
// Sprocket diameter as a typed measurement
Distance sprocketDiameter = Units.Inches.of(2);
double circumference = sprocketDiameter.in(Units.Inches) * Math.PI;
```

---

## Additional Resources

- [CTRE Phoenix 6 Documentation](https://v6.docs.ctr-electronics.com/)
- [WPILib Documentation](https://docs.wpilib.org/)

