export const fetchCompanies = async attrs => {
  try {
    const response = await fetch("/api/companies");
    const data = await response.json();

    return !!data ? data : {};
  } catch (err) {
    return {status: "error", message: err};
  }
};

export const fetchCompany = async name => {
  try {
    const response = await fetch(`/api/companies/${name}`);
    const data = await response.json();

    return !!data ? data : {};
  } catch (err) {
    return {status: "error", message: err};
  }
};
