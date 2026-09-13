# Git Automation Rules

You are working in a GitHub-connected project.

## IMPORTANT

After EVERY individual meaningful code change, immediately:

1. Run `git status`
2. Run `git add .`
3. Run `git commit -m "clear commit message"`
4. Run `git push`

Then continue with the next change.

## What counts as an individual change

Create a separate commit for:

* every new JSX/HTML tag or element
* every modified JSX/HTML tag or element
* every React component
* every function
* every array
* every object
* every important variable
* every CSS class
* every important CSS property/group
* every event handler
* every API request
* every route
* every new file
* every meaningful modification

## Examples

After adding:

<h1>TechMarket</h1>

Immediately execute:

git add .
git commit -m "feat: add title"
git push

After adding:

<button>Buy</button>

Immediately execute:

git add .
git commit -m "feat: add buy button"
git push

After adding a CSS class:

.product-card {
display: flex;
}

Immediately execute:

git add .
git commit -m "style: add product card layout"
git push

After creating a function:

function handleClick() {}

Immediately execute:

git add .
git commit -m "feat: add click handler"
git push

## DO NOT

* Do not wait until the whole task is finished before committing.
* Do not combine unrelated changes into one commit.
* Do not create empty commits.
* Do not ask me to manually run git add, git commit or git push if the terminal can execute them.
* Do not stop after editing files without committing and pushing.

## Commit message format

Use:

feat: for new functionality
fix: for bug fixes
style: for CSS/UI changes
refactor: for code restructuring
docs: for documentation

Keep commit messages short and descriptive.

## Push

Push every commit immediately after creating it.

If `git push` fails, diagnose the error, fix it when possible, and retry.

Always check `git status` before committing.
