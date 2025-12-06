# Gear Ratios and Unit Conversions

## What Are Gear Ratios?

A **gear ratio** describes the relationship between the rotations of two connected gears. In robotics, we use gear ratios to:

- **Change speed:** Make mechanisms move faster or slower
- **Change torque:** Increase power for heavy loads or reduce it for speed
- **Convert units:** Translate motor rotations into real-world measurements (inches, degrees, etc.)

When programming a robot, you need to tell the motor controller how many times the motor needs to spin to achieve the desired movement of your mechanism.

---

## Simple Gear Ratios

### Understanding the Concept

When two gears are connected:
- The **motor gear** (or **pinion**) is attached to the motor shaft
- The **driven gear** is attached to the mechanism (wheel, arm, etc.)

The gear ratio tells us: *"For every rotation of the motor, how many rotations does the mechanism make?"*

### Formula

```java
// Simple gear ratio
double gearRatio = motorGear / drivenGear;
```

### Example: Single Stage Gearbox

Imagine you have:
- **Motor gear:** 12 teeth
- **Wheel gear:** 60 teeth

```java
// The motor must spin 5 times for the wheel to spin once
double gearRatio = 12.0 / 60.0;  // = 0.2
```

!!! note "Integer vs Decimal Division"
    Always use decimal numbers (like `12.0` instead of `12`) to ensure accurate calculations. Using integers can result in integer division, giving incorrect results.

```java
// ❌ WRONG - Integer division
double gearRatio = 12 / 60;  // = 0 (incorrect!)

// ✅ CORRECT - Decimal division  
double gearRatio = 12.0 / 60.0;  // = 0.2 (correct!)
```

---

## Compound Gear Ratios

### What Are Compound Gear Ratios?

Many robot mechanisms use **multiple stages of gears** to achieve the desired ratio. This is called a **compound gear train**. Each stage multiplies with the previous one.

### Formula

```java
// Compound gear ratio (multiple stages)
double gearRatio = ((gear1 / gear2) * (gear3 / gear4));
```

### Understanding the Pattern

In a compound gear train:
- **gear1** and **gear3** are on the motor/input side
- **gear2** and **gear4** are on the mechanism/output side

The formula multiplies each stage's ratio together.

### Example: Two-Stage Gearbox

Imagine your mechanism has:
- **First stage:** 12-tooth motor gear driving a 60-tooth intermediate gear
- **Second stage:** 26-tooth gear (on same shaft as the 60-tooth) driving a 52-tooth wheel gear

```java
// Calculate the compound gear ratio
double gearRatio = ((12.0 / 60.0) * (26.0 / 52.0));
// = (0.2) * (0.5)
// = 0.1
```

This means the motor must spin **10 times** for the wheel to spin **once**.

### Example: Three-Stage Gearbox

For even more complex mechanisms:

```java
// Three stages of gears
double gearRatio = ((10.0 / 50.0) * (15.0 / 45.0) * (20.0 / 60.0));
// = (0.2) * (0.333) * (0.333)
// = 0.0222
```

### Real-World Usage in Code

When configuring a motor controller (like TalonFX):

```java
// Define gear ratios as constants
public static final double STAGE_1_RATIO = 12.0 / 60.0;
public static final double STAGE_2_RATIO = 26.0 / 52.0;
public static final double GEAR_RATIO = STAGE_1_RATIO * STAGE_2_RATIO;

// Apply to motor configuration
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = GEAR_RATIO;
```

Or write it directly:

```java
// Direct compound gear ratio
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = ((12.0 / 60.0) * (26.0 / 52.0));
```

---

## Converting Rotational to Linear Movement

### Why Do We Need This Conversion?

Motors measure movement in **rotations**. But often, we want to know **linear distance** (inches, centimeters) or **angular position** (degrees).

For mechanisms like elevators, arms, or drivetrains, we need to convert between these units.

### Formula for Linear Conversion

When a wheel, sprocket, or pulley rotates, it travels a linear distance equal to its **circumference**:

```java
// Circumference of a circle
double circumference = diameter * Math.PI;
```

For one full rotation of the wheel:
- **Distance traveled = diameter × π**

### Example: Drivetrain Wheels

Your robot has 4-inch diameter wheels:

```java
// Calculate how far the robot moves per wheel rotation
double wheelDiameter = 4.0;  // inches
double distancePerRotation = wheelDiameter * Math.PI;
// = 4.0 * 3.14159...
// = 12.566 inches per rotation
```

### Complete Example: Drivetrain with Gears

Let's combine gear ratios with linear conversion:

**Setup:**
- Motor gear: 12 teeth
- Wheel gear: 60 teeth
- Wheel diameter: 4 inches

```java
// Step 1: Calculate gear ratio
double gearRatio = 12.0 / 60.0;  // 0.2

// Step 2: Calculate wheel circumference
double wheelDiameter = 4.0;  // inches
double wheelCircumference = wheelDiameter * Math.PI;  // 12.566 inches

// Step 3: Calculate distance per motor rotation
double distancePerMotorRotation = gearRatio * wheelCircumference;
// = 0.2 * 12.566
// = 2.513 inches per motor rotation
```

### Applying to Motor Configuration

In CTRE Phoenix 6 (modern FRC programming):

```java
// Define constants
public static final double WHEEL_DIAMETER_INCHES = 4.0;
public static final double GEAR_RATIO = (12.0 / 60.0);

// Calculate the sensor-to-mechanism ratio
// This tells the motor: "For every rotation I measure, the wheel moves this far"
public static final double DISTANCE_PER_ROTATION = WHEEL_DIAMETER_INCHES * Math.PI;
public static final double ROTATIONS_TO_INCHES = GEAR_RATIO * DISTANCE_PER_ROTATION;

// Apply to motor configuration
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = GEAR_RATIO;
```

!!! tip "Different Units for Different Mechanisms"
    - **Drivetrains:** Use inches or meters for linear distance
    - **Arms/Pivots:** Use degrees or radians for angular position  
    - **Elevators:** Use inches or centimeters for height

---

## Practical Examples

### Example 1: Elevator with Sprocket

**Setup:**
- Motor gear: 10 teeth
- Sprocket gear: 50 teeth  
- Sprocket diameter: 2 inches

```java
// Gear ratio
double gearRatio = 10.0 / 50.0;  // 0.2

// Sprocket circumference
double sprocketDiameter = 2.0;
double sprocketCircumference = sprocketDiameter * Math.PI;  // 6.283 inches

// Elevator height per motor rotation
double heightPerMotorRotation = gearRatio * sprocketCircumference;
// = 0.2 * 6.283 = 1.257 inches

// Apply to motor config
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = gearRatio;
```

### Example 2: Arm Pivot

**Setup:**
- Motor gear: 15 teeth
- Arm gear: 75 teeth
- No linear conversion needed (we want degrees)

```java
// Gear ratio (degrees to degrees - motor rotations to arm rotations)
double gearRatio = 15.0 / 75.0;  // 0.2

// The motor must rotate 5 times (1 / 0.2) for the arm to rotate 1 full rotation (360 degrees)

// Apply to motor config
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = gearRatio;
```

### Example 3: Shooter with Two-Stage Reduction

**Setup:**
- Stage 1: 18-tooth motor gear → 54-tooth intermediate
- Stage 2: 24-tooth intermediate → 48-tooth wheel
- Wheel diameter: 4 inches

```java
// Compound gear ratio
double gearRatio = ((18.0 / 54.0) * (24.0 / 48.0));
// = (0.333) * (0.5) = 0.167

// Wheel circumference
double wheelDiameter = 4.0;
double wheelCircumference = wheelDiameter * Math.PI;  // 12.566 inches

// Distance per motor rotation
double distancePerMotorRotation = gearRatio * wheelCircumference;
// = 0.167 * 12.566 = 2.098 inches

// Apply to motor config
MOTOR_CONFIG.Feedback.SensorToMechanismRatio = gearRatio;
```

---

## Common Pitfalls

### 1. Integer Division

```java
// ❌ WRONG - Results in 0
double ratio = 12 / 60;

// ✅ CORRECT
double ratio = 12.0 / 60.0;
```

### 2. Inverted Ratios

Make sure you have the correct numerator and denominator:

```java
// If motor gear has 12 teeth and wheel gear has 60 teeth:

// ❌ WRONG - This would mean the motor spins slower than the wheel!
double ratio = 60.0 / 12.0;  // = 5.0 (incorrect)

// ✅ CORRECT - Motor spins faster than the wheel
double ratio = 12.0 / 60.0;  // = 0.2 (correct)
```

### 3. Forgetting Units

Always document your units in comments:

```java
// ✅ GOOD - Clear units
public static final double WHEEL_DIAMETER_INCHES = 4.0;  // inches
public static final double GEAR_RATIO = 12.0 / 60.0;  // motor rotations per wheel rotation
```

---

## Quick Reference

| Mechanism Type | Gear Ratio Formula | Linear Conversion |
|----------------|-------------------|-------------------|
| **Simple Gearbox** | `motorGear / drivenGear` | `diameter * PI` |
| **Two-Stage Gearbox** | `(gear1/gear2) * (gear3/gear4)` | `diameter * PI` |
| **Three-Stage Gearbox** | `(gear1/gear2) * (gear3/gear4) * (gear5/gear6)` | `diameter * PI` |

---

## Additional Resources

- [CTRE Phoenix 6 Documentation](https://v6.docs.ctr-electronics.com/)
- [WPILib Documentation](https://docs.wpilib.org/)
- [Gear Ratio Calculator](https://www.roboticseducation.org/gear-ratio-calculator/)

---

This guide is designed for FRC programmers who need to configure motor controllers with accurate gear ratios and unit conversions. Always double-check your ratios with your mechanical team!
