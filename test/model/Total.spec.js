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
    instance = new WeatherApiForVizrt.Total();
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

  describe('Total', function() {
    it('should create an instance of Total', function() {
      // uncomment below and update the code to test Total
      //var instane = new WeatherApiForVizrt.Total();
      //expect(instance).to.be.a(WeatherApiForVizrt.Total);
    });

    it('should have the property total1hr (base name: "total1hr")', function() {
      // uncomment below and update the code to test the property total1hr
      //var instane = new WeatherApiForVizrt.Total();
      //expect(instance).to.be();
    });

    it('should have the property total3hr (base name: "total3hr")', function() {
      // uncomment below and update the code to test the property total3hr
      //var instane = new WeatherApiForVizrt.Total();
      //expect(instance).to.be();
    });

    it('should have the property total6hr (base name: "total6hr")', function() {
      // uncomment below and update the code to test the property total6hr
      //var instane = new WeatherApiForVizrt.Total();
      //expect(instance).to.be();
    });

    it('should have the property total12hr (base name: "total12hr")', function() {
      // uncomment below and update the code to test the property total12hr
      //var instane = new WeatherApiForVizrt.Total();
      //expect(instance).to.be();
    });

    it('should have the property total24hr (base name: "total24hr")', function() {
      // uncomment below and update the code to test the property total24hr
      //var instane = new WeatherApiForVizrt.Total();
      //expect(instance).to.be();
    });

  });

}));
