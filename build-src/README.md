# Camunda BPM 的 Javascript 客户端库

Camunda 官方提供了 [JS Client Library](https://github.com/camunda/camunda-bpm-platform/tree/master/webapps/camunda-bpm-sdk-js)，但是官方库只支持**异步回调**方式，不支持 **Promise** 和 **async/await** 模式。本项目使用 [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) 从 [Camunda OpenAPI Documentation](https://app.camunda.com/nexus/service/rest/repository/browse/camunda-bpm/org/camunda/bpm/camunda-engine-rest-openapi/?__hstc=12929896.6e6a819ec62504cc7a64f9630a25792f.1593286657956.1610979311119.1610982609775.46&__hssc=12929896.2.1610982609775&__hsfp=2932787316) 生成 Javascript 客户端库，支持 Promise 模式。



## 生成

执行脚本 `clientgen.sh` 生成 Javascript 客户端。

```bash
./clientgen.sh
```



## 打包

```shell
npm install
npm pack
```

