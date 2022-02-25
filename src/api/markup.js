import * as Fetch from "internal/_fetch";
import * as axios from "axios";

export const fetch_markups = (pushpin_ids, file_id) =>
  Fetch.post(`/api/pushpins/get_markups`, {
    body: JSON.stringify({pushpins_ids: pushpin_ids, file_id}),
    headers: {
      "Content-Type": "application/json",
    },
  });

// export const fetch_markup = (pushpin_id, markup_id) =>
//   Fetch.get(`/api/files/${pushpin_id}/markups/${markup_id}`, "json");

export const create_markup = (pushpin_id, file_id, attrs) =>
  Fetch.post(`/api/files/${file_id}/${pushpin_id}/markups`, {
    body: JSON.stringify(attrs),
    headers: {
      "Content-Type": "application/json",
    },
  });

export const update_markup = (pushpin_id, markup_id, attrs) =>
  Fetch.patch(`/api/files/${pushpin_id}/markups/${markup_id}`, {
    body: attrs,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const delete_markup = (file_id, pushpin_id, markup_id) =>
  Fetch.drop(`/api/files/${file_id}/${pushpin_id}/markups/${markup_id}`);

export const set_images = (file_id, filepath, markup_id, formData) =>
  axios.post(
    `/api/files/${file_id}/${filepath}/markups/${markup_id}/images`,
    formData,
  );
