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
            headline: "Welcome 👋",
            subheadline: "This UI is driven by the server.",
            ctaText: "Shop now",
            ctaHref: "/shop"
          }
        },
        {
          id: "grid-1",
          type: "ProductGrid",
          props: {
            title: "Featured Products",
            productIds: ["p1", "p2", "p3"]
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
        },
        {
          id: "grid-2",
          type: "ProductGrid",
          props: {
            title: "All Products",
            productIds: ["p1", "p2", "p3", "p4"]
          }
        }
      ]
    }
  ],
  products: [
    { id: "p1", name: "Socks", priceCents: 1299, imageUrl: "https://picsum.photos/seed/socks/400/300" },
    { id: "p2", name: "Hat", priceCents: 2499, imageUrl: "https://picsum.photos/seed/hat/400/300" },
    { id: "p3", name: "Hoodie", priceCents: 5499, imageUrl: "https://picsum.photos/seed/hoodie/400/300" },
    { id: "p4", name: "Mug", priceCents: 1899, imageUrl: "https://picsum.photos/seed/mug/400/300" }
  ]
};