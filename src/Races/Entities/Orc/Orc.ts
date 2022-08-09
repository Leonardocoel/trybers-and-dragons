import Race from '../Race';

export default class Orc extends Race {
  maxLifePoints: number;
  private static _raceInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc._raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._raceInstances;
  }
}