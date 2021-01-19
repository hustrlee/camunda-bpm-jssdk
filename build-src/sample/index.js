// 假设 Camunda BPM 已经安装，且 REST API 根路径为：http://localhost:8080/engine-rest
// 如果根路径不正确，请修改 node_modules/camunda_bpm_rest_api/dist/ApiClient.js 中的 basePath

const CamundaSDK = require("camunda_bpm_rest_api");

let versionApi = new CamundaSDK.VersionApi();

// 使用 .then
versionApi.getRestAPIVersion().then(
  data => {
    console.log("Camunda BPM Engine Version: " + data.version);
  },
  error => {
    console.error(error);
  }
);

// 使用 async/await
(async () => {
  let data = await versionApi.getRestAPIVersion();
  console.log("Camunda BPM Engine Version: " + data.version);
})();
