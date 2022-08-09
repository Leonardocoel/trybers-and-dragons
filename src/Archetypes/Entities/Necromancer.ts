import { EnergyType } from '../../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  energyType: EnergyType;
  private static _archetypeIntances = 0;

  constructor(name:string) {
    super(name);
    this.energyType = 'mana';
    Necromancer._archetypeIntances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._archetypeIntances;
  }
}