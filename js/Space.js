class Space {
  constructor(x, y) {
    x = this.x;
    y = this.y;
    diameter: 76;
    radius: diameter/2;
    id = `space-${x}-${y}`;
    token = null;
    drawSVGSpace() {
      const svgSpace = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      svgSpace.setAttributeNS(null, "id", this.id);
      svgSpace.setAttributeNS(null, "cx", (this.x * this.diameter) + this.radius);
      svgSpace.setAttributeNS(null, "cy", (this.y * this.diameter) + this.radius);
      svgSpace.setAttributeNS(null, "r", this.radius - 8);
      svgSpace.setAttributeNS(null, "fill", "black");
      svgSpace.setAttributeNS(null, "stroke", "none");
      document.getElementById("mask").appendChild(svgSpace);   
    }
  }
}
