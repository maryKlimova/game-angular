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

    this.gameRun = true;
    this.rand = this.checkRandom(this.random(0, 99));
    this.selectedSquares.push(this.rand);

    this.interval = setInterval(() => {
      if (this.squares[this.rand].color === 'yellow') {
        this.squares[this.rand].color = 'red';
        this.playerPCcount += 1;
      }
      this.rand = this.checkRandom(this.random(0, 99));
      this.selectedSquares.push(this.rand);
      this.squares[this.rand].color = 'yellow';

      if (this.playerPCcount === winnerNum || this.playerUsercount === winnerNum) {
        this.finishGame();
      }
    }, this.intervalTime);
  }


  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  checkRandom(num) {
     return (this.selectedSquares.some(el => el === num)) ? this.checkRandom(this.random(0, 99)) : num;
  }

  finishGame() {
    this.gameFinish = true;
    this.gameRun = false;
    this.selectedSquares = [];
    clearInterval(this.interval);
  }
}
