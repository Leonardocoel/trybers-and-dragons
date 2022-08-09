import { EnergyType } from '../../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  energyType: EnergyType;
  private static _archetypeIntances = 0;

  constructor(name:string) {
    super(name);
    this.energyType = 'mana';
    Mage._archetypeIntances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._archetypeIntances;
  }
}