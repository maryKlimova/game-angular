import {SquareService} from '../square/square.service';


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

  constructor(private squareService: SquareService) {
    this.setField();
  }


  setField() {
    this.squares = this.squareService.setSquares();
    this.playerPCcount = 0;
    this.playerUsercount = 0;
    this.intervalTime = 0;
    this.gameFinish = false;
  }

  newGame() {
    (!this.intervalTime) ?
      this.intervalError = true :
      this.intervalError = false;

    if (this.gameRun || this.intervalError) {
      return;
    }

    this.setRandomNums();

    this.gameRun = true;
    this.rand = this.selectedSquares[this.randIndex];

    this.interval = setInterval(() => {
      if (this.squares[this.rand].color === 'yellow') {
        this.squares[this.rand].color = 'red';
        this.playerPCcount += 1;
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
