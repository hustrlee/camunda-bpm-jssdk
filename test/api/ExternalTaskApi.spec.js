/**
 * Camunda BPM REST API
 * OpenApi Spec for Camunda BPM REST API.
 *
 * The version of the OpenAPI document: 7.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CamundaBpmRestApi);
  }
}(this, function(expect, CamundaBpmRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CamundaBpmRestApi.ExternalTaskApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ExternalTaskApi', function() {
    describe('completeExternalTaskResource', function() {
      it('should call completeExternalTaskResource successfully', function(done) {
        //uncomment below and update the code to test completeExternalTaskResource
        //instance.completeExternalTaskResource(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('extendLock', function() {
      it('should call extendLock successfully', function(done) {
        //uncomment below and update the code to test extendLock
        //instance.extendLock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('fetchAndLock', function() {
      it('should call fetchAndLock successfully', function(done) {
        //uncomment below and update the code to test fetchAndLock
        //instance.fetchAndLock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExternalTask', function() {
      it('should call getExternalTask successfully', function(done) {
        //uncomment below and update the code to test getExternalTask
        //instance.getExternalTask(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExternalTaskErrorDetails', function() {
      it('should call getExternalTaskErrorDetails successfully', function(done) {
        //uncomment below and update the code to test getExternalTaskErrorDetails
        //instance.getExternalTaskErrorDetails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExternalTasks', function() {
      it('should call getExternalTasks successfully', function(done) {
        //uncomment below and update the code to test getExternalTasks
        //instance.getExternalTasks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExternalTasksCount', function() {
      it('should call getExternalTasksCount successfully', function(done) {
        //uncomment below and update the code to test getExternalTasksCount
        //instance.getExternalTasksCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTopicNames', function() {
      it('should call getTopicNames successfully', function(done) {
        //uncomment below and update the code to test getTopicNames
        //instance.getTopicNames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleExternalTaskBpmnError', function() {
      it('should call handleExternalTaskBpmnError successfully', function(done) {
        //uncomment below and update the code to test handleExternalTaskBpmnError
        //instance.handleExternalTaskBpmnError(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('handleFailure', function() {
      it('should call handleFailure successfully', function(done) {
        //uncomment below and update the code to test handleFailure
        //instance.handleFailure(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryExternalTasks', function() {
      it('should call queryExternalTasks successfully', function(done) {
        //uncomment below and update the code to test queryExternalTasks
        //instance.queryExternalTasks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('queryExternalTasksCount', function() {
      it('should call queryExternalTasksCount successfully', function(done) {
        //uncomment below and update the code to test queryExternalTasksCount
        //instance.queryExternalTasksCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setExternalTaskResourcePriority', function() {
      it('should call setExternalTaskResourcePriority successfully', function(done) {
        //uncomment below and update the code to test setExternalTaskResourcePriority
        //instance.setExternalTaskResourcePriority(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setExternalTaskResourceRetries', function() {
      it('should call setExternalTaskResourceRetries successfully', function(done) {
        //uncomment below and update the code to test setExternalTaskResourceRetries
        //instance.setExternalTaskResourceRetries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setExternalTaskRetries', function() {
      it('should call setExternalTaskRetries successfully', function(done) {
        //uncomment below and update the code to test setExternalTaskRetries
        //instance.setExternalTaskRetries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setExternalTaskRetriesAsyncOperation', function() {
      it('should call setExternalTaskRetriesAsyncOperation successfully', function(done) {
        //uncomment below and update the code to test setExternalTaskRetriesAsyncOperation
        //instance.setExternalTaskRetriesAsyncOperation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unlock', function() {
      it('should call unlock successfully', function(done) {
        //uncomment below and update the code to test unlock
        //instance.unlock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
