const CHARACTERS =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン';

export class Columnn {
  constructor(x, fontSize, context) {
    this.x = x;
    this.y = 0;
    this.fontSize = fontSize;
    this.context = context;
  }
  drawnSymbol() {
    const characterIndex = Math.floor(Math.random() * CHARACTERS.length);
    const symbol = CHARACTERS[characterIndex];

    this.context.fillText(symbol, this.x, this.y);
    this.y += this.fontSize;
  }
}
