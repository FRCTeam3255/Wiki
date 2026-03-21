# Mechanism Tooth Info

## How Mechanical Gives You Tooth Info

Mechanical will give you the tooth counts for each stage. For example:

> "1st Stage is a 12 tooth driver gear spinning a 60 tooth follower gear. 2nd Stage is a 26 tooth driver gear spinning a 52 tooth follower gear."

---

## Writing the Tooth Info in Code

### Single Stage

```java
// 1st Stage: 12 tooth driver, 60 tooth follower
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = 1.0 / (12.0 / 60.0);
```

### Multiple Stages

```java
// 1st Stage: 12 tooth driver, 60 tooth follower
// 2nd Stage: 26 tooth driver, 52 tooth follower
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = 1.0 / ((12.0 / 60.0) * (26.0 / 52.0));
```

!!! note "Always use decimal numbers"
    Use `12.0` instead of `12` to avoid integer division giving incorrect results.

---

## Rotational to Linear Conversion

> "1st Stage is a 10 tooth driver gear spining a 50 tooth. The sprocket pitch diameter is 1.751 inches."

For mechanisms that move linearly (elevator), multiply the sprocket or wheel diameter by **π** to get the distance traveled per rotation (circumfrence):

```java
// Sprocket diameter: 2 inches
// 1st Stage: 10 tooth driver, 50 tooth follower
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = 1.0 / ((10.0 / 50.0) * (2.0 * Math.PI));
```

---

## Additional Resources

- [CTRE Phoenix 6 Documentation](https://v6.docs.ctr-electronics.com/)
- [WPILib Documentation](https://docs.wpilib.org/)

