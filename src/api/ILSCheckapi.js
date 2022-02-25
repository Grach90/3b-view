export const setData = async (
  company_name,
  projectName,
  file_id,
  file,
  checkedPointsArr,
) => {
  try {
    const controller = new AbortController();
    const signal = controller.signal;
    const myLocal = window.localStorage;

    const response = await fetch(
      `/api/ils/companies/${company_name}/projects/${projectName}/files/${file_id}`,
      {
        method: "POST",
        body: JSON.stringify({
          file,
          company_name,
          projectName,
          myLocal,
          checkedPointsArr,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        signal: signal,
      },
    );

    const data = await response.json();

    return data;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const download = async (company_name, f_name) => {
  try {
    const response = await fetch(
      `/api/ilsChack/download/${company_name}/${f_name}`,
    );
    const data = await response.json();

    return data;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const getProgress = async () => {
  try {
    const response = await fetch("/api/ils_check/progress/file");
    const data = await response.json();

    return data;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const emptyRedis = async () => {
  try {
    const response = await fetch("/api/ils_checker/progress/redisEmpty");
    const data = await response.json();

    return data;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const getProgressForCheckerTwo = async () => {
  try {
    const response = await fetch("/api/ils_check_two/progress/file");
    const data = await response.json();

    return data;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const emptyRedisForCheckersTwo = async () => {
  try {
    const response = await fetch("/api/ils_check_two/progress/redisEmpty");
    const data = await response.json();

    return data;
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const checker = async attrs => {
  try {
    const {project_id} = attrs;
    const controller = new AbortController();
    const signal = controller.signal;
    const url = `/api/projects/${project_id}/checkers`;
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attrs),
      signal,
    };

    return await fetch(url, request);
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const checker_two = async attrs => {
  try {
    const {project_id} = attrs;
    const controller = new AbortController();
    const signal = controller.signal;
    const url = `/api/projects/${project_id}/checkers_2`;
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attrs),
      signal,
    };

    return await fetch(url, request);
  } catch (err) {
    return {status: "error", message: err};
  }
};
