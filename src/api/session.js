const API_HOST = process.env.REACT_APP_API_URL;

export const login = (user) =>
  fetch(`${API_HOST}/api/v1.0.0/sessions`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const signup = (user) =>
  fetch(`${API_HOST}/api/v1.0.0/users`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const logout = () =>
  fetch(`${API_HOST}/api/v1.0.0/sessions`, {
    method: "DELETE",
  });

export const checkLoggedIn = async () => {
  try {
    const response = await fetch(`${API_HOST}/api/v1.0.0/sessions`);
    const { session } = await response.json();

    return { session };
  } catch (e) {
    alert("Something went wrong, please try againt");
  }
};
