---
path: '/how-to-install-ruby-on-rails-on-mac'
title: 'How to install Ruby on Rails on Mac'
draft: false
date: 2018-06-21
tags: 
 - Ruby
 - Rails
---

- Install [homebrew](https://brew.sh)
- run `xcode-select --install`
- Install & init rbenv with `brew install rbenv && brew install rbenv && rbenv init`
- List available ruby versions with `rbenv install -l`
- Install preferred version with `rbenv install 2.5.1`
- Check installed versions with  `rbenv versions`. There should be "system" and your installed version.
- Set version you want to use with `rbenv global 2.5.1`
- Verify with `ruby -v`
- Ensure that rbenv will be automatically run by adding `eval "$(rbenv init -)"` to your ~/.bash_profile
- Profit!
