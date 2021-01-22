# 编译、安装、使用 Camunda BPM JSSDK

从 OpenAPI Spec for Camunda BPM REST API 生成 Camunda BPM JSSDK。



## 预编译版本

计划在 Nodejs 中使用本 SDK，而不想自行编译的，可以使用预编译版本进行安装。

[Camunda BPM JSSDK 7.13.0](https://github.com/hustrlee/camunda-bpm-jssdk/raw/master/sample/camunda_bpm_rest_api-7.13.0.tgz)



## 生成工具

[OpenAPI Generator](https://openapi-generator.tech/)。

使用官方 Docker 版本：

```bash
$ docker pull openapitools/openapi-generator-cli:latest
```

> **OpenAPI Generator** 生成的 Javascript Client 代码质量高于 [Swagger Codegen](https://swagger.io/tools/swagger-codegen/)



## 版本

OpenAPI Spec 当前版本是 `camunda-engine-rest-openapi-7.13.0`。

更新版本可以在 [Camunda Docs - OpenAPI](https://docs.camunda.org/manual/latest/reference/rest/openapi/) 下载。



## 生成

执行以下脚本：

```bash
$ ./clientgen.sh
```



## 选项

直接修改 `clientgen.sh` 脚本。

### 源文件

```shell
OPENAPI_FILE="camunda-engine-rest-openapi-7.13.0/openapi.json"
```

### 使用 Promise

```shell
usePromises=true
```



## 本地安装 node_module

该 SDK 并不打算发布到 [npm](https://npmjs.com)，需要本地打包、安装。



### Pack

打包成本地安装的 module 包。

```bash
$ npm install # 安装依赖包
$ npm pack
```

Pack 结果，生成 `camunda_bpm_rest_api-7.13.0.tgz` 文件。



### 安装本地 SDK

将 `.tgz` 拷贝到需要使用该 SDK 的工程目录下，并在该目录下执行：

```bash
$ npm install camunda_bpm_rest_api-7.13.0.tgz --save
```



## Nodejs Sample

```javascript
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
```

