function api(path?: string) {
  return `http://srv525849.hstgr.cloud:3333/${path || ""}`;
}

export default api;
