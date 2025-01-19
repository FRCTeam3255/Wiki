# Naming Conventions
- Classes should be UpperCamelCase
- Methods should be lowerCamelCase
- Local & Instance Variables should be lowerCamelCase

## RobotContainer Naming Conventions

Controllers should be named `con` followed by the controller type.
```java
private final SN_XboxController conDriver = new SN_XboxController(mapControllers.DRIVER_USB);
```
Subsystems should be named `sub` followed by the subsystem name.
```java
private static final Drivetrain subDrivetrain = new Drivetrain();
```
A test controller should always be added, using the same controller bindings as the regular operator controller, but bypassing the State Machine. 

Driver and operator bindings should be declared using separate methods. 
```java
configureDriverBindings(conDriver);
configureOperatorBindings(conOperator);
```

## RobotMap Naming Conventions

- The RobotMap class should contain subclasses for **every** subsystem. 

Example:

```java
public class RobotMap {
    public static final class mapDrivetrain {
    }
}
```

- All ports should be **SCREAMING_SNAKE_CASE**.
- Each port name should follow this naming scheme: `DEVICETYPE_LOCATION_CONNECTIONTYPE`. Common connection types include: `CAN, DIO, USB`
- Variable names should avoid specifying which subsystem they belong to, as that information is redundant when they're referenced.

Example: ❌

```java
public static final class mapWrist {
    public static final int WRIST_MOTOR_CAN = 50;
}
```

Example: ✔

```java
public static final class mapWrist {
    public static final int MOTOR_CAN = 50;
}
```

## Constants Naming Conventions

- The Constants class should contain subclasses for each subsystem.

Example:

```java
public final class Constants {
    public static final class constControllers {
        public static final double DRIVER_LEFT_STICK_X_DEADBAND = 0.05;
  }
}
```

- All Constants should be **SCREAMING_SNAKE_CASE**
- Each constant name should follow this naming scheme: `PURPOSE_DESCRIPTION`, where the purpose is what the variable is used for (ex. `OUTTAKE`, `DETECT`, `CONIFG`) while the description includes the minimum amount of details to remove ambiguity (ex. `SPEED`, `DISTANCE`, `TOLERANCE`)
- **Every** motor **must** have a new TalonFX configuration that is set to the motor. The actual configuration should be done in Constants.
```java
 public static TalonFXConfiguration ELEVATOR_CONFIG = new TalonFXConfiguration();
    static {
      ELEVATOR_CONFIG.MotorOutput.NeutralMode = NeutralModeValue.Brake;
      ELEVATOR_CONFIG.MotorOutput.Inverted = InvertedValue.Clockwise_Positive;
      ... more configurations
    }
```
- Variable names should avoid specifying which subsystem they belong to, as that information is redundant when they're referenced.

Example: ❌

```java
public static final class constWrist {
    public static final double WRIST_CURRENT_LIMIT_FLOOR = 1; 
}
```

Example: ✔

```java
public static final class constWrist {
    public static final double CURRENT_LIMIT_FLOOR = 1; 
}
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