import gql from 'graphql-tag'

export const CHARACTERS_QUERY = gql`
  query Characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`

export const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      image
      species
      status
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        episode
        air_date
        characters {
          id
          name
        }
      }
    }
  }
`
