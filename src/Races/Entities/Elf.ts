import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  private static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf._raceInstances += 1;
  }

  public static createdRacesInstances(): number {
    return Elf._raceInstances;
  }
}