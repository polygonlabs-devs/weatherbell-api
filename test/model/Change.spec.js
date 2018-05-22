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
    instance = new WeatherApiForVizrt.Change();
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

  describe('Change', function() {
    it('should create an instance of Change', function() {
      // uncomment below and update the code to test Change
      //var instane = new WeatherApiForVizrt.Change();
      //expect(instance).to.be.a(WeatherApiForVizrt.Change);
    });

    it('should have the property change1hr (base name: "change1hr")', function() {
      // uncomment below and update the code to test the property change1hr
      //var instane = new WeatherApiForVizrt.Change();
      //expect(instance).to.be();
    });

    it('should have the property change3hr (base name: "change3hr")', function() {
      // uncomment below and update the code to test the property change3hr
      //var instane = new WeatherApiForVizrt.Change();
      //expect(instance).to.be();
    });

    it('should have the property change6hr (base name: "change6hr")', function() {
      // uncomment below and update the code to test the property change6hr
      //var instane = new WeatherApiForVizrt.Change();
      //expect(instance).to.be();
    });

    it('should have the property change12hr (base name: "change12hr")', function() {
      // uncomment below and update the code to test the property change12hr
      //var instane = new WeatherApiForVizrt.Change();
      //expect(instance).to.be();
    });

    it('should have the property change24hr (base name: "change24hr")', function() {
      // uncomment below and update the code to test the property change24hr
      //var instane = new WeatherApiForVizrt.Change();
      //expect(instance).to.be();
    });

  });

}));
