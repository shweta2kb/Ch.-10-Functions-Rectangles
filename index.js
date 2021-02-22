let straightline = '--------------------'

function makeLine(size){
let line = '';
for (let i = 0; i < size; i++){
  line += '#'
}
  return line;
}
console.log(makeLine(1))
console.log(straightline)

function makeSquare(size) {
let square = '';
for (let j = 0; j < size; j++){
  square += (makeLine(size) + '\n')
}
return square.slice(0, -1);
}
console.log(makeSquare(5))
console.log(straightline)

function makeRectangle(width, height){
let rectangle = ''
for (let k = 0; k < height; k++){
  rectangle += (makeLine(width) + '\n')
}

return rectangle.slice(0, -1)
}
console.log(makeRectangle(5, 3))
console.log(straightline)

function makeDownwardStairs(height){
  let stairs = '';
  for (let l = 0; l < height; l++){
    stairs += (makeLine(l + 1) + '\n')
  }
  return stairs.slice(0, -1);
}
console.log(makeDownwardStairs(5))
console.log(straightline)

function makeSpaceLine(numSpaces, numChars){
  let spaceLine = '';
  for (let n = -1; n < numSpaces; n++){
    spaceLine += ' ';
  }
  for (let m = 0; m < numChars; m++){
    spaceLine += '#'
  }
  return spaceLine;
}
console.log(makeSpaceLine(3,5))
console.log(straightline)

function makeIsoscelesTriangle(height){
  let triangle = '';
  for (let i = 0; i < height; i++){
    triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + '\n');
  }
  return triangle.slice(0, -1)
}
console.log(makeIsoscelesTriangle(5));
console.log(straightline)

function reverse(str){
  return str.split('').reverse().join('');
}

function makeDiamond(height){
  let diamond = '';

    diamond += makeIsoscelesTriangle(height);
    diamond += '\n' + reverse(makeIsoscelesTriangle(height).slice(0, -1));
  return diamond
}
console.log(makeDiamond(5))