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

### Method 1: Checkout File from Main Branch

To replace your current file with the version from main:

```bash
git checkout main -- path/to/your/file.java
```

**Example:**
```bash
git checkout main -- src/main/java/frc/robot/RobotContainer.java
```

This will:
- Get the version of the file from the main branch
- Replace your current version with it
- Stage the change for commit

After running this command, you'll need to commit the change:
```bash
git commit -m "Revert RobotContainer.java to main branch version"
```

### Method 2: Discard Uncommitted Changes

If you just want to undo local changes you haven't committed yet:

```bash
git checkout -- path/to/your/file.java
```

**Example:**
```bash
git checkout -- src/main/java/frc/robot/Robot.java
```

This will restore the file to the last committed version in your current branch.

### Method 3: Using Git Restore (Git 2.23+)

Modern Git versions include a `restore` command that's more intuitive:

To discard uncommitted changes:
```bash
git restore path/to/your/file.java
```

To restore from main branch:
```bash
git restore --source=main path/to/your/file.java
```

**Example:**
```bash
git restore --source=main src/main/java/frc/robot/Constants.java
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

- ❌ Don't use `git checkout main` (without the file path) - this will switch your entire branch!
- ❌ Don't revert files you need - always double-check which file you're reverting
- ❌ Don't forget to commit after using `git checkout main -- file` - the change needs to be committed

## Need Help?

If you're having trouble reverting a file or aren't sure which method to use, ask a software mentor for help!
