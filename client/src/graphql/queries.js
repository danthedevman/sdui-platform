export const GET_SCREEN = `
  query GetScreen($route: String!) {
    screenByRoute(route: $route) {
      id
      title
      route
      components {
        id
        type
        props
      }
    }
  }
`;