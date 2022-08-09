import { EnergyType } from '../../Energy';
import { ArchetypeDTO } from './IArchetype';

export default abstract class Archetype implements ArchetypeDTO {
  private readonly _name: string;
  private readonly _special: number;
  private readonly _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this._name;
  }
  
  public get special() : number {
    return this._special;
  }
  
  public get cost() : number {
    return this._cost;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}