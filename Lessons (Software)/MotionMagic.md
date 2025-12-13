## MotionMagic Lesson Guide

!!! important

    `motorName` and its capitalization variations (e.g., `MOTOR_NAME_CONFIG`, `MotorName`) are placeholders. Replace them with your actual motor name throughout the code examples.

## How Do You Normally Run a Motor? (`.set` Percent Output (Power))

Most robot programmers start by running motors with a simple command:

```java
// Run motor at 50% forward power
motorName.set(0.5);
```

- This sets the motor output as a percentage of full power (from -1.0 to 1.0).
- It's open-loop: the motor just runs at the power you ask, with no feedback or position control.
- Good for simple tasks, but not precise—motors can overshoot, stall, or drift.

---

## What Is MotionMagic?

MotionMagic is a special feature for controlling motors, made by CTRE for their Talon SRX and Talon FX motor controllers. It helps you move parts of your robot (like arms or elevators) smoothly and precisely to a target position, without needing to write complicated code.

## What Is PID Control?

Before MotionMagic, people used something called "PID control" to make motors stop at the right spot. PID stands for:

- **P**roportional: How far you are from the target.
- **I**ntegral: How long you've been away from the target.
- **D**erivative: How quickly you're approaching the target.

PID helps motors reach and hold a position, but tuning it can be tricky. MotionMagic uses PID behind the scenes, so you don’t need to understand all the math—it does the hard work for you!

## How Does MotionMagic Work?

MotionMagic creates a plan for your motor to follow, called a "motion profile." It decides how fast to go and how quickly to speed up or slow down, so your robot part moves smoothly to the target position.

![](https://v6.docs.ctr-electronics.com/en/latest/_images/trapezoidal-profile.png)

## Output Control: `.set` vs `.setControl`

Understanding how you command a motor is essential for using MotionMagic effectively. TalonFX motor controllers support two main ways to control output:

| Method                | What It Does                                      | Typical Use Case                |
|-----------------------|---------------------------------------------------|---------------------------------|
| `.set(value)`         | Sets percent output (-1.0 to 1.0, or -100% to 100%) | Simple open-loop power control  |
| `.setControl(request)`| Uses advanced control modes (MotionMagic) | Precise position or velocity    |

---

## Power Control (Not PID)

## `.set(value)` — Percent Output (Power)

This is the most basic way to run a motor. You give it a value between -1.0 and 1.0, and the motor runs at that percentage of full power. This does **not** use any feedback or closed-loop control.

```java
// Define the function in the Motion subsystem 
public void setMotorNamePower(double power) {
  motorName.set(power);
}
```

```java
// Usage example of Percent Output
double power = 0.5;  // This would be stored in constants
motionInstance.setMotorNamePower(power);  // This would be called in the state
```

- **Pros:** Simple, direct, good for testing.
- **Cons:** No position or power control, can overshoot or stall.

---

## Position PID

## `.setControl(request)` — Advanced Control

This method lets you use features like MotionMagic, PID, or velocity control. You create a control request object (such as `MotionMagicExpoVoltage` or `MotionMagicVelocityVoltage`) that tells the motor controller exactly how to move, including target position or velocity, acceleration, and which PID slot to use.

```java
// Define the function in Motion Subsystem
MotionMagicExpoVoltage motorNamePositionRequest = new MotionMagicExpoVoltage(0); // Create object at top of file and reuse

public void setMotorNameAngle(Angle targetAngle) {
  motorName.setControl(motorNamePositionRequest.withPosition(targetAngle));
}
```

```java
// Usage example of angles as Degrees units
Angle targetAngle = Degrees.of(65.15);  // This would be stored in constants
motionInstance.seMotorNameAngle(targetAngle);  // This would be called in the state
```

- **Pros:** Precise, smooth, uses feedback sensors, supports profiles.
- **Cons:** Requires configuration and understanding of control modes.

## Configure Your Mechanism Settings for Position PID

Before using MotionMagicExpo, configure your mechanism's TalonFX with the correct position-control settings. This includes PID values, sensor-to-mechanism ratio, and gravity compensation type.

- **PID values** (`kP`, `kI`, `kD`, `kS`, `kG`) control how the motor responds to errors and gravity.

```java
// --- PID and Feedforward Constants ---
// NOTE: We start by setting all to 0, we will tune these later
// Feedforward
MOTOR_NAME_CONFIG.Slot0.kS = 0;    // Static gain (overcomes friction)
MOTOR_NAME_CONFIG.Slot0.kG = 0;   // Gravity feedforward (helps hold up against gravity)
// PID
MOTOR_NAME_CONFIG.Slot0.kP = 0;    // Proportional gain (how hard to correct position error)
```

- **GravityType** tells the controller how to compensate for gravity (use `Elevator_Static` for vertical lifts, `Arm_Cosine` for rotating arms). **DO DEMO**

```java
// --- Gravity Compensation Type ---
MOTOR_NAME_CONFIG.Slot0.GravityType = GravityTypeValue.Elevator_Static;
// Use Elevator_Static for vertical lifts, Arm_Cosine for rotating arms
```

- **SensorToMechanismRatio** ensures setpoints and feedback are in real-world units (like inches or degrees). This is what we call "Gear Ratio". We just ask mechanical for this value. Each number represents a gear.

```java
// --- Sensor Conversion ---
MOTOR_NAME_CONFIG.Feedback.SensorToMechanismRatio = ((12.0 / 60.0) * (26.0 / 52.0));
// MOTOR_NAME_CONFIG.Feedback.SensorToMechanismRatio = ((GEAR_1 / GEAR_2) * (GEAR_3 / GEAR_4));
// Converts motor rotations to mechanism units (e.g., inches of elevator travel)
```

```java
// --- Apply the config to motor like we already do ---
motorName.getConfigurator().apply(constMotion.MOTOR_NAME_CONFIG);
```

---

## Velocity PID

## `.setControl(request)` — Velocity Control (MotionMagicVelocity)

Use this when you want to hit and maintain a target velocity. Set your targets and limits in WPILib RPM, then convert to the Talon's expected units under the hood. Keep everything in Slot0—no extra slot juggling needed.

```java
// Define the function in Rotors Subsystem
MotionMagicVelocityVoltage motorNameVelocityRequest = new MotionMagicVelocityVoltage(0); // Create once and reuse

public void setMotorNameVelocity(AngularVelocity targetVelocity) {
  motorName.setControl(motorNameVelocityRequest.withVelocity(targetVelocity));
}
```

```java
// Usage example
AngularVelocity shooterTargetRMP = RPM.of(4500); // This would be stored in constants
rotorsInstance.setMotorNaVelocity(shooterTargetRpm);  // This would be called in the state
```

- **Pros:** Precise, smooth, uses feedback sensors, supports profiles.
- **Cons:** Requires configuration and understanding of control modes.

## Configure Your Mechanism Settings for Velocity PID

Before using MotionMagicVelocity, configure your mechanism's TalonFX with the correct velocity-control settings. This includes PID values, sensor-to-mechanism ratio, and any gravity compensation your mechanism needs. Keep everything in Slot0—no slot switching—and express targets/limits in WPILib `Units.RPM`, converting to the Talon's units.

- **Slot0 gains** — Velocity feedback (`kP`, `kI`, `kD`) plus feedforward (`kS`, `kV`, `kA`).
- **Profile limits** — MotionMagic acceleration and jerk, entered in RPM and converted to rotations/sec units.
- **Gravity compensation** — Optional; set if your velocity mechanism benefits from offsetting gravity.
- **SensorToMechanismRatio** — Converts motor rotations to mechanism units; keep consistent with your position setup if shared hardware.

```java
// --- Velocity PID and Feedforward Constants ---
// NOTE: We start by setting all to 0, we will tune these later
// Feedforward
MOTOR_NAME_CONFIG.Slot0.kS = 0;    // Static gain (overcomes friction)
MOTOR_NAME_CONFIG.Slot0.kV = 0;    // Velocity feedforward
MOTOR_NAME_CONFIG.Slot0.kA = 0;    // Acceleration feedforward
// PID (velocity loop)
MOTOR_NAME_CONFIG.Slot0.kP = 0;    // Proportional gain (velocity error)
```

```java
// --- MotionMagic Velocity Limits ---
MOTOR_NAME_CONFIG.MotionMagic.MotionMagicCruiseVelocity = 60;
MOTOR_NAME_CONFIG.MotionMagic.MotionMagicAcceleration = 600;
MOTOR_NAME_CONFIG.MotionMagic.MotionMagicJerk = 6000;
```

```java
// --- Apply the config to motor like we already do ---
motorName.getConfigurator().apply(constMotion.MOTOR_NAME_CONFIG);
```

## More Resources

- [CTRE MotionMagic Documentation](https://docs.ctre-phoenix.com/en/stable/ch13_MotionMagic.html)
- [FRC MotionMagic Examples](https://github.com/CrossTheRoadElec/Phoenix-Examples-Languages)

---
This guide is for beginners. You don’t need to know all the math—just follow the steps and experiment!
