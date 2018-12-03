---
path: '/advanced-git-commands'
title: 'Advanced git commands'
draft: false
date: 2018-12-02
tags: 
 - Git
---

I'm just going to store this here for my personal usage...

## Reset

Resets state of branch to origin/branch. The `--hard` option throws away any changes, `--soft` only moves HEAD, keeping the changes.

`git reset --hard origin/mybranch`

## Revert

Reverts certain commit. Allows saving "revert" as separate commit which keeps the changes it in the history. The `-m` option specifies which side of merge should be kept. 1 means parent branch (So for example if you want to revert feature branch merge into develop then 1 is keep develop changes).

`git revert -m 1 commithash`

Reverting last commit

`git revert HEAD`

## Rebase

Resolves conflicts by rebasing branch onto another branch. Has `-i` option which enters interactive mode that allows editing commit messages, squashing commits and other stuff.

`git rebase -i develop`

## Push -u

When working on branch that doesn't have an upstream branch things can be made quicker with this command. Creates upstream branch with same name and pushes the changes into it.

`git push -u`

Must have `pust.default current` option set

`git config --global push.default current`