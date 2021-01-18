#!/bin/bash

OPENAPI_FILE="camunda-engine-rest-openapi-7.14.0/openapi.json"

docker run --rm -v $PWD:/local -u $(id -u):$(id -g) \
openapitools/openapi-generator-cli generate \
--global-property apiTests=true \
--global-property modelTests=true \
-i /local/$OPENAPI_FILE \
-o /local/jssdk-out \
-g javascript \
-p usePromises=true