#!/bin/bash

OPENAPI_FILE="camunda-engine-rest-openapi-7.14.0/openapi.json"

docker run --rm -v $PWD:/src -v $(dirname $PWD):/jssdk -u $(id -u):$(id -g) \
openapitools/openapi-generator-cli generate \
--global-property apiTests=true \
--global-property modelTests=true \
-i /src/$OPENAPI_FILE \
-o /jssdk \
-g javascript \
-p projectName=camunda-jssdk \
-p usePromises=true