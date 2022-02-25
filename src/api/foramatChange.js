export const getProgress = async () => {
  try {
    const response = await fetch("/api/ifc/formatChange/progress");
    const data = await response.json();

    return data;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const emptyRedis = async () => {
  try {
    const response = await fetch("/api/ifc/formatChange/redis/empty");
    const data = await response.json();

    return data;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const download_file = async (filename, file_path, type) => {
  try {
    const response = await fetch(
      `/api/projects/files/${encodeURIComponent(file_path)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const data = await response.json();

    return data;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const send_to_firebase = async file_id => {
  try {
    const response = await fetch("/api/firebase/file", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({file_id}),
    });

    return response;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const cancel_converting_file = async file_id => {
  try {
    const response = await fetch(
      `/api/companies/files/${file_id}/cancel_model_creating`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return response;
  } catch (err) {
    return {status: "error", message: err};
  }
};
