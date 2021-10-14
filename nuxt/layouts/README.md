# LAYOUTS

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Application Layouts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/views#layouts).

## Layout

[More on Views, Layouts etc](https://nuxtjs.org/guide/views)

### Custom Layout

- Without specifying the layout option of a vue file, pages component will use /layout/default.vue.
- If we create a new layout file, say, users.vue. The file must contain the `<nuxt />` tag in order for pages component to take place.
- Then we apply the layout in the pages component using the property `layout: 'users'` as property that is interpret by Nuxt, not Vue
- If you would like to apply custom layout for a certain page, you should do it also for any nested pages under that page

### error.vue

- A reserved named file that will be loaded whenever your Nuxt application throw an error
