# Reverting a File to Main Branch Version

This guide will explain how to revert a specific file back to the version on the main branch. This is useful when you've made changes to a file that you want to undo, or if you want to reset a file to match the team's main codebase.

## When to Use This

- You made experimental changes to a file that didn't work out
- You accidentally modified a file you didn't intend to change
- You want to start fresh with a file from the main branch
- You need to reset configuration files to their default state

## Using GitHub Desktop

### Method 1: Discarding Changes (Uncommitted Files)

If you haven't committed your changes yet:

1. Open GitHub Desktop and select your repository
2. In the left sidebar, you'll see the list of changed files
3. Right-click on the file you want to revert
4. Select `Discard Changes...`
5. Confirm that you want to discard the changes

**Note:** This will permanently delete any uncommitted changes to that file. Make sure you don't need those changes before discarding!

### Method 2: Reverting to Main Branch (After Committing)

If you've already committed changes and want to get the version from main:

1. Open GitHub Desktop
2. Switch to the main branch by clicking on the current branch name at the top and selecting `main`
3. Right-click on the file in your file explorer (outside of GitHub Desktop)
4. Copy the file
5. Switch back to your working branch in GitHub Desktop
6. Paste the file to overwrite your version
7. Commit the change with a message like "Revert [filename] to main branch version"

## Using Command Line (Git)

### Discard Uncommitted Changes

If you just want to undo local changes you haven't committed yet:

```bash
git restore path/to/your/file.java
```

**Example:**
```bash
git restore src/main/java/frc/robot/Robot.java
```

This will discard uncommitted changes and restore the file to the last committed version in your current branch (HEAD).

### Restore File from Main Branch

To replace your current file with the version from main:

```bash
git restore --source=main path/to/your/file.java
```

**Example:**
```bash
git restore --source=main src/main/java/frc/robot/RobotContainer.java
```

This will get the version of the file from the main branch and replace your current version with it.

After running this command, you'll need to stage and commit the change:
```bash
git add path/to/your/file.java
git commit -m "Revert RobotContainer.java to main branch version"
```

## Verifying the Revert

After reverting, verify the file is correct:

1. Open the file in VS Code or WPILib
2. Check that the content matches what you expected
3. Build and test your code to ensure everything works

## Tips

- Always make sure you're on the correct branch before reverting files
- If you're unsure, create a backup copy of the file before reverting
- Use `git status` to see which files have been changed
- Use `git diff path/to/file` to see what changes will be lost before reverting

## Common Mistakes to Avoid

- ❌ Don't revert files you need - always double-check which file you're reverting
- ❌ Don't forget to stage and commit after using `git restore --source=main` - the change needs to be added and committed

## Need Help?

If you're having trouble reverting a file or aren't sure which method to use, ask a software mentor for help!
