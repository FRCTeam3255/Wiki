# Robot Simulator and AdvantageScope

This guide explains what robot simulation and AdvantageScope are, how they differ, and how to connect them for testing and debugging your robot code.

---

## What is Robot Simulation (Sim)?

Robot simulation is a feature built into WPILib that allows you to test your robot code without having access to a physical robot. The simulator runs your robot code on your computer and simulates robot hardware, sensors, and actuators.

### Key Features of Simulation:
- **Test Without Hardware**: Run and debug your code without needing the actual robot
- **Rapid Iteration**: Make code changes and test them immediately without deploying to hardware
- **Safe Testing**: Test dangerous or complex scenarios without risking damage to the robot
- **Physics Simulation**: Simulates robot physics including drivetrain movement, motor behavior, and sensor readings
- **Built into WPILib**: Integrated directly into VS Code with the WPILib extension

### When to Use Simulation:
- During early development before the robot is built
- Testing autonomous routines and path following
- Debugging sensor logic and state machines
- Training new programmers without requiring robot access
- Verifying code changes before deploying to the real robot

---

## What is AdvantageScope?

AdvantageScope is a powerful log viewer and visualization tool specifically designed for FRC robots. It allows you to view telemetry data, analyze robot behavior, and visualize your robot in 3D.

### Key Features of AdvantageScope:
- **Real-time Data Visualization**: View live data from your robot or simulator
- **3D Robot Visualization**: See your robot's position, orientation, and mechanisms in 3D space
- **Swerve Drive Display**: Visualize swerve module states and trajectories
- **Data Logging & Replay**: Record and replay robot sessions for analysis
- **Field Visualization**: View robot position on the FRC field
- **Graph Plotting**: Plot sensor values, motor outputs, and other telemetry over time
- **NetworkTables Integration**: Connects to your robot via NetworkTables

### When to Use AdvantageScope:
- Debugging robot behavior during testing
- Verifying swerve offsets (swoffsets)
- Analyzing autonomous routines and paths
- Visualizing sensor data and state changes
- Reviewing recorded matches or test sessions

---

## Simulator vs AdvantageScope: Which is Which?

It's important to understand the difference between these two tools:

| Feature | Robot Simulator (Sim) | AdvantageScope |
|---------|----------------------|----------------|
| **Purpose** | Runs robot code without hardware | Visualizes and analyzes robot data |
| **Built Into** | WPILib / VS Code | Standalone application |
| **Primary Use** | Testing code execution and logic | Viewing telemetry and debugging |
| **3D Visualization** | Basic physics simulation | Advanced 3D robot visualization |
| **Connection** | Runs your robot code locally | Connects to robot or simulator via NetworkTables |
| **When to Use** | Before hardware is ready or for safe testing | When debugging and analyzing robot behavior |

**Simple Analogy**: 
- **Simulator** is like running your code in a "practice mode" - it executes your robot program without needing real hardware
- **AdvantageScope** is like a "dashboard" - it shows you what your robot (real or simulated) is doing and displays telemetry data

**You can use them together!** Run your code in the simulator and use AdvantageScope to visualize what the simulated robot is doing.

---

## How to Connect Simulator in AdvantageScope

### Prerequisites
- WPILib installed on your computer
- AdvantageScope installed ([download here](https://github.com/Mechanical-Advantage/AdvantageScope/releases))
- A robot code project

### Steps to Connect

#### 1. Start the Robot Simulator
1. Open your robot code project in VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the command palette
3. Type `WPILib: Simulate Robot Code` and select it
4. Choose the desktop GUI option when prompted
5. Wait for the simulation to start - you should see the Robot Simulation GUI window

> **Note**: Screenshot showing the Robot Simulator GUI window should be added here once captured

#### 2. Open AdvantageScope
1. Launch AdvantageScope on your computer
2. The application will open to the main interface

#### 3. Connect to the Simulator
1. In AdvantageScope, click on the **connection icon** in the top-left corner (looks like a plug/connection symbol)
2. Select **Simulator** or **localhost** as the connection type
3. The default address should be `localhost` or `127.0.0.1`
4. Click **Connect**
5. You should see a green indicator showing that AdvantageScope is connected

#### 4. Visualize Your Data
1. Navigate to the **3D Field** tab to see your robot on the field
2. Use the **Swerve** tab to view swerve drive states (if applicable)
3. Drag NetworkTables keys from the left panel to graphs or displays
4. Enable your robot in the Simulator GUI and start testing!

### Troubleshooting Simulator Connection
- **AdvantageScope can't connect**: Make sure the simulator is running before connecting
- **No data appearing**: Verify your code is publishing data to NetworkTables
- **Simulator won't start**: Check that WPILib is properly installed and your code builds successfully

---

## How to Connect Robot to AdvantageScope

Connecting to a real robot is similar to connecting to the simulator, but uses your robot's IP address instead of localhost.

### Prerequisites
- Robot is powered on and connected to your network
- FRC Driver Station is connected to the robot
- AdvantageScope installed on your laptop
- Your computer is on the same network as the robot

### Steps to Connect

#### 1. Verify Robot Connection
1. Open FRC Driver Station
2. Ensure the Driver Station shows a connection to the robot (green indicator)
3. Note your robot's team number (e.g., 3255 for Team 3255)

#### 2. Open AdvantageScope
1. Launch AdvantageScope on your computer

#### 3. Connect to the Robot
1. Click on the **connection icon** in the top-left corner
2. Select **Robot** or **Team Number** as the connection type
3. Enter your team number (e.g., `3255`)
   - AdvantageScope will automatically calculate the robot's IP address: `10.TE.AM.2` (e.g., `10.32.55.2` for team 3255)
   - Alternatively, you can manually enter the IP address
4. Click **Connect**
5. You should see a green indicator when connected successfully

#### 4. View Live Robot Data
1. Navigate to the **3D Field** tab to see your robot's live position
2. Use the **Swerve** tab to verify swerve module alignment and offsets
3. Create custom graphs to monitor sensor values, motor outputs, and more
4. Enable your robot via Driver Station and start testing!

### Connection Options

**Team Number Connection** (Recommended):
- Enter your team number: `3255`
- AdvantageScope automatically resolves to: `10.32.55.2`

**Direct IP Connection**:
- Robot over USB: `172.22.11.2`
- Robot over WiFi: `10.TE.AM.2` (e.g., `10.32.55.2`)

**mDNS Connection**:
- Use `roboRIO-3255-FRC.local` (replace 3255 with your team number)
- May not work on all networks

### Troubleshooting Robot Connection
- **Can't connect**: Verify FRC Driver Station is connected first
- **Connection drops**: Check WiFi signal strength and network stability
- **Wrong data**: Make sure you deployed the latest code to the robot
- **No 3D model**: Ensure your robot code is publishing pose data to NetworkTables and that your CAD models are properly configured (see [UpdateCAD.md](UpdateCAD.md))

---

## NetworkTables Keys for AdvantageScope

To use AdvantageScope effectively, your robot code needs to publish data to NetworkTables. Common keys to publish:

- **Robot Pose**: `SmartDashboard/Field/Robot` - 3D position for field visualization
- **Swerve States**: `AdvantageKit/Drive/ModuleStates` - Module positions and velocities
- **Autonomous Path**: Trajectory data for path visualization
- **Sensor Values**: Any sensor readings you want to monitor
- **Motor Outputs**: Current, voltage, and velocity data

Refer to your robot code's NetworkTables configuration for specific key names.

---

## Additional Resources

- [WPILib Robot Simulation Documentation](https://docs.wpilib.org/en/stable/docs/software/wpilib-tools/robot-simulation/introduction.html)
- [AdvantageScope Documentation](https://docs.advantagescope.org)
- [AdvantageScope GitHub Repository](https://github.com/Mechanical-Advantage/AdvantageScope)
- [Update CAD for Simulation](UpdateCAD.md) - Guide for configuring 3D robot models

---

## Quick Reference

**Starting Simulator:**
1. VS Code → `Ctrl+Shift+P` → "WPILib: Simulate Robot Code"
2. Open AdvantageScope → Connect to `localhost`

**Connecting to Robot:**
1. Power on robot and connect Driver Station
2. Open AdvantageScope → Connect to team number or `10.TE.AM.2`

**Common Issues:**
- Connection fails → Check Driver Station is connected first
- No 3D model → Verify CAD models are exported and config.json is set up
- No data → Verify NetworkTables keys are being published by your code
