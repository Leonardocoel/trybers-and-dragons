import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  private readonly _character: Fighter;
  private _monsters: SimpleFighter[];

  constructor(character: Fighter, monsters: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monsters = monsters;
  }

  private monsterAttack() {
    const n = getRandomInt(0, 2);
    for (let i = 0; i < n; i += 1) {
      const index = getRandomInt(0, this._monsters.length - 1);
      const chance = getRandomInt(0, 1);
      if (chance === 1) this._monsters[index].attack(this._character);
    }
  }

  fight(): number {
    while (this._character.lifePoints > -1 
      && this._monsters.length > 0) {
      const i = getRandomInt(0, this._monsters.length - 1);
      
      this._character.attack(this._monsters[i]);

      if (this._monsters[i].lifePoints === -1) this._monsters.splice(i, 1);
      else { this._monsters[i].attack(this._character); }

      this.monsterAttack();
    }
    return super.fight();
  }
}