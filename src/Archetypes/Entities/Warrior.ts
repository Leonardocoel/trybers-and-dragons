import { EnergyType } from '../../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  energyType: EnergyType;
  private static _archetypeIntances = 0;

  constructor(name:string) {
    super(name);
    this.energyType = 'stamina';
    Warrior._archetypeIntances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._archetypeIntances;
  }
}