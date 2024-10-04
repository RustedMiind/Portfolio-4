function api(path?: string) {
  return `https://server.alisoliman.net/${path || ""}`;
  return `http://localhost:3333/${path || ""}`;
}

export default api;
