import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private readonly _attacker: Fighter;
  private readonly _defender: Fighter;

  constructor(attacker: Fighter, defender: Fighter) {
    super(attacker);
    this._attacker = attacker;
    this._defender = defender;
  }

  fight(): number {
    while (this._attacker.lifePoints > -1 && this._defender.lifePoints > -1) {
      this._defender.attack(this._attacker);
      this._attacker.attack(this._defender);
    }
    
    return super.fight();
  }
}