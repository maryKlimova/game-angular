import {Component, OnInit, Input} from '@angular/core';
import {MemoryService} from '../memory/memory.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() square;

  constructor(private memory: MemoryService) {
  }

  ngOnInit() {
  }

  detectSquare() {
    if (this.memory.squares[this.square.id].color !== 'yellow') {
      return;
    }
    this.memory.squares[this.square.id].color = 'green';
    this.memory.playerUsercount += 1;
    this.memory.clearSruares(this.memory.intervalTime, this.memory.squares, this.memory.selectedSquares, this.memory.randIndex);
  }
}
