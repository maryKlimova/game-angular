import {SquareService} from '../square/square.service';
import { Router } from '@angular/router';

const winnerNum = 10;

export class MemoryService {
  gameFinish = false;
  gameRun = false;
  playerPCcount: number;
  playerUsercount: number;
  selectedSquares = [];
  interval;
  rand: number;
  squares = [];
  intervalTime: number;
  intervalError = false;
  randIndex = 0;

  constructor(private squareService: SquareService, private router: Router) {
    this.setField();
  }


  setField() {
    this.squares = this.squareService.setSquares();
    this.playerPCcount = 0;
    this.playerUsercount = 0;
    this.intervalTime = 1000;
    this.gameFinish = false;
  }

  clearSruares(interval, squares, selSquare, index) {
    return setTimeout((a, b, c) => {
      a[b[c]].color = 'blue';
    }, interval, squares, selSquare, index);
  }


  newGame() {
    (!this.intervalTime) ?
      this.intervalError = true :
      this.intervalError = false;

    if (this.intervalError) {
      return;
    }
    if (this.gameRun) {
      window.open(window.location.origin + '/game/' + Math.random());
      return;
    }

    this.setRandomNums();

    this.gameRun = true;
    this.rand = this.selectedSquares[this.randIndex];

    this.interval = setInterval(() => {
      if (this.squares[this.rand].color === 'yellow') {
        this.squares[this.rand].color = 'red';
        this.playerPCcount += 1;
        this.clearSruares(this.intervalTime, this.squares, this.selectedSquares, this.randIndex);
      }
      this.rand = this.selectedSquares[this.randIndex += 1];
      this.squares[this.rand].color = 'yellow';

      if (this.playerPCcount === winnerNum || this.playerUsercount === winnerNum) {
        this.finishGame();
      }
    }, this.intervalTime);
  }

  setRandomNums() {
    const nums = this.squareService.createArray();
      let i = nums.length,
       j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      this.selectedSquares.push(nums[j]);
      nums.splice(j, 1);
    }
  }

  finishGame() {
    this.gameFinish = true;
    this.gameRun = false;
    this.selectedSquares = [];
    clearInterval(this.interval);
  }
}
