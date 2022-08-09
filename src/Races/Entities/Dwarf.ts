import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints: number;
  private static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf._raceInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf._raceInstances;
  }
}
