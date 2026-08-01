# Naming Conventions
- Classes should be UpperCamelCase
- Methods should be lowerCamelCase
- Local & Instance Variables should be lowerCamelCase

---
# Project Structure

The standard project layout under `src/main/java/frc/robot/` is:

```
frc/robot/
├── DeviceIDs.java          ← all hardware port/ID mappings
├── Main.java
├── Robot.java
├── RobotContainer.java
│
├── commands/               ← general-purpose commands
│   ├── states/             ← one command class per RobotState
│   │   ├── Intaking.java
│   │   ├── Shooting.java
│   │   ├── None.java
│   │   └── preps/          ← prep-specific state commands
│   │       ├── BasePrep.java
│   │       ├── PrepAnywhere.java
│   │       └── PrepTrench.java
│
├── constants/              ← one Const*.java file per subsystem
│   ├── ConstDrivetrain.java
│   ├── ConstRotors.java
│   ├── ConstMotion.java
│   └── ConstSystem.java
│
└── subsystems/             ← one class per subsystem
    ├── Drivetrain.java
    ├── Rotors.java
    ├── Motion.java
    ├── StateMachine.java
    └── DriverStateMachine.java
```

---

## Follower Motor Naming Conventions

- Each motor cluster should have exactly one `...Leader`; every other motor in that cluster should be a `...Follower`.
- Reusable `Follower` control objects should include `Follower` in the name and end in either `AlignedRequest` or `OpposedRequest`.
- Do not include `East`, `West`, `North`, or `South` in `Follower` request names. The motor variables already describe which hardware is following.
- Leave a blank line between motor clusters so each cluster is easier to scan in the subsystem.

Example:

```java
final TalonFX intakeRollersWestLeader = new TalonFX(rotorIDs.INTAKE_ROLLERS_WEST_CAN);
final TalonFX intakeRollersEastFollower = new TalonFX(rotorIDs.INTAKE_ROLLERS_EAST_CAN);

final TalonFX transferRollersWestLeader = new TalonFX(rotorIDs.TRANSFER_ROLLERS_WEST_CAN);
final TalonFX transferRollersEastFollower = new TalonFX(rotorIDs.TRANSFER_ROLLERS_EAST_CAN);

final Follower intakeRollersFollowerOpposedRequest =
    new Follower(intakeRollersWestLeader.getDeviceID(), MotorAlignmentValue.Opposed);
final Follower transferRollersFollowerAlignedRequest =
    new Follower(transferRollersWestLeader.getDeviceID(), MotorAlignmentValue.Aligned);
```

## State Naming Conventions

- There is **one** shared `RobotState` enum for the entire robot — do not create separate enums per mechanism.
- State names should use verbs in **gerund form** (-ing), representing an ongoing action or condition.

Example: ❌

```java
enum RobotState {
  NONE,
  INTAKE,
  SHOOT,
  CLIMB
}
```

Example: ✔

```java
enum RobotState {
  NONE,
  INTAKING,
  SHOOTING,
  CLIMBING
}
```

## RobotContainer Naming Conventions

Controllers should be named `con` followed by the controller type.
```java
private final SN_XboxController conDriver = new SN_XboxController(controllerIDs.DRIVER_USB);
```

Subsystems should be declared as a `public static` instance named with an `Instance` suffix, followed by a `private final` logged reference pointing to the same object.
```java
public static Drivetrain drivetrainInstance = new Drivetrain();
private final Drivetrain loggedDrivetrainInstance = drivetrainInstance;
public static Rotors rotorsInstance = new Rotors();
private final Rotors loggedRotorsInstance = rotorsInstance;
```

Driver and operator bindings should be declared using separate methods with no parameters.
```java
configDriverBindings();
configOperatorBindings();
```

State-transition `Command` fields in `RobotContainer` should be **SCREAMING_SNAKE_CASE** and prefixed with `TRY_`. Non-state commands (e.g. drive modes) are also SCREAMING_SNAKE_CASE with a descriptive name.
```java
Command TRY_INTAKING = Commands.deferredProxy(
    () -> stateMachineInstance.tryState(RobotState.INTAKING));
Command TRY_SHOOTING = Commands.deferredProxy(
    () -> stateMachineInstance.tryState(RobotState.SHOOTING));
Command TRY_NONE = Commands.deferredProxy(
    () -> stateMachineInstance.tryState(RobotState.NONE));

Command MANUAL = new DeferredCommand(
    driverStateMachineInstance.tryState(DriverState.MANUAL, ...), Set.of(...));
```

## DeviceIDs Naming Conventions

- All device IDs live in a single top-level `DeviceIDs.java` file. It should contain a nested inner class for **every** subsystem. Inner class names use **lowerCamelCase** with an `IDs` suffix.

Example:

```java
public class DeviceIDs {
    public static class drivetrainIDs {
    }
    public static class rotorIDs {
    }
    public static class motionIDs {
    }
}
```

- All IDs should be **SCREAMING_SNAKE_CASE**.
- Each ID name should follow this naming scheme: `DEVICETYPE_LOCATION_CONNECTIONTYPE`. Common connection types include: `CAN, DIO, USB`
- CAN IDs specifically should follow the convention: `MECHANISM_POSITION_CAN` (e.g. `INTAKE_ROLLERS_WEST_CAN`)
- Variable names should avoid specifying which subsystem they belong to, as that information is redundant when they're referenced.

Example: ❌

```java
public static class rotorIDs {
    public static final int INTAKE_ROLLERS_WEST_CAN = 5;
}
```

Example: ✔

```java
public static class rotorIDs {
    public static final int ROLLERS_WEST_CAN = 5;
}
```

## Constants Naming Conventions

- Each subsystem should have its own dedicated constants file in the `constants/` package, named with the `Const` prefix followed by the subsystem name.

Example:

```
constants/
├── ConstDrivetrain.java
├── ConstRotors.java
├── ConstMotion.java
└── ConstSystem.java
```

Each file is a standalone `public class` with `public static final` fields. Use WPILib `Units` typed measures (e.g. `Angle`, `AngularVelocity`, `Time`) for all physical quantities instead of raw `double`s. Every `TalonFXConfiguration` must be declared at the top of the class and configured in a `static` initializer block:

```java
public class ConstRotors {
    public static final AngularVelocity FLYWHEEL_CORNER_SPEED = RPM.of(4250);
    public static final TalonFXConfiguration FLYWHEEL_WEST_CONFIGURATION = new TalonFXConfiguration();
    public static final TalonFXConfiguration FLYWHEEL_EAST_CONFIGURATION = new TalonFXConfiguration();

    static {
        FLYWHEEL_WEST_CONFIGURATION.MotorOutput.NeutralMode = NeutralModeValue.Coast;
        FLYWHEEL_WEST_CONFIGURATION.MotorOutput.Inverted = InvertedValue.CounterClockwise_Positive;
        FLYWHEEL_EAST_CONFIGURATION.MotorOutput.NeutralMode = NeutralModeValue.Coast;
        FLYWHEEL_EAST_CONFIGURATION.MotorOutput.Inverted = InvertedValue.Clockwise_Positive;
        // ... more configurations
    }
}
```

Nested inner classes use **SCREAMING_SNAKE_CASE** to group logical sub-sections such as hardware variants or tuning sets:

```java
public class ConstDrivetrain {
    public static class PRACTICE_BOT {
        public static final Angle FRONT_LEFT_ENCODER_OFFSET = Rotations.of(-0.19);
    }
    public static class AUTO_ALIGN {
        public static final PIDController CONTROLLER = new PIDController(3, 0, 0);
    }
}
```

`ConstSystem` uses the `constControllers` inner class (lowerCamelCase) specifically for controller deadband settings:

```java
public final class ConstSystem {
    public static class constControllers {
        public static final double DRIVER_LEFT_STICK_DEADBAND = 0.05;
    }
}
```

- All constant fields should be **SCREAMING_SNAKE_CASE**
- Each constant name should follow this naming scheme: `PURPOSE_DESCRIPTION`, where the purpose is what the variable is used for (e.g. `OUTTAKE`, `DETECT`) while the description includes the minimum amount of details to remove ambiguity (e.g. `TOLERANCE`, `DISTANCE`, `SPEED`)
- Use WPILib `Units` typed measures for all physical quantities — since the type communicates the unit, descriptive suffixes like `SPEED` and `ANGLE` are valid in names
- For raw `double` motor power values (-1 to 1), use `PERCENT_OUTPUT` as the description suffix
- **Every** motor **must** have a `TalonFXConfiguration` constant. Name it with the motor's descriptive name followed by `_CONFIGURATION`. Configure it in a `static` initializer block.
- Variable names should avoid specifying which subsystem they belong to, as that information is redundant when they're referenced.

Example: ❌

```java
// ConstRotors.java
public static final double ROLLERS_CURRENT_LIMIT_FLOOR = 1; 
```

Example: ✔

```java
// ConstRotors.java
public static final double CURRENT_LIMIT_FLOOR = 1; 
```
---
# Units

- Use WPILib's `Units` class to avoid ambiguity whenever possible
- If you need to do any unit conversions, do them in code using the Units class. Avoid converting values outside of the code project.

Example: ❌

```java
public static final Distance WHEEL_DIAMETER = Units.Inches.of(3.98);
public static final double WHEEL_CIRCUMFERENCE = 0.31742888;
```

Example: ✔

```java
public static final Distance WHEEL_DIAMETER = Units.Inches.of(3.98);
public static final double WHEEL_CIRCUMFERENCE = WHEEL_DIAMETER.in(Units.Meters) * Math.PI;
```

---
# Logging
All subsystems should include a `@Logged` declaration on top of the class header.
```java
@Logged
public class RobotContainer {
```

# Importing
- When possible, modify imports to include  `.*` from large files rather than importing the individual classes within that file.

Example: ❌

```java
import frc.robot.subsystems.AlgaeIntake;
import frc.robot.subsystems.CoralOuttake;
import frc.robot.subsystems.Drivetrain;
```

Example: ✔

```java
import frc.robot.subsystems.*;
```