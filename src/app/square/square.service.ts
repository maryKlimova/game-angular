import {Injectable} from '@angular/core';
import {Square} from './square';

@Injectable({
  providedIn: 'root'
})
export class SquareService {
  squaresAmount = (new Array(100)).fill(1).map((a, i) => i);

  squareClasses = {
    blue: true,
    yellow: false,
    green: false,
    red: false
  };

  constructor() {
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
