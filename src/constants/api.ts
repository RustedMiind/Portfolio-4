function api(path?: string) {
  return `http://localhost:3333/${path || ""}`;
  return `http://server.alisoliman.net/${path || ""}`;
}

export default api;
