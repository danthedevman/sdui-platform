export const mockData = {
  screens: [
    {
      id: "home",
      title: "Home",
      route: "/",
      components: [
        {
          id: "hero-1",
          type: "Hero",
          props: {
            headline: "Welcome",
            subheadline: "This UI is driven by the server.",
            ctaText: "Shop now",
            ctaHref: "/shop"
          }
        },
        {
          id: "banner-1",
          type: "Banner",
          props: {
            tone: "info",
            text: "Free shipping over $50"
          }
        }
      ]
    },
    {
      id: "shop",
      title: "Shop",
      route: "/shop",
      components: [
        {
          id: "header-1",
          type: "SectionHeader",
          props: { title: "Shop", subtitle: "Pick something nice." }
        }
      ]
    }
  ]
};