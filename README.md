<p align="center">
    <h1 align="center">
        <img width="40" src="https://raw.githubusercontent.com/movigo/core/master/resources/icon.png">
        Movigo Drawer Plugin
    </h1>
    <p align="center">Movigo plugin to create drawer animations.</p>
</p>
    
<p align="center">
    <a href="https://github.com/movigo/drawer/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/github/license/movigo/drawer.svg?style=flat-square">
    </a>
    <a href="https://david-dm.org/movigo/drawer" target="_blank">
        <img src="https://img.shields.io/david/movigo/drawer.svg?style=flat-square">
    </a>
    <a href="https://david-dm.org/movigo/drawer?type=dev" target="_blank">
        <img src="https://img.shields.io/david/dev/movigo/drawer.svg?style=flat-square">
    </a>
</p>

________________________________

## :paperclip: Table of Contents
- :hammer: [Install](#hammer-install)
- :video_game: [Usage](#video_game-usage)
- :chart_with_upwards_trend: [Development](#chart_with_upwards_trend-development)
  - :scroll: [Rules](#scroll-rules)
    - [Commits](#commits)
    - [Branches](#branches)
- :page_facing_up: [License](#page_facing_up-license)
- :telephone_receiver: [Contacts](#telephone_receiver-contacts)
  - :boy: [Developers](#boy-developers)

## :hammer: Install

### npm

You can install movigo drawer plugin with npm:

```bash
npm install @movigo/drawer --save
```
    
### CDN

You can also load it using a \<script> using the unpkg CDN:
    
```html
<script src="https://unpkg.com/@movigo/core"></script> <!-- Required dependency -->
<script src="https://unpkg.com/@movigo/drawer"></script>
```

## :video_game: Usage

Drawer plugin create a `drawer` function in the Movigo function chaining.
You must select a sidenav element with `target` function and call `drawer` function with the optional `options` parameter.

```js
const target = movigo.target('.sidenav')

target.drawer({
    leftSide: false, // Defines the sidenav position: left or right (default: true)
    open: true, // To close or open the sidenav (default: true)
    width: 300, // Width of the sidenav (default: 200)
}).animate()
```

It's important to define some CSS properties in the sidenav to work correctly:

```html
    <style>
        .sidenav {
            position: absolute; /* Or fixed */
            top: 0;
            width: 0;
            height: 100%;
            z-index: 999;
        }
    </style>
    <div class="sidenav">
        Sidenav
    </div>
```

## :chart_with_upwards_trend: Development

### :scroll: Rules

#### Commits

* Use this commit message format (angular style):  

    `[<type>] <subject>`
    `<BLANK LINE>`
    `<body>`

    where `type` must be one of the following:

    - feat: A new feature
    - fix: A bug fix
    - docs: Documentation only changes
    - style: Changes that do not affect the meaning of the code
    - refactor: A code change that neither fixes a bug nor adds a feature
    - test: Adding missing or correcting existing tests
    - chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
    - update: Update of the library version or of the dependencies

and `body` must be should include the motivation for the change and contrast this with previous behavior (do not add body if the commit is trivial). 

* Use the imperative, present tense: "change" not "changed" nor "changes".
* Don't capitalize first letter.
* No dot (.) at the end.

#### Branches

* There is a master branch, used only for release.
* There is a dev branch, used to merge all sub dev branch.
* Avoid long descriptive names for long-lived branches.
* No CamelCase.
* Use grouping tokens (words) at the beginning of your branch names (in a similar way to the `type` of commit).
* Define and use short lead tokens to differentiate branches in a way that is meaningful to your workflow.
* Use slashes to separate parts of your branch names.
* Remove branch after merge if it is not important.

Examples:
    
    git branch -b docs/README
    git branch -b test/one-function
    git branch -b feat/side-bar
    git branch -b style/header

## :page_facing_up: License
* See [LICENSE](https://github.com/movigo/drawer/blob/master/LICENSE) file.

## :telephone_receiver: Contacts
### :boy: Developers

#### Cedoor
* E-mail : me@cedoor.dev
* Github : [@cedoor](https://github.com/cedoor)
* Website : https://cedoor.dev
