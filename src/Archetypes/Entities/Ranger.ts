import { EnergyType } from '../../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energyType: EnergyType;
  private static _archetypeIntances = 0;

  constructor(name:string) {
    super(name);
    this.energyType = 'stamina';
    Ranger._archetypeIntances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._archetypeIntances;
  }
}