import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }
  
  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    const { _lifePoints: lifePoints } = this;
  
    const currentLifePoints = lifePoints - attackPoints;

    this._lifePoints = (currentLifePoints < -1) ? -1 : currentLifePoints;

    return this._lifePoints;
  }
}