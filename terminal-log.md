# Terminal Log

This file documents the command line and Git commands used to create the project and demonstrate version control.

```powershell
cd "C:\Users\user\command line"
mkdir my-project
cd my-project
mkdir src
mkdir src\css
mkdir src\js
mkdir src\images
mkdir docs
mkdir tests
git init -b main
git status --short --branch
git add src docs tests
git commit -m "Initialize project structure"
git add README.md
git commit -m "Add professional README"
git add .gitignore
git commit -m "Configure gitignore"
git add docs/project-notes.md tests/test-plan.md
git commit -m "Add project notes and test plan"
git checkout -b feature-starter-files
git add src/index.html src/css/style.css src/js/script.js
git commit -m "Add starter web files"
git switch main
git merge --no-ff feature-starter-files -m "Merge feature starter files"
git add terminal-log.md
git commit -m "Document terminal workflow"
git log --oneline --graph --all
git status --short --branch
```

## Notes

- The feature branch used for this project was `feature-starter-files`.
- The branch was merged back into `main` with a merge commit.
- The repository includes more than five meaningful commits.
