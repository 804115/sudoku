//  Sudoku generation
//  220505
//  e.ettlin
//  Globals
let cellWidth, numCols, numRows, cells, blocks;
let currCell, cellCount = 0;
let count = 0;
let colIndex = 0;
let rowIndex = 0;

function setup() {
  var cnv = createCanvas(450, 450);
  cnv.position((windowWidth - width) / 2, 50);
  frameRate(33);
  background(230);
  cellWidth = 50;
  numCols = width / cellWidth;
  numRows = height / cellWidth;
  cells = [];
  //  load 2D array with cell objects
  loadCells();
  currCell = cells[0][0];
  getValue(currCell);
  setRowZero(currCell);
  setColZero(currCell);
  setBlockZero(currCell);
  currCell.clr = color(255, 155, 55)
}

function draw() {
  background(230);
  renderCells()
}

function renderCells() {
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      cells[r][c].render();
    }
  }
  //render Blocks
  for(let i = 0; i < blocks.length; i++){
    let r = blocks[i].row;
    let c = blocks[i].col;
    stroke(0,0,50);
    strokeWeight(5);
    fill(0,0,0,20);
    rect(r*cellWidth, c*cellWidth, 3*cellWidth, 3*cellWidth);
  }
  //render outter border
  rect(0, 0, 9*cellWidth, 9*cellWidth);
}



function loadCells() {
  for (let r = 0; r < numRows; r++) {
    cells[r] = [];
    for (let c = 0; c < numCols; c++) {
      cells[r][c] = new Cell(r, c, cellWidth);
    }
  }

  blocks = [//  ref to upper left cell of each block
    cells[0][0], cells[0][3], cells[0][6],
    cells[3][0], cells[3][3], cells[3][6],
    cells[6][0], cells[6][3], cells[6][6]
  ]
}

function getValue(cell) {
  let i = floor(random(0, 9));
  console.log(i);
  let count = 0;
  while (cell.possibles[i] === 0 && count++ < 100) {
    i = floor(random(0, 9));
  }
  cell.value = cell.possibles[i];
  cell.possibles[i] = 0;// set possibles to 0 
}

function setRowZero(cell) {
  let r = cell.row;
  for (let i = 0; i < 9; i++) {
    let pi = cell.value - 1;

    cells[r][i].possibles[pi] = 0;
  }
}

function setColZero(cell) {
  let c = cell.col;
  for (let i = 0; i < 9; i++) {
    let pi = cell.value - 1;
    cells[i][c].possibles[pi] = 0;
  }
}

function setBlockZero(cell) {
  let r = cell.row;
  let c = cell.col;
  let blockIndex;
  //  determine which block the cell is in
  if(r < 3 && c < 3){
    blockIndex = 0;
  }else if (r < 3 && c < 6){
    blockIndex = 1;
  }else if (r < 3 && c < 9){
    blockIndex = 2;
  }else if (r < 6 && c < 3){
    blockIndex = 3;
  }else if (r < 6 && c < 6){
    blockIndex = 4;
  }else if (r < 6 && c < 9){
    blockIndex = 5;
  }else if (r < 9 && c < 3){
    blockIndex = 6;
  }else if (r < 9 && c < 6){
    blockIndex = 7;
  }else if (r < 9 && c < 9){
    blockIndex = 8;
  }

  let blockCell = blocks[blockIndex];
  let pi = cell.value - 1;//  possibles index
  console.log( blockCell);
  console.log( cell);
  for(let r = 0; r < 3; r++){
    for(let c = 0; c < 3; c++){
    //  travers block and set possibles[pi] to 0
      cells[blockCell.row + r][blockCell.col + c].possibles[pi] = 0;
    }
  }
}

//++++++++++++++++++++++++++++++++++++++++  callbacks

function keyPressed() {
  let r = currCell.row;
  let c = currCell.col;
  currCell.clr = color(220, 220, 190);
  if (keyCode === RIGHT_ARROW) {
    currCell = cells[r][c + 1];
  } else if (keyCode === LEFT_ARROW) {
    currCell = cells[r][c - 1];
  } else if (keyCode === UP_ARROW) {
    currCell = cells[r - 1][c];
  } else if (keyCode === DOWN_ARROW) {
    currCell = cells[r + 1][c];
  }

  currCell.clr = color(255, 155, 55);
  getValue(currCell);
  setRowZero(currCell);
  setColZero(currCell);
  setBlockZero(currCell);
}

