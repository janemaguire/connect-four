class Player {

  constructor (name, id, color, active = false) {
    name = this.name;
    id = this.id;
    color = this.color;
    turn = this.active;
    tokens = createTokens(21);
  }

  /**
  * Generates the number of tokens speified
  * @return {array} An array of token objects
  **/

  createTokens(num) {
    let tokens = []
    for (let i=0; i<num; i++) {
      tokens.push(new Token(i, this));
    }
    return tokens;
  }

}
