# Current Testing

Current testing is used to verify that motors are drawing appropriate amounts of current and to identify potential mechanical or electrical issues before they become failures.

## Overview

Current testing helps identify:
- Mechanical binding or friction issues
- Gear ratio verification
- Proper motor operation
- Potential points of failure

## Testing Procedure

### 1. Logging Current Data

1. Deploy code to the robot with current logging enabled
2. Connect to the robot and begin logging data
3. Exercise all mechanisms that need to be tested
4. Run each mechanism through its full range of motion multiple times

### 2. Analyzing Data with AdvantageScope

1. Open your log file in [AdvantageScope](https://github.com/Mechanical-Advantage/AdvantageScope)
2. Navigate to the **Statistics** page
3. Select the current values you want to analyze
4. Set the analysis window to **30 seconds**
   - This provides enough data for meaningful statistical analysis
   - Captures multiple cycles of mechanism operation

### 3. Running Multiple Tests

- **Try a couple times** to ensure consistency
- Run the test at least 2-3 times to verify repeatability
- If results vary significantly between tests, investigate the cause

### 4. Reviewing Results

1. Look at the **99th percentile** value
   - This represents the peak current draw while filtering out brief spikes
   - More reliable than absolute maximum values
   - Better indicator of sustained high current scenarios
2. Compare against expected values for your motors and gear ratios
3. Check for any unusual patterns or anomalies

### 5. Documentation

1. Take a **photo/screenshot** of the statistics display showing:
   - The current values
   - The 99th percentile data
   - The **gear ratio** information
2. **Drop the photo in Slack** in the appropriate channel
   - Include context about what mechanism was tested
   - Note any concerns or unusual findings
   - Tag relevant team members if issues are found

## What to Look For

- **Unusually high current**: May indicate mechanical binding, friction, or incorrect gear ratios
- **Inconsistent readings**: Could suggest loose connections or intermittent problems
- **Current spikes**: Brief spikes are normal, but sustained high current needs investigation
- **Low current**: May indicate a problem with motor connections or power delivery

## Best Practices

- Test after any mechanical changes or assembly
- Test before competitions to verify robot is operating correctly
- Keep historical data to track changes over time
- Document gear ratios alongside current measurements for future reference
