import Race from '../Race';

export default class Halfling extends Race {
  maxLifePoints: number;
  private static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling._raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._raceInstances;
  }
}