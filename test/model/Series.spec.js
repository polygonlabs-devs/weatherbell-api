/**
 * Weather API for Vizrt
 * This is a Weather API to provide Weather Data to a Vizrt Graphics System
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WeatherApiForVizrt);
  }
}(this, function(expect, WeatherApiForVizrt) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WeatherApiForVizrt.Series();
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

  describe('Series', function() {
    it('should create an instance of Series', function() {
      // uncomment below and update the code to test Series
      //var instane = new WeatherApiForVizrt.Series();
      //expect(instance).to.be.a(WeatherApiForVizrt.Series);
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instane = new WeatherApiForVizrt.Series();
      //expect(instance).to.be();
    });

    it('should have the property end (base name: "end")', function() {
      // uncomment below and update the code to test the property end
      //var instane = new WeatherApiForVizrt.Series();
      //expect(instance).to.be();
    });

    it('should have the property intervalType (base name: "intervalType")', function() {
      // uncomment below and update the code to test the property intervalType
      //var instane = new WeatherApiForVizrt.Series();
      //expect(instance).to.be();
    });

    it('should have the property interval (base name: "interval")', function() {
      // uncomment below and update the code to test the property interval
      //var instane = new WeatherApiForVizrt.Series();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new WeatherApiForVizrt.Series();
      //expect(instance).to.be();
    });

    it('should have the property cumultative (base name: "cumultative")', function() {
      // uncomment below and update the code to test the property cumultative
      //var instane = new WeatherApiForVizrt.Series();
      //expect(instance).to.be();
    });

    it('should have the property list (base name: "list")', function() {
      // uncomment below and update the code to test the property list
      //var instane = new WeatherApiForVizrt.Series();
      //expect(instance).to.be();
    });

  });

}));
