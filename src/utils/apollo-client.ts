import { provide } from 'vue'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

// Create an http link:
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL
})

// Create the apollo client
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
})

const setupClient = () => provide(DefaultApolloClient, apolloClient)

export default setupClient
