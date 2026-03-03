import { useEffect, useState } from "react";
import { client } from "../graphql/client";
import { GET_SCREEN } from "../graphql/queries";

export function useScreen(route) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchScreen() {
      setLoading(true);
      setError(null);

      try {
        const res = await client.request(GET_SCREEN, { route });
        if (!cancelled) setData(res.screenByRoute);
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchScreen();
    return () => {
      cancelled = true;
    };
  }, [route]);

  return { data, loading, error };
}