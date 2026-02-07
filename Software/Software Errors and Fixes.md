# Software Errors and Fixes

This guide provides solutions to common software errors encountered during FRC robot development.

## Epilogue Error

If you encounter an Epilogue error, you may need to clean your Java workspace in VSCode.

### Steps to Clean Java Workspace

1. Open the **Command Palette** in VSCode:
   - **Windows/Linux:** Press `Ctrl + Shift + P`
   - **Mac:** Press `Cmd + Shift + P`

2. Type `Java: Clean Java Language Server Workspace` in the command palette

3. Select the command from the dropdown list

4. VSCode will prompt you to confirm - click **Reload and Delete** or **Restart**

5. Wait for VSCode to reload and reinitialize the Java Language Server

6. Try rebuilding your project after the workspace has been cleaned

## Can't Deploy to Rio (Rio not found)

If you're unable to connect to the RoboRIO, follow these troubleshooting steps:

### First Build Requirements

- **First build must be connected to the internet**
  - This allows the build system to download necessary dependencies
  - Ensure your computer has an active internet connection before the first build

### Robot WiFi Connection

- **Make sure you're connected to the robot WiFi network**
  - Check that your computer is connected to the robot's WiFi (not school/home WiFi)
  - The robot WiFi network is typically named after your team number

### Version Matching

- **Verify that the RoboRIO image year matches your robot code year**
  - **Check RIO image version:** Open the FRC Driver Station and look at the RoboRIO image version displayed
  - **Check code version:** Open `build.gradle` in your robot project and verify the WPILib version matches the RIO image year
  - If versions don't match, you may need to re-image the RIO or update your code version

## General Error Troubleshooting

When encountering an unexpected error after making changes:

### Check What Changed

Use GitHub to identify what you changed and determine what might have broken:

1. **Check local changes using GitHub Desktop:**
   - Open GitHub Desktop
   - Look at the **Changes** tab on the left side
   - Review all uncommitted changes in your working directory
   - Files that have been modified will be listed with their changes shown on the right

2. **Check GitHub PR files changed:**
   - Navigate to your Pull Request on GitHub
   - Click on the **Files changed** tab
   - Review each file that was modified
   - Look for new additions that might have introduced the error

3. **Compare with working version using GitHub:**
   - On GitHub, navigate to your repository
   - Click on your branch name
   - Click **Compare** to see differences between your branch and the main branch
   - Review all changes to identify what's different from the last working version

### Debugging Tips

- Look for recently added imports or dependencies
- Check for typos in variable or method names
- Verify that all required files are saved
- Make sure all brackets and parentheses are properly closed
- Review any configuration files (build.gradle, vendor libraries) for changes

---

**Remember:** Most errors can be resolved by carefully reviewing recent changes and ensuring your development environment is properly configured. ✅
