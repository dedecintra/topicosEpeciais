import {Spacecraft, Containership} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containership{
  cargoContainer: number
  constructor(){
    super('hyperdrive')
    this.cargoContainer = 2
  }
  jumpIntoHyperspace(){
    if (Math.random() >= 0.5){
      super.jumpIntoHyperspace();
    }
    else {
      console.log('Failed to jump into hyperspace');
    }
  }
}
