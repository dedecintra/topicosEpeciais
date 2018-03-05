"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
//import * as _ from 'lodash'
//console.log(_.pad("TypeScript Examples", 40, "="))
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is Falcon goof for the job? " + (goodForTheJob(falcon) ? 'Sim' : 'Não'));
