class Token {

  constructor(id, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`
    this.played = false;
  }

  drawHTMLToken() {
    const token = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(token);
    token.setAttribute('id', this.id);
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
  }

  get htmlToken() {
    return this.drawHTMLToken();
  }

}
