let spot1PositionX = 18;
let spot1PositionY = 7
let spot1 = new Spot(spot1PositionX, spot1PositionY);
let spot2PositionX = 10;
let spot2PositionY = 3;
let spot2 = new Spot(spot2PositionX, spot2PositionY);
let spot3PositionX = 7;
let spot3PositionY = 5;
let spot3 = new Spot(spot3PositionX, spot3PositionY);
let spot4PositionX = 15;
let spot4PositionY = 5;
let spot4 = new Spot(spot4PositionX, spot4PositionY);
let spot5PositionX = 13;
let spot5PositionY = 8;
let spot5 = new Spot(spot5PositionX, spot5PositionY);
let spot6PositionX = 10;
let spot6PositionY = 7;
let spot6 = new Spot(spot6PositionX, spot6PositionY);
let spot7PositionX = 3;
let spot7PositionY = 6;
let spot7 = new Spot(spot7PositionX, spot7PositionY);
let spot8PositionX = 8;
let spot8PositionY = 10;
let spot8 = new Spot(spot8PositionX, spot8PositionY);
let spot9PositionX = 16;
let spot9PositionY = 3;
let spot9 = new Spot(spot9PositionX, spot9PositionY);
let spot10PositionX = 15;
let spot10PositionY = 9;
let spot10 = new Spot(spot10PositionX, spot10PositionY);

function Spot(i, j) {
    this.i = i;
    this.j = j;
    this.edges = [];
    this.searched = false;
    this.parent = null;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.weight = 1.5;

    this.show = () => {
      let x = i * w;
      let y = j * w;

    // draw a cell with a waiter
    stroke(250);
    fill('#e4e4e4');
    rect(x, y, w, w);
    image(spotImg, x + 8 , y + 8, img.width / 1.3, img.height / 1.3);
    }

    this.addEdges = arr => {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          if ((arr[i][j].i >= 0 && arr[i][j].j >= 0 && arr[i][j].i <= rows && arr[i][j].j <= cols) && // check if edge is in grid
            ((arr[i][j].i === this.i && arr[i][j].j === this.j - 1) || // top edge
              (arr[i][j].i === this.i + 1 && arr[i][j].j === this.j) || // right edge
              (arr[i][j].i === this.i && arr[i][j].j === this.j + 1) || // bottom edge
              (arr[i][j].i === this.i - 1 && arr[i][j].j === this.j) || // left edge
              (arr[i][j].i === this.i - 1 && arr[i][j].j === this.j - 1) || // left top
              (arr[i][j].i === this.i - 1 && arr[i][j].j === this.j + 1) || // left bottom
              (arr[i][j].i === this.i + 1 && arr[i][j].j === this.j - 1) || // right top
              (arr[i][j].i === this.i + 1 && arr[i][j].j === this.j + 1)) // right bottom
          ) {
              this.edges.push(arr[i][j]);
          }
        }
      }
    }
  }
