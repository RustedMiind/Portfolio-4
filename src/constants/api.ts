function api(path?: string) {
  return `http://server.alisoliman.net/${path || ""}`;
  return `http://localhost:3333/${path || ""}`;
}

export default api;
