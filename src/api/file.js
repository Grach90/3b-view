import * as Fetch from "internal/_fetch";

export const fetchFiles = async project_id => {
  console.log("project_id", project_id);
  try {
    const response = await Fetch.get(
      `/api/projects/${project_id}/files`,
      "json",
    );

    return response;
  } catch (err) {
    return {status: "error", message: "something went error"};
  }
};

export const deleteFiles = async (user_id, files_id) => {
  try {
    const response = await Fetch.drop(
      `/api/user/${user_id}/projects/files/${files_id}`,
      "json",
    );

    return response;
  } catch (err) {
    return {status: "error", message: "Something went error"};
  }
};

export const cancele_model_creating = async (project_id, file_id) => {
  try {
    const response = await fetch(
      `/api/companies/projects/${project_id}/files/${file_id}/cancel_model_creating`,
      {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
      },
    );

    return response;
  } catch (err) {
    return {status: "error", message: "something went error"};
  }
};

// export const get_file = async file_id => {
//   try {
//     const response = await fetch(`/api/file/${file_id}`);
//     return response;
//   } catch (err) {
//     return {status: "error", message: "something went error"};
//   }
// };

export const get_file = async file_ids => {
  try {
    const response = await fetch(`/api/viewer/file`, {
      method: "POST",
      body: JSON.stringify({file_ids}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    return {status: "error", message: "something went error"};
  }
};
