export const getConfig = (params) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (params) config["params"] = params;
  return config;
};

export const postConfig = (body) => {
  const config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  return config;
};
