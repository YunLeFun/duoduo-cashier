---
title: 部署
---

> 构建

```bash
npm run generate
# 生成静态文件目录 `.output/public`
```

## Cloudflare Pages

## GitHub Pages

[部署到 GitHub Pages](https://zh.nuxtjs.org/faq/github-pages)

不过有一个坑就是 GitHub Pages 似乎无法访问带有 `/_nuxt/` 链接的资源，与下划线有关。
所以需要修改配置 `build` 中 [publicPath](https://zh.nuxtjs.org/api/configuration-build#publicpath)。

默认为 `_nuxt`，修改为 `nuxt`，也可以修改为其他不带下划线的名称。
