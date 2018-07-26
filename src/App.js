import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Users from './components/Users/users.js';

const client = new ApolloClient({
  uri: 'https://fakerql.com/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <h1>Hello Apollo. Ready to start.</h1>
    <Users />
  </ApolloProvider>
);
export default App;
