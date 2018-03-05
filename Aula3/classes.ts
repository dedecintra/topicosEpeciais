import {Spacecraft, Containership} from './base-ships'
import {MillenniumFalcon} from './starfighters'

//import * as _ from 'lodash'
//console.log(_.pad("TypeScript Examples", 40, "="))
let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainer > 2

console.log(`Is Falcon goof for the job? ${goodForTheJob(falcon) ? 'Sim' : 'Não'}`)
