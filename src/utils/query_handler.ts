export const handleQuery = (PAYLOAD: {}) => {
  let part = ``;
  Object.keys(PAYLOAD)?.map((key: any) => {
    if (PAYLOAD[key]) {
      part += `&${key}=${PAYLOAD[key]}`;
    }
  });
  return part;
};
