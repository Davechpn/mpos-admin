import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { AuthProvider } from './contexts/auth.provider';
import { MessagesProvider } from './contexts/messages.provider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql/',//'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
})

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <MessagesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MessagesProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
