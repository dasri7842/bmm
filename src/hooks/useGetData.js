import { useEffect, useState } from "react";
import axios from "axios";
import { getConfig } from "./../helpers/reqConfig";

const useGetData = (url, params) => {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    errMsg: "",
  });

  const [requrl] = useState(url);
  const [reqparams] = useState(params);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    const config = getConfig(reqparams);
    config["cancelToken"] = ourRequest.token;

    axios
      .get(requrl, config)
      .then((res) =>
        setResponse({ data: res.data, loading: false, errMsg: "" })
      )
      .catch((err) =>
        setResponse({ data: [], loading: false, errMsg: "Fetch Failed" })
      );

    return () => {
      ourRequest.cancel();
    };
  }, [requrl, reqparams]);
  return response;
};

export default useGetData;
