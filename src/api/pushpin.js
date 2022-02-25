import * as Fetch from "internal/_fetch";

export const fetch_pushpins = files_ids =>
  Fetch.post(`/api/files/pushpins`, {
    body: JSON.stringify({files_ids}),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const create_pushpin = (file_id, attrs) =>
  Fetch.post(`/api/files/${file_id}/pushpins`, {
    body: JSON.stringify(attrs),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const update_pushpin = (attrs, file_id, pushpin_id) =>
  Fetch.patch(`/api/files/${file_id}/pushpins/${pushpin_id}`, {
    body: JSON.stringify(attrs),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const delete_pushpin = (file_id, pushpin_id) =>
  Fetch.drop(`/api/files/${file_id}/pushpins/${pushpin_id}`);

export const get_all_users = project_name =>
  Fetch.get(`/api/companies/project/${project_name}/users`, "json");
