# GitHub Copilot in Slack

GitHub Copilot in Slack lets you work with the GitHub app directly from Slack. You can ask coding questions, turn a Slack discussion into a GitHub issue, and ask Copilot to make repository changes without leaving the conversation.

> **Note:** GitHub documents this feature as a **public preview**, so the exact prompts and UI may change over time.

## What you need first

Before you can use Copilot in Slack, make sure you have:

- A GitHub account
- Access to GitHub Copilot through a paid plan, either from your own license or through organization-managed access
- A Slack account in the workspace where you want to use it
- The GitHub app for Slack installed in that workspace

If your workspace uses Slack Enterprise Grid or your repositories are owned by an organization, a Slack or GitHub admin may need to install and configure the GitHub app first.

## Install and set up the GitHub app in Slack

### 1. Install the GitHub app in Slack

The GitHub integration only needs to be installed once per Slack workspace.

1. Go to [slack.github.com](https://slack.github.com/)
2. Click **Add to Slack**
3. Sign in to Slack if prompted
4. Approve the requested permissions
5. In any channel where you want to use the app, run `/invite @github`

### 2. Connect Slack to your GitHub account

Once the app is installed:

1. Open a direct message with the **GitHub** app in Slack, or mention Copilot in a thread
2. Send a message such as `login` or `/github signin`
3. Follow the authorization prompts in Slack and GitHub

GitHub's documentation notes that your first attempt to use Copilot may automatically prompt you to connect your account.

### 3. Set the repository Copilot should use

The first time you use Copilot in Slack, set a default repository for pull requests and related actions.

- Use the **Configure settings** button if Slack shows it
- Or use the `settings` command in the GitHub app conversation
- Choose the repository you want Copilot to work in by default

To ask Copilot to make changes in a repository, you generally need **write access** to that repository. To create issues, you need permission to create issues there.

## Permissions and integrations

When the GitHub app is installed in Slack, it requests permissions that let it:

- Add the `/github` slash command
- Post GitHub notifications and responses in Slack
- Render GitHub link previews
- Read and write certain GitHub resources on your behalf after you connect your account

GitHub's Slack permissions reference specifically calls out:

- **Read access to code**
- **Read access** to actions, checks, discussions, issues, pull requests, and related metadata
- **Write access** to issues, pull requests, deployments, and workflows
- **Write access to content** so Copilot can open pull requests it authors

If you are using enterprise-managed repositories, an administrator may also need to allow the Slack GitHub app to access the repositories you want Copilot to use.

## Basic usage

You can use the GitHub app in Slack in two main ways:

### Ask Copilot questions

Use a direct message with the GitHub app or mention Copilot in a Slack thread to ask for help with:

- Explaining code
- Summarizing a bug report or discussion
- Suggesting implementation steps
- Drafting documentation or issue text

### Create issues from Slack

Ask Copilot to turn a Slack conversation into a GitHub issue. Copilot can draft:

- A title
- A description
- Suggested labels
- Suggested assignees

Review the draft before creating the issue.

### Ask Copilot to make repository changes

Copilot can use the Slack thread as context, then propose changes and open a pull request. You can optionally tell it which repository and branch to use.

## Example commands and interactions

### Standard GitHub app commands

```text
/github help
/github signin
/github subscribe FRCTeam3255/Wiki
/github open FRCTeam3255/Wiki
```

### Example Copilot prompts

```text
@GitHub Explain what this error means and suggest the most likely fix.
```

```text
@GitHub In FRCTeam3255/Wiki, create an issue to document how mentors should review pull requests.
```

```text
@GitHub Add a new section to the README in repo=FRCTeam3255/Wiki branch=main that links to the GitHub folder docs.
```

```text
@GitHub Summarize the decisions made in this thread and turn them into a checklist for implementation.
```

## Best practices

- **Keep one topic per thread.** Copilot uses thread context, so focused threads produce better results.
- **Use a direct message for cleaner context.** This is helpful when the channel thread has side conversations.
- **Be explicit about the repository.** If there is any doubt, include `owner/repo` in your prompt.
- **Review generated issues and pull requests carefully.** Copilot can make mistakes.
- **Avoid sharing sensitive information in prompts.** Slack thread content may be used as context for the generated work.

## Troubleshooting tips

- If the GitHub app is not available in a channel, run `/invite @github`
- If Slack says your GitHub account is not connected, run `/github signin`
- If mentions or actions stop working, try `/github signout` and then `/github signin`
- If Copilot targets the wrong repository, update the default repository in the app's settings
- If Copilot cannot create changes, confirm that you have the required repository permissions
- If you are unsure which mention format to use, type `@` in Slack and select the GitHub app from the autocomplete list; if mentions still fail, open a direct message with the GitHub app and continue there instead

## Official documentation

- [Integrating GitHub with Slack](https://docs.github.com/en/integrations/how-tos/slack/integrate-github-with-slack)
- [Using GitHub in Slack](https://docs.github.com/en/integrations/how-tos/slack/use-github-in-slack)
- [Permissions for GitHub in Slack](https://docs.github.com/en/integrations/reference/slack-permissions)
- [Integrating Copilot cloud agent with Slack](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/integrate-coding-agent-with-slack)
