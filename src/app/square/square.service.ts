import {Square} from './square';

export class SquareService {
  squaresAmount;

  squareClasses = {
    blue: true,
    yellow: false,
    green: false,
    red: false
  };

  constructor() {
    this.squaresAmount = this.createArray();
  }

  createArray() {
    return (new Array(100)).fill(1).map((a, i) => i)
  }

  setSquares() {
    return this.getSquares();
  }
  getSquares = () => {
    return this.squaresAmount.map(id => {
      return new Square(id, 'blue');
    });
  }
}
