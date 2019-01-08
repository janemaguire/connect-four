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
  * @return {Array} An array of token objects
  **/

  createTokens(num) {
    let tokens = []
    for (let i=0; i<num; i++) {
      tokens.push(new Token(i, this));
    }
    return tokens;
  }

  /**
  * Tokens a player hasn't played yet
  * @return {Array} Array of unused tokens
  **/

  get unusedTokens () {
    return this.tokens.filter(token => !token.played);
  }

  /**
  * A players active token
  * @return {Object} The first token in the array of unused tokens
  **/

  get activeToken () {
    return this.unusedTokens[0];
  }

}
