import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App);

// We define our Custom html tag here and establish a link with the corresponding component
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);

app.mount('#app');
