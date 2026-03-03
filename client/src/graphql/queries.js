export const GET_SCREEN = `
query GetScreen($route: String!) {
  screenByRoute(route: $route) {
    id
    route
    layout {
      id
      version
    }
    slots {
      name
      components {
        id
        type
        props
      }
    }
  }
}
`;