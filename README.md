# Vuedation

English | [Japanese](./README.ja.md)

> Boilerplate with Foundation for Sites and VueJS integration (Phase II)

<p align="center"><img src="https://user-images.githubusercontent.com/5172584/79530197-9f613e00-80a9-11ea-9903-c6eba751330e.png" alt="site image"></p>

This repository is an example of how to use [Foundation for Sites](https://get.foundation/sites/docs/) in [Vue Single Page Application](https://jp.vuejs.org). The project is a template (phase II) using webpack and babel, vue-cli. It is our policy to use the latest version of each.
(See [here (Foundation-Vue)](https://github.com/annrie/Foundation-Vue.git) for Phase I)

In Phase I, we only added Vue features to the Foundation (e.g., using the Foundation's standard Panini as a static file compiler), but in Phase II, we have positioned the Foundation as a plug-in so that you can create pages according to the Vue specification (instead of Panini, we use Vue's Vue Router and Vuex).

## Motivation for development

I wanted to work with the Foundation framework and Vue.JS.
I found [Setting up Vue 2 and Foundation 6](_COPY11@tommaso.marcelli/setting-up-vue-2-and-foundation-6-3f858b4ad20#.mfkp11mid) and [vue-webpack4-babel7](https://github.com/xsbear/vue-webpack4-babel7/) to be very helpful. Without these two things, we would not have been able to proceed. Thank you.

## Setup

To set up the template manually, you can first download it in Git.

```bash {.copy}
 git clone git@github.com:annrie/Vuedation.git projectname
 cd projectname
```

## Installation

Then, open the folder on the command line and install the required dependencies.
You can also use npm, but I'm using [yarn2](https://yarnpkg.com/getting-started/install).

```bash
# install dependencies
npx @yarnpkg/doctor #  Setup of yarn2
echo "nodeLinker: node-modules" > .yarnrc.yml
yarn install
```

Finally, run `yarn dev` to start up the server. The finished site will be created in a folder named `dist` which can be viewed at the following URL.

```bash
http://localhost:8888
```

In order to build, perform `yarn build`.

## License.

[MIT](https://github.com/annrie/Vuedation/blob/master/LICENSE)
Copyright &copy; 2020-present, Annrie
