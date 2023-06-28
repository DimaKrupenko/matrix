import { Columnn } from './column.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;
context.font = `bold ${FONT_SIZE} monospace`;

const column = new Columnn(100, FONT_SIZE, context);

function animate() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'green';
  column.drawnSymbol();

  setTimeout(() => requestAnimationFrame(animate), 50);
}

animate();
