import { useEffect, useState } from "react";
import { postConfig } from "../helpers/reqConfig";

const usePostData = (url, body) => {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    errMsg: "",
  });
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const config = postConfig(body);
    config["signal"] = signal;

    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        setResponse({ data: res, loading: false, errMsg: "" });
      })
      .catch((err) => {
        console.log(err);
        setResponse({ data: [], loading: false, errMsg: "Fetch Failed" });
      });

    return () => {
      controller.abort();
    };
  }, [url, body]);
  return response;
};

export default usePostData;
