import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      console.log(res);
      setData(res.data);
      setLoading(false);
    };
    fetch();
  }, [url]);

  return { data, loading };
}
