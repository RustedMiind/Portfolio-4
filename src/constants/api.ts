function api(path?: string) {
  return `http://77.37.120.134:8889/${path || ""}`;
  return `http://localhost:3333/${path || ""}`;
}

export default api;
