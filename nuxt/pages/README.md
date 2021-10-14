# PAGES

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).  
[More on Flexbox](https://academind.com/learn/css/understanding-css/flexbox-basics-container)

![Pages, layout and components](../static/layout-pages-components.png)

## Routing

[More on Routing in Nuxt](https://nuxtjs.org/guide/routing)

### A) Naming with underscore

Nuxt allows setting up the route config via folder structure directly
any file named with a underscore ("\_") prefix will be treated as dynamic file that upon user input a value
it will be loaded and able to be retrieved via vue-router

- File based approach: `_id.vue` together with index.vue in the same folder
- Folder based approach : `/_id/index.vue`

Folder based approach makes the whole project looks more readable and easier to maintain

### B) Vue Router

By default vue-router is already injected to every vue component in Nuxt, so we have access to it using `this.$router` inside every Vue component.

- Use $router for action in scripts
- Use $route to access properties related to router
- $route.params gives you access of dynamic parameters input by user

### C) Navigating within the same page without rendering a new page

Using, say, `<a href="/users">Users</a>`, will allow you to navigate to users index.vue but it will do it by rerendering the whole page (i.e. sending request to server for this "/users" page), i.e. we are not staying in the single page application

With vue-router in general Vue application, we can use `<router-link>` for the purpose of staying in SPA. It uses the anchor tag `<a>` behind the scene but catches the vue-router link (e.g. "/users") and prevents the default behavior of sending a request.

In Nuxt, we use `<nuxt-link>` for this and it is just the same as `<router-link>`

### D) Page Validation

vue files in pages folder are different from those in components folder.
vue files in pages folder are loaded as the root pages for given url. Then we import reusable components from the components folder. This separates the pages file with the components file and satisfies the main objective of Vue: creating small and reusable components.

Remarks about pages components:

- The pages components don't just get rendered when you visit a certain URL.
- We can access all the default Vue properties in pages component.
- They also got some special properties in the Vue object. These properties will be ignored by VueJS but NuxtJS is gonna do something about it: e.g. page validation:
  - Validate is a special method nuxt executes before rendering a route.

### E) Nested routes

Load the content to be loaded into a Navigation page.
How to do it? Say you want to have nested routes in "/users"
We then do the following:

1. Adjust the naming:
   Create a new file "users.vue" next to the "users" folder, i.e. create in the pages folder directly has to have the same name as the folder.

   Inside pages folder -
   Before:  
    /users/\_id/index.vue  
    /users/index.vue

   After:  
    /users/\_id/index.vue  
    /users/index.vue  
    /users.vue

2. Move every line of code inside "/users/index.vue" to "users.vue"
3. Add a tag `<nuxt-child />` inside "users.vue" for any content you would like
4. Place any content you would like in "/users/index.vue" just to make sure there is content to show in "/users" route

## Data

### asyncData

- This method favors SSR so that in case we need to retrieve the data from server, the html will be pre-rendered in the server when all the data has received and send to the client. Then when we review the source code in browser, we can also see the data in the page.
- However, asyncData is executed on the server. And if we execute an asynchronous task, it will wait for this task to finish before it returns to page to the client.
- Hence we will get a pre-rendered and completed page when we review the source code of the page and so do the crawler.
- Nuxt will only call this method in pages folder, not anywhere in components. So if you added in a component in one of your other components, like in a layout or in the components folder, this will simply not be executed and it will not work correctly.
- Inside the asyncData method, the `this` keyword does not work as expected because asyncData runs before this component is actually created. If we try to access a method or a field from the normal data or anything like that, `this` will not give you the Vue component instance. We won't be able to access methods and so on because the component has not been created yet. we can't access the finished Vue component instance because it is not finished yet.
- Without `this`, We can make use of the `context` variable given as the first argument of the asyncData method => it provides properties pretty much the same as the Vue instance e.g. store, route
- This method is pretty much the same as the normal data method in the sense that in the end it has to return an object, which will be the data of this component.

- Example:  
  So what we're doing now is we're executing this timeout function and we're returning a JavaScript object
  which holds our loaded posts.  
  A) Use context and callback: We are calling a callback inside the setTimeout function. It executes a callback method that first passes an error object (this will throw an error upon executes this line) and second argument is the javascript object, i.e. the data, that we can access from client when the request completed gracefully

```
asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: '1',
            title: 'frst post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
          {
            id: '2',
            title: 'second post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
          {
            id: '3',
            title: 'third post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
        ],
      });
    }, 1500);
  },
```

With error:

```
asyncData(context, callback) {
    setTimeout(() => {
      callback(new Error('Error getting data), {
        loadedPosts: [
          {
            id: '1',
            title: 'frst post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
          {
            id: '2',
            title: 'second post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
          {
            id: '3',
            title: 'third post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
        ],
      });
    }, 1500);
  },
```

B) Return a Promise: we return a promise in asyncData, then async data will take that promise and listen to it and render to page once it is resolved.

```
asyncData() {
  // Alternative: we return a promise in asyncData, then async data will take that promise and listen to it and render to page once it is resolved.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        loadedPosts: [
          {
            id: '1',
            title: 'frst post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
          {
            id: '2',
            title: 'second post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
          {
            id: '3',
            title: 'third post',
            previewText: 'This is preview text',
            thumbnail: '/code.jpg',
          },
        ],
      });
      reject(new Error('Error getting data'));
    }, 1500);
  })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      // context.error helps throw the error to nuxt
      context.error(e);
    });
},
```

- AsyncData does not always run on the server. It only does so when we are loading the page for the first time. After the page is loaded (i.e. the page is created in server and rendered on client), it stays in the client and whenever we go back to the page with the asyncData property by navigating around, it will be data that's already rendered in client. We can try to insert a console.log inside asyncData to test this.
