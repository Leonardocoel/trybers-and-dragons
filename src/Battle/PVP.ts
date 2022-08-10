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
    this._attacker.attack(this._defender);
    this._defender.attack(this._attacker);

    console.log(super.fight());
    return super.fight();
  }
}