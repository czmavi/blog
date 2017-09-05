---
path: '/using-git-on-windows'
title: 'Using git on Windows'
draft: false
date: 2017-09-05
tags: 
 - Git
 - Windows
 - Powershell
---

# Motivation
For a long time I was using Visual Studio with TFS to control my code. So when company I was working at that time wanted to move to git I continued to use integreated tools as well. And in a small team it was fine, basicly I couldn't tell the difference from TFS. But then I moved to other company with larger team that was starting to use [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) and Visual Studio tools started to get painfull to use. I started to use Atlassian SourceTree but after they had a streak of several patches that caused massive lagging of that application I decided that it's time to try out using command line git.
It was rough at the beginning since I was never much of a command line user but after some time and some tweaking it became my preffered way of using Git on Windows.

# Tools
I'm using Powershell but you can use any shell you like. As a console I'm using ConEmu for Visual Studio projects and build in terminal for Visual Studio Code.
Here's list of tools and plugins I found are worth using
 - [ConEmu](https://conemu.github.io/)- alternative advanced console for Windows. It has much better features than cmd and is better with displaying colors than PowerShellISE.
 - [Credential Manager for Windows](https://github.com/Microsoft/Git-Credential-Manager-for-Windows) - Utility that will store git credentials to Windows credential store so there is no need to provide them for each operation with the remote. It has great support for all main git repositoriies. It even supports multi factor authetication with Visual Studio Team Services if you're using it (you should be doing that whenever it's possible)
 - [PsGet](http://psget.net/) - PowerShell module installer. This is optional I use it to install PS plugins but you can do that manually
 - [Posh-git](https://github.com/dahlbyk/posh-git) - PowerShell module that displays current branch. This is great plugit that will show you on which branch you're currently working on, branch sync status and how many file changes have you made since last commit
 - [PSReadLine](https://github.com/lzybkr/PSReadLine) - Powershell module that will add autocomplete to git so you don't have to write whole branch names etc

 # Installation
 - Install ConEmu
 - Open ConEmu, go to settings window. There in \Startup\Tasks add a new task (+ button), name it Powershell and set command as Powershell.exe. Then go to the \Startup and in the startup options select Specified named task\Powershell. This will set Powershell console as the default one.
 - If you don't want to install PowerShell modules manually install PsGet.
 - Install Posh-git with command `PowerShellGet\Install-Module posh-git -Scope CurrentUser`
 - Update Posh-git with command `Update-Module posh-git`
 - Add Posh-git to your profile with command `Add-PoshGitToProfile`
 - Install PSReadLine with command `Install-Module PSReadLine`
 - Go to your Documents folder and from there to WindowsPowerShell. There will be Microsoft.PowerShell_profile.ps1. Open it in file editor and add:

```
\# Load posh-git example profile
. 'C:\Users\{your user name}\Documents\WindowsPowerShell\Modules\posh-git\profile.example.ps1'

\# Load PSReadline
if ($host.Name -eq 'ConsoleHost') {
  Import-Module PSReadline
}
```

This will automatically load your plugins when you start new Powershell window
 
 - Install Git Credential Store utility
 - Restart ConEmu. Now when you're at a location which is a git repository, you should see a branch name at the end of the line. It's colors are explained at posh-git readme. It will look like this: 

 ```   
C:\Users\mvich\Source\Repos\myproject [develop]> 
```