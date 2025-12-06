# MotionMagic Lesson Guide

## How Do You Normally Run a Motor? (`.set` Percent Output)

Most robot programmers start by running motors with a simple command:

```java
// Run motor at 50% forward power
rightLiftMotorLeader.set(0.5);
```

- This sets the motor output as a percentage of full power (from -1.0 to 1.0).
- It's open-loop: the motor just runs at the speed you ask, with no feedback or position control.
- Good for simple tasks, but not precise—motors can overshoot, stall, or drift.

**Question:**  
When you drive a remote-control car or spin a fan, do you just turn it on and off, or do you control exactly where it stops?

---

## What Is MotionMagic?

MotionMagic is a special feature for controlling motors, made by CTRE for their Talon SRX and Talon FX motor controllers. It helps you move parts of your robot (like arms or elevators) smoothly and precisely to a target position, without needing to write complicated code.

**Question:**  
Have you ever tried to park a bike or scooter exactly at a certain spot? Was it easy to stop right where you wanted, or did you sometimes go past it or stop short?

## Why Do We Need MotionMagic?

When you want a robot part to move to a specific spot, you need to control its speed and position. If you just turn the motor on and off, it might move too fast, overshoot, or stop suddenly. MotionMagic solves this by automatically planning how the motor should speed up, slow down, and stop—making movements smooth and accurate.

**Question:**  
Think about riding in a car or on a bus. What happens if the driver stops suddenly versus slowing down gently? Which feels better and safer?

## What Is PID Control?

Before MotionMagic, people used something called "PID control" to make motors stop at the right spot. PID stands for:

- **P**roportional: How far you are from the target.
- **I**ntegral: How long you've been away from the target.
- **D**erivative: How quickly you're approaching the target.

PID helps motors reach and hold a position, but tuning it can be tricky. MotionMagic uses PID behind the scenes, so you don’t need to understand all the math—it does the hard work for you!

**Question:**  
Have you ever tried to balance something, like keeping a broom upright in your hand? What do you do when it starts to tip? How do you know if you’re correcting too much or too little?

## How Does MotionMagic Work?

MotionMagic creates a plan for your motor to follow, called a "motion profile." It decides how fast to go and how quickly to speed up or slow down, so your robot part moves smoothly to the target position.

**Question:**  
Imagine pushing a shopping cart. If you want it to stop at a certain spot, do you push hard and then slam on the brakes, or do you slow down as you get close? Why?

## Step-by-Step: Using MotionMagic

### Output Control: `.set` vs `.setControl`

Understanding how you command a motor is essential for using MotionMagic effectively. TalonFX motor controllers support two main ways to control output:

| Method                | What It Does                                      | Typical Use Case                |
|-----------------------|---------------------------------------------------|---------------------------------|
| `.set(value)`         | Sets percent output (-1.0 to 1.0, or -100% to 100%) | Simple open-loop speed control  |
| `.setControl(request)`| Uses advanced control modes (MotionMagic, PID, etc.) | Precise position or velocity    |

#### `.set(value)` — Percent Output

This is the most basic way to run a motor. You give it a value between -1.0 and 1.0, and the motor runs at that percentage of full power. This does **not** use any feedback or closed-loop control.

```java
// Run motor at 50% forward power
rightLiftMotorLeader.set(0.5);
```

- **Pros:** Simple, direct, good for testing.
- **Cons:** No position or speed control, can overshoot or stall.

#### `.setControl(request)` — Advanced Control

This method lets you use features like MotionMagic, PID, or velocity control. You create a control request object (such as `MotionMagicExpoVoltage`) that tells the motor controller exactly how to move, including target position, speed, acceleration, and which PID slot to use.

```java
// Move to a position using MotionMagic
MotionMagicExpoVoltage positionRequest = new MotionMagicExpoVoltage(targetHeight.in(Units.Inches));
rightLiftMotorLeader.setControl(positionRequest);
```

- **Pros:** Precise, smooth, uses feedback sensors, supports profiles.
- **Cons:** Requires configuration and understanding of control modes.

#### Why Use `.setControl` for MotionMagic?

MotionMagic needs to know where you want to go, how fast, and how smoothly. This is only possible with `.setControl` and a MotionMagic control request. Percent output (`.set`) cannot achieve this—it just runs the motor at a fixed speed.

**Summary:**  
- Use `.set` for simple, direct power control.
- Use `.setControl` for any closed-loop or profile-based movement, including MotionMagic.

### 1. Set Up Your Motor Controller

First, make sure your motor controller (Talon FX) is connected and your code can talk to it.

```java
// ...existing code...
TalonFX rightLiftMotorLeader = new TalonFX(mapMotion.RIGHT_LIFT_CAN);
TalonFX leftLiftMotorFollower = new TalonFX(mapMotion.LEFT_LIFT_CAN);
// ...existing code...
```

**Question:**  
Before you use a new tool or device, do you check if it’s working? Why is that important?

### 2. Configure MotionMagic Settings

Tell the controller how fast it should move (cruise velocity) and how quickly it should speed up (acceleration):

```java
// Create a config object for your lift motors
TalonFXConfiguration liftConfig = new TalonFXConfiguration();
liftConfig.MotionMagic.MotionMagicCruiseVelocity = 50.0; // units per second
liftConfig.MotionMagic.MotionMagicAcceleration = 100.0;  // units per second^2

rightLiftMotorLeader.getConfigurator().apply(liftConfig);
leftLiftMotorFollower.getConfigurator().apply(liftConfig);
```

**Question:**  
If you run or bike too fast and try to stop quickly, what happens? How does going slower or speeding up gently help you control where you stop?

### 3. Set PID Values

MotionMagic needs some numbers to help it control the motor. These are called PID values. You set these in your config object:

```java
// Set PID values in your config object
liftConfig.Slot0.kP = 0.1;
liftConfig.Slot0.kI = 0.0;
liftConfig.Slot0.kD = 0.0;
liftConfig.Slot0.kS = 0.0;

// Apply the updated config to both motors
rightLiftMotorLeader.getConfigurator().apply(liftConfig);
leftLiftMotorFollower.getConfigurator().apply(liftConfig);
```

**Question:**  
When you’re trying to hit a target with a ball, do you adjust how hard you throw if you miss? How do you decide what to change?

### 4. Move to a Position

Now you can tell the motor to move to a specific spot using MotionMagicExpoVoltage:

```java
// ...existing code...
MotionMagicExpoVoltage positionRequest = new MotionMagicExpoVoltage(targetHeight.in(Units.Inches));
rightLiftMotorLeader.setControl(positionRequest);
leftLiftMotorFollower.setControl(new Follower(rightLiftMotorLeader.getDeviceID(), true));
// ...existing code...
```

`targetHeight` is a Distance (like `Units.Inches.of(20)`).

**Question:**  
If you’re aiming for a spot on the ground, how do you know where to aim? What helps you decide where to stop?

### 5. Check If You’re At the Target

You can check if the motor has reached the position:

```java
// ...existing code...
boolean atTarget = Math.abs(rightLiftMotorLeader.getPosition().getValueAsDouble() - targetHeight.in(Units.Inches)) < toleranceInInches;
// ...existing code...
```

`toleranceInInches` is how close you want to be to the target.

## Example: Moving an Elevator

Here’s a simple method you might use in your subsystem:

```java
// ...existing code...
private void setLiftPosition(Distance height, int slot) {
    rightLiftMotorLeader.setControl(positionRequest.withPosition(height.in(Units.Inches)).withSlot(slot));
    leftLiftMotorFollower.setControl(new Follower(rightLiftMotorLeader.getDeviceID(), true));
}
// ...existing code...
```

**Question:**  
Can you think of other things (besides elevators) that need to move to a certain spot smoothly? What happens if they don’t?

## Tips for Beginners

- Start with low speeds and acceleration to avoid sudden movements.
- If the motor doesn’t stop at the right spot, adjust the PID values slowly.
- Always test with the robot safely supported.
- Use logs or print statements to see what the motor is doing.

**Question:**  
Before you try something new, do you make sure it’s safe? What steps do you take to avoid accidents?

## More Resources

- [CTRE MotionMagic Documentation](https://docs.ctre-phoenix.com/en/stable/ch13_MotionMagic.html)
- [FRC MotionMagic Examples](https://github.com/CrossTheRoadElec/Phoenix-Examples-Languages)

---
This guide is for beginners. You don’t need to know all the math—just follow the steps and experiment!
