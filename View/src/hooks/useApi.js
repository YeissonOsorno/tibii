import { useState } from "react";
import axios from "axios";

export default function useApi(method, url) {
  const [result, setResult] = useState({
    loading: false,
    response: null,
    error: null,
  });

  const handleApi = async (data) => {
    setResult({ ...result, loading: true });
    try {
      const response = await axios({ method, url, data });
      if (response.status !== 200) throw new Error(response.statusText);
      setResult({
        ...result,
        response: response.data,
      });
    } catch (err) {
      setResult({
        ...result,
        error: err.message,
      });
    }
  };

  return [result, handleApi];
}
