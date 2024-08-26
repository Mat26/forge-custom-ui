# Forge Subtask Generator

This project is a Forge app built using Node.js and React.js. It displays a button in a Jira issue panel that allows users to generate subtasks based on the task description. The subtasks are generated using an AI service that consumes the description via an API.

For more information on Forge, visit the [Atlassian Forge documentation](https://developer.atlassian.com/platform/forge/).


## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Getting Started

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Mat26/forge-custom-ui.git
cd forge-custom-ui
```

## Quick start

- Install top-level dependencies:
- Install dependencies inside of the `static` directory:
- Modify your app by editing the files in `static/src/`.
- Build your app (inside of the `static` directory):
```
npm run setup
```

- Register a new copy of this app to your developer account.
```
forge register
```

- Deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

## Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Debugging
1. Run `cd static && npm run build` to build the main-app.
2. Run the `forge tunnel` command to run your Forge app locally.(Disconnect Endava vpn)

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
