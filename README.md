# [duoduo-cashier](https://github.com/YunYouJun/duoduo-cashier)

Record work income

## Intend

做一个记账小程序

- 账号系统
- 图表显示变化
- 增删改查
- [PWA](https://pwa.nuxtjs.org/)

## Base

### 底层框架

- [Vue](https://cn.vuejs.org/)

### 应用框架

- [Nuxt](https://zh.nuxtjs.org/)

### UI框架

- [Element UI](https://github.com/ElemeFE/element)

#### Chart

- [Chart.js](https://github.com/chartjs/Chart.js)
- [vue-chartjs](https://github.com/apertureless/vue-chartjs)

### 后台数据库

- [Leancloud](https://leancloud.cn/)

## 前言

唔，没什么可说的。

写给没什么网站开发基础的多多同学。

## 古往今来

首先，开发一个网站，有多种开发方式。
在远古时代，网页常常是通过编写 [Html](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 标签元素（如 `<p></p>`），
并拼凑起来展示网页的内容。
后来有了 [Css](https://developer.mozilla.org/zh-CN/docs/Web/CSS) 来控制网页地布局，
再后来又有了 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)，
可以实现与用户之间的交互和一些计算。
譬如点击按钮后，让网页的某部分内容发生变化，样式发生改变等等等等。
所以 Html + Css + JavaScript 成为了开发网页必备的三剑客。
这些都可以在 [Mozilla](https://developer.mozilla.org/) 中更加深入地了解，在此略过不表。

后来 [jQuery](https://jquery.com/) 横空出世，几乎一统江湖。那么 jQuery 又是什么？
jQuery 名中含有一个 j， Query 则是查询的意思。顾名思义，jQuery 是由 JavaScript 编写的一个库。
用来更加快速地查找出 Html 文档中的标签元素，并操纵它。这也大大提高了前端开发的效率。

但天下大势，分久必合，合久必分。为了克服 HTML 在构建应用上的不足，由谷歌开发的 [Angualar](https://github.com/angular/angular) 诞生（2009）。相比 jQuery 而言，是一种更完备的 Web 应用开发的解决方案。
后来 Facebook 对市场上所有 JavaScript MVC 框架都不满意，就决定自己写一套。
[React](https://github.com/facebook/react/) 就此诞生，并于 2013 年 5 月开源。
而 Vue 的第一个 [Commit](https://github.com/vuejs/vue/commit/83fac017f96f34c92c3578796a7ddb443d4e1f17) 可追溯至 2013 年 7 月 28 日，此后势如破竹，并于去年成功超过 React 在 Github 上的 Star 数。成为目前 GitHub 上最受欢迎的前端框架。
Angular/React/Vue 三足鼎立之势业已形成。

## 开始

Vue.js 与 jQuery 不同，jQuery 操纵 DOM （（文档对象模型(Document Object Model)），譬如一个标签就是一个对象模型），
而 Vue 则由数据驱动，当数据发生改变时，再更新视图，并不直接操纵 DOM 。

说了这么多，本项目决定采用 Nuxt.js 来开发，Nuxt 正是基于 Vue.js 的通用应用框架。
好处就是，它可以提供一个良好的模板结构，以及服务端渲染、异步数据加载、中间件支持等等许多特性。
这些特性，通过 Vue 相关的插件与配置同样可以从零实现，而 Nuxt 则将其集成在一起，可以帮我们省去许多的工作。

项目地址： <https://github.com/YunYouJun/duoduo-cashier>

### 安装 Nuxt

可参考 [Nuxt 文档](https://zh.nuxtjs.org/guide/installation/)

运行 create-nuxt-app

此处我使用 [yarn](https://www.yarnpkg.com/zh-Hans/)

```sh
yarn create nuxt-app duoduo-cashier
```

默认服务器为 None，因为后台打算使用 LeanCloud ，一是需求小可以使用开发版免费，二则无需额外搭建后台服务器。

UI 框架选择了 [Element-UI](https://github.com/ElemeFE/element) ，因为过去经常使用，较为熟悉，且 Github 上星数最多，经常维护。

选择 SPA[single page web application] 模式，旨在开发单页应用，即只有一张Web页面的应用，当进行交互时，动态更新页面视图，也是现在较为流行的模式。

进入文件夹，启动项目

```sh
cd duoduo-cashier
yarn dev
```

目录结构及各文件夹用途可参见[此处文档](https://zh.nuxtjs.org/guide/directory-structure)

