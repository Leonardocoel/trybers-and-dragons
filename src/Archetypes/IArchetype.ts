import { EnergyType } from '../Energy';

export interface ArchetypeDTO {
  name: string;
  special: number;
  cost: number;
  energyType: EnergyType;
}