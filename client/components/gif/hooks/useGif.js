import { useEffect, useState } from "react";
import { obtenerApi } from "../apiGif";

export const useGif = (category) => {
  const [dataGif, setDataGif] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const result = async () => {
      const rexax = await obtenerApi(category);
      setDataGif(rexax);
      setLoading(false)
    };
    result();
  }, [category]);

  return { dataGif, loading };
};
