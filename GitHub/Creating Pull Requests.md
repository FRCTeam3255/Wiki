# Creating Pull Requests (PRs)

This guide outlines the standards and procedures for creating Pull Requests in our repositories. Following these standards ensures code quality and makes the review process smooth and efficient.

## PR Requirements

Every Pull Request **must** meet the following requirements before it can be reviewed:

### 1. Testing in Simulation

- **All PRs must be fully tested in simulation before review**
- PRs should be created as **Draft** initially while testing is ongoing
- Only mark the PR as "Ready for review" after simulation testing is complete
- Document any testing results or observations in the PR description

### 2. Good Title

- PR title must match the linked Issue title
- If addressing multiple issues, create a clear summary that encompasses all changes
- Use descriptive, specific titles (e.g., "Add autonomous path following" not "Fix stuff")

### 3. Link an Issue

- Every PR must be linked to at least one Issue
- Use GitHub's linking syntax in the PR description:
  - `Fixes #123` - Automatically closes the issue when PR is merged
  - `Relates to #123` - Links to the issue without closing it
  - `Closes #123, #124` - Links and closes multiple issues
- You can also link issues from the sidebar in the PR
- If no issue exists yet, create one first to document the problem or feature

### 4. Enable Auto-Merge

- Every PR must be set to auto-merge once it's ready for review
- This ensures the PR is automatically merged once all requirements are met and approvals are received

## PR Workflow

### Creating a PR

1. **Create a branch** for your changes (not on main)
2. **Make your changes** and commit them locally
3. **Test thoroughly in simulation**
4. **Push your branch** to GitHub
5. **Open a Pull Request** as a **Draft**
6. **Continue testing** and make any necessary fixes
7. **Mark as "Ready for review"** once simulation testing passes
8. **Enable auto-merge** to allow automatic merging once approved

### During Review

1. **Reviewer examines the PR**
   - Checks code quality
   - Verifies requirements are met
   - Tests functionality if needed

2. **If changes are requested:**
   - Reviewer will set the PR back to **Draft** status
   - Address the requested changes
   - Test changes in simulation again
   - Update the PR (push new commits to the same branch)
   - Mark as "Ready for review" again once changes are complete

3. **Approval and merge:**
   - Once approved, the PR will be merged by a team lead
   - The linked issue(s) will automatically close (if using `Fixes` or `Closes`)

## Best Practices

### Before Creating a PR

- [ ] Pull latest changes from main branch to avoid conflicts (see [Reverting a File](../Software/Reverting%20a%20File.md) if needed)
- [ ] Test all changes in simulation
- [ ] Run any automated tests if available
- [ ] Review your own code first (self-review)
- [ ] Check that no unintended files are included

### Communication

- Respond to review comments promptly
- Ask questions if review feedback is unclear
- Use GitHub's suggestion feature when proposing specific code changes
- Be respectful and constructive in all PR discussions

## Quick Reference

| Status | Meaning | Who Sets It |
|--------|---------|-------------|
| Draft | Still working on it, not ready for review | PR Creator |
| Ready for Review | Fully tested and ready for team lead to review | PR Creator |
| Changes Requested | Needs modifications before approval | Reviewer |
| Approved | Ready to merge | Reviewer |

## Common Mistakes to Avoid

- ❌ Creating a PR before testing in simulation
- ❌ Not linking to an issue
- ❌ Vague or missing PR title
- ❌ Including unrelated changes
- ❌ Making changes directly on the main branch
- ❌ Not responding to review comments

---

**Remember:** Good PRs make everyone's job easier! Take the time to do it right. ✅
