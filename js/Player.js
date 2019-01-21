class Player {

  constructor (name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
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
    return this.tokens.filter(token => !token.dropped);
  }

  /**
  * A players active token
  * @return {Object} The first token in the array of unused tokens
  **/

  get activeToken () {
    return this.unusedTokens[0];
  }

}
