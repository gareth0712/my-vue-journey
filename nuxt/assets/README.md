# ASSETS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your un-compiled assets such as LESS, SASS, or JavaScript.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#webpacked).

## Styling

### Global Styles

- Apply a global.scss file in "~/assets/styles/global.scss" (Using "@" won't work here) that will be applied in all components by adding the line `css: ['~/assets/styles/global.scss'],` in nuxt.config.js
- If you would like to apply the global styling, do not use scoped in your `<style></style>` property in Vue file. Otherwise, use "scoped"
- That's why we do not put scoped in "~/layout/default.vue"
- Typically you use all these features because some styles are application wide, some are page specific and some are really component specific.
- Focusing on the component level is the best way though, because you want to have reuseable and standalone pieces in your app.
