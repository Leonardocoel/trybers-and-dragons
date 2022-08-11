import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import SimpleFighter from './Fighter/SimpleFigther';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _dexterity: number;
  private _defense: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }
  
  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }
  
  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._strength;
  }
  
  public get dexterity() : number {
    return this._dexterity;
  }
  
  public get energy() : Energy {
    return { ...this._energy };
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    if (this._defense > 0) this._defense -= attackPoints;
    
    if (this._defense <= 0) {
      this._lifePoints -= attackPoints;
      this._defense = 0;
    }
    
    if (this._lifePoints <= 0) this._lifePoints = -1;

    return this._lifePoints;
  }

  levelUp(): void {
    const { _race: race } = this; 
  
    this._maxLifePoints += getRandomInt(1, 10);
    this._maxLifePoints = (this._maxLifePoints > race.maxLifePoints) 
      ? race.maxLifePoints : this._maxLifePoints;

    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}
