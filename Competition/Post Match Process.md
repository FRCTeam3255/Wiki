# Post Match Process

After each match, follow these steps to review performance and diagnose any issues.

## 1. Download Logs

1. Connect the driver station laptop to the robot's Wi-Fi network (or via USB/Ethernet if in the pit)
2. Open a file browser or use the [AdvantageScope](https://github.com/Mechanical-Advantage/AdvantageScope) log downloader
3. Navigate to the RoboRIO log directory:
   - In AdvantageScope, go to **File → Download Logs from Robot**
   - Select the most recent log file(s) from the match
4. Save the logs to a clearly labeled folder on the driver station laptop (e.g., `Logs/Match_[#]`)
5. Open the downloaded log in AdvantageScope to review match data

## 2. Checking Current Draw (If Something Seems Wrong)

If the robot behaved unexpectedly during the match (e.g., mechanism failure, tripped breaker, reduced performance), check the current draw to identify the cause.

1. Open the match log in [AdvantageScope](https://github.com/Mechanical-Advantage/AdvantageScope)
2. Navigate to the **Statistics** page
3. Select the current values for the affected mechanism(s)
4. Set the analysis window to **30 seconds** around the time of the issue
5. Look at the **99th percentile** value to identify peak sustained current draw
   - High current may indicate mechanical binding, a failing motor, or a wiring issue
   - See [Current Testing](../Electrical/Current%20Testing.md) for expected values and further analysis steps
6. Take a **screenshot** of the statistics display and share it in Slack with relevant context
   - Tag the appropriate mentor or team member if immediate action is needed
