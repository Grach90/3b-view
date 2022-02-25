export const fetchProjects = async company_name => {
  try {
    return await fetch(`/api/companies/${company_name}/projects`);
  } catch (err) {
    return {status: "error", message: "Something went error"};
  }
};

export const createProject = async (
  company_name,
  user_id,
  project_configs,
  project_id,
) => {
  try {
    return await fetch(`/api/companies/${company_name}/projects`, {
      method: "POST",
      body: JSON.stringify({user_id, project_configs, project_id}),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return {
      status: "error",
      message: err,
    };
  }
};

export const updateProject = async (
  company_name,
  user_id,
  project_configs,
  project_id,
) => {
  try {
    return await fetch(`/api/companies/${company_name}/projects/update`, {
      method: "POST",
      body: JSON.stringify({user_id, project_configs}),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return {
      status: "error",
      message: err,
    };
  }
};

export const getProjectConfigFile = async (company_name, project_name) => {
  try {
    return await fetch(
      `/api/companies/${company_name}/projects/${project_name}`,
    );
  } catch (err) {
    return {
      status: "error",
      message: err,
    };
  }
};

export const deleteProject = async (user_id, array, company_name) => {
  try {
    return await fetch(`/api/users/${user_id}/projects/delete`, {
      method: "POST",
      body: JSON.stringify({user_id, array, company_name}),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return {
      status: "error",
      message: err,
    };
  }
};

export const receiveRights = async (user_id, project_id) => {
  try {
    return fetch(`/api/users/${user_id}/projects/${project_id}/permission`);
  } catch (err) {
    return {
      status: "error",
      message: err,
    };
  }
};
