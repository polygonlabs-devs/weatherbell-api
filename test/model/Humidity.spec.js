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
    instance = new WeatherApiForVizrt.Humidity();
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

  describe('Humidity', function() {
    it('should create an instance of Humidity', function() {
      // uncomment below and update the code to test Humidity
      //var instane = new WeatherApiForVizrt.Humidity();
      //expect(instance).to.be.a(WeatherApiForVizrt.Humidity);
    });

    it('should have the property humidity (base name: "humidity")', function() {
      // uncomment below and update the code to test the property humidity
      //var instane = new WeatherApiForVizrt.Humidity();
      //expect(instance).to.be();
    });

  });

}));
