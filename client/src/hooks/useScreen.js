import { useEffect, useState } from "react";
import { client } from "../graphql/client";
import { GET_SCREEN } from "../graphql/queries";

export function useScreen(route = "/") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchScreen() {
      const res = await client.request(GET_SCREEN, { route });
      setData(res.screenByRoute);
      setLoading(false);
    }

    fetchScreen();
  }, [route]);

  return { data, loading };
}