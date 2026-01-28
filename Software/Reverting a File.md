# Reverting a File to Main Branch Version

This guide will explain how to revert an already committed file back to the version on the main branch.

## When to Use This

- You committed experimental changes to a file that didn't work out
- You committed changes to a file you didn't intend to change
- You want to restore a file to match the main branch version

## Using Command Line (Git)

To replace your current file with the version from main:

```
git restore --source=main path/to/your/file.java
```

**Example:**
```
git restore --source=main src/main/java/frc/robot/RobotContainer.java
```

This will get the version of the file from the main branch and replace your current version with it.

After running this command, you'll need to stage and commit the change:
```
git add path/to/your/file.java
git commit -m "Revert file to main branch version"
```

## Verifying the Revert

After reverting, verify the file is correct:

1. Open the file in VS Code or WPILib
2. Check that the content matches what you expected
3. Build and test your code to ensure everything works

## Common Mistakes to Avoid

- ❌ Don't revert files you need - always double-check which file you're reverting
- ❌ Don't forget to stage and commit after using `git restore --source=main` - the change needs to be added and committed

## Need Help?

If you're having trouble reverting a file or aren't sure which method to use, ask a software mentor for help!
