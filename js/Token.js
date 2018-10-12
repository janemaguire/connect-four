class Token {
  constructor(id, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`
    this.played = false;
  }
}
