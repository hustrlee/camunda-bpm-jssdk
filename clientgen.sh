#!/bin/bash

OPENAPI_FILE="camunda-engine-rest-openapi-7.13.0/openapi.json"

docker run --rm -v $PWD:/local -u $(id -u):$(id -g) \
openapitools/openapi-generator-cli generate \
--global-property apiTests=false \
--global-property modelTests=false \
-i /local/$OPENAPI_FILE \
-o /local \
-g javascript \
-p usePromises=true