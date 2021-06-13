# COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

### Import components

- When you import components and provide a component name there in "component" property, e.g.

```
components: {
  PostReview
}
```

is basically the same as

```
components: {
  PostReview: PostReview
}
```

### Provide name of components

Inside the component, you can provide a name and it merely helps for debugging purpose

```
export default {
  ...
  name: "PostReview"
  ...
}
```

### Naming convention

- The official Vue style guide suggests that components that you really use only once should have a the at the beginning.

### Importing Images

There are different ways to handle / import images in nuxt

1. From "/assets"  
   In css, use `url('~assets/images/main-page-background.jpg')`

2. From '/static'  
   In css, use `url('/main-page-background.jpg')`
