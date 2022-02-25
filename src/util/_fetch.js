export const get = async (u, t) => {
  const response = await fetch(u);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response[t]();
};

export const post = (u, p) => fetch(u, {method: "POST", ...p});
export const put = (u, b) => fetch(u, {method: "PUT", body: b});
export const patch = (u, b) => fetch(u, {method: "PATCH", b});
export const drop = u => fetch(u, {method: "DELETE"});
