# Copilot Instructions — FRCTeam3255 SuperNURDs Wiki

## What This Repo Is
This is the internal knowledge base for **FRC Team 3255 (SuperNURDs)**. It is a MkDocs site published to [supernurds.com/wiki](https://www.supernurds.com/wiki). All content is Markdown. There is no application code here — every file you edit or create is a documentation page.

## Audience
Pages are read by high school students and mentors on the team. Write clearly and concisely. Assume familiarity with FRC and WPILib basics, but explain team-specific conventions explicitly.

## Repository Layout
```
/                          # wiki root (also MkDocs docs_dir)
├── Software/              # Java/WPILib conventions, tooling guides
├── General/               # Team expectations, purchases, CAD updates
├── Build Season/          # Season-specific build notes
├── Competition/           # Scouting, pit setup, match strategy
├── Electrical/            # Wiring, CAN bus, hardware setup
├── Fabrication/           # Manufacturing and machining guides
├── Mechanical/            # Mechanical design and assembly
├── GitHub/                # Git/GitHub workflow guides
├── Lessons (Software)/    # Tutorial-style lessons for new students
├── Offseason/             # Offseason project docs
├── Media and Comms/       # Media, social, outreach
├── Stats/                 # Team statistics and records
├── .github/
│   ├── copilot-instructions.md   # ← this file
│   ├── instructions/             # Scoped Copilot instruction files
│   ├── mkdocs.yml                # MkDocs build config
│   ├── requirements.txt          # mkdocs + pymdown-extensions
│   └── workflows/main.yml        # Publishes to GitHub Pages on push to main
└── README.md
```

## Canonical Code References
When writing or updating software convention docs, always validate examples against the actual team code repos:
- **Robot Code:** `https://github.com/FRCTeam3255/2026_Robot_Code`
- **CopyBot (reference bot):** `https://github.com/FRCTeam3255/2026_CopyBot_Code`

The `Software/Conventions.md` page is the single source of truth for Java naming conventions. If code examples in other pages conflict with it, update those pages to match.

## Content Guidelines

### Formatting
- Use ATX headings (`#`, `##`, `###`) — never underline-style headings.
- Fenced code blocks with language identifiers (` ```java `, ` ```bash `, etc.).
- Use `admonition` blocks (`!!! note`, `!!! warning`, `!!! tip`) for callouts — the MkDocs config has this extension enabled.
- Do not use raw HTML unless absolutely necessary.
- Images go in `/.images/` — never commit images anywhere else.

### Naming Conventions (current as of 2026 season)
These apply to all code examples written in wiki pages:
- **Device IDs:** `DeviceIDs` class with `xxxIDs` inner classes (e.g., `drivetrainIDs`)
- **Constants:** one `ConstXxx.java` file per subsystem (e.g., `ConstDrivetrain.java`); `SCREAMING_SNAKE_CASE` for values; `_CONFIGURATION` suffix for `TalonFXConfiguration`
- **Subsystem instances:** `xxxInstance` + `loggedXxxInstance` (Epilogue logging pattern)
- **Command fields:** `SCREAMING_SNAKE_CASE` with `TRY_` prefix for state-transition commands
- **BaseState commands:** class fields prefixed `command`, constructor parameters prefixed `input`
- **State initialization:** call `setRobotState(...)` first in `initialize()`, before setting subsystem targets
- **Binding methods:** `configDriverBindings()` (no `ure`, no parameter)

See `Software/Conventions.md` for full details with examples.

## PR and Review Requirements
- Treat every `.md` file as source code — review for accuracy, clarity, and formatting.
- When creating or modifying a wiki page, take a browser screenshot of the rendered MkDocs output and embed it in the PR description (do **not** commit the image file to the repo — upload it to GitHub asset storage and use the resulting URL).
- Check that any linked pages or headings actually exist.
- Do not add content that is not relevant to FRC Team 3255 operations.
