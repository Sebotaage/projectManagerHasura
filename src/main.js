import Vue from 'vue';
import './plugins/vuetify';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import VueApollo from 'vue-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueApollo);

// Create an http link:
const link = new HttpLink({
  uri: 'https://herokutestseb.herokuapp.com/v1/graphql',
  fetch,
});
const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: true,
  }),
});
const apolloProvider = new VueApollo({
  defaultClient: client,
});

new Vue({
  router,
  apolloProvider,
  render(h) {
    return h(App);
  },
}).$mount('#app');
