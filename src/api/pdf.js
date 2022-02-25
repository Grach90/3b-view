import * as Fetch from "internal/_fetch";

export const get_data_for_pdf = async (
  company_id,
  file_id,
  project_id,
  name,
) => {
  const response = await fetch(
    `/api/data/dest/${company_id}/${file_id}/svf/${project_id}/${name}`,
  );
  const data = response.json();

  return data;
};
