export const mockData = {
  screens: [
    {
      id: "home",
      route: "/",
      title:"home",
      layout: { id: "marketing", version: 1 },
      slots: [
        {
          name: "header",
          components: [{ id: "nav-1", type: "Navbar", props: {} }],
        },
        {
          name: "main",
          components: [
            {
              id: "banner-1",
              type: "Banner",
              props: { tone: "info", text: "Homepage" },
            },
            {
              id: "hero-1",
              type: "Hero",
              props: { headline: "Welcome", subheadline: "Server-driven UI" },
            },
          ],
        },
        {
          name: "footer",
          components: [{ id: "foot-1", type: "Footer", props: {} }],
        },
      ],
    },
    {
      id: "about",
      route: "/about",
      title:"about",
      layout: { id: "dashboard", version: 1 },
      slots: [
        {
          name: "header",
          components: [{ id: "nav-1", type: "Navbar", props: {} }],
        },
        {
          name: "main",
          components: [
            {
              id: "banner-1",
              type: "Banner",
              props: { tone: "info", text: "About page" },
            },
            {
              id: "hero-1",
              type: "Hero",
              props: { headline: "Welcome", subheadline: "Server-driven UI" },
            },
          ],
        },
        {
          name: "footer",
          components: [{ id: "foot-1", type: "Footer", props: {} }],
        },
      ],
    }
  ],
};
