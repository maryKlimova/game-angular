import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {MemoryService} from '../memory/memory.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [
    trigger('rotateNum', [
      state('checked', style ({
        transform: 'scale(0.6)'
      })),
      state('unchecked', style({
        transform: 'scale(1)'
      })),
      transition('unchecked <=> checked', [
        animate('0.25s')
      ]),
    ]),
  ]
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() player;
  @Input() scoreUser;
  @Input() scorePC;

  state = 'unchecked';
  userState =  'unchecked';
  constructor(private memory: MemoryService) {
  }

  ngOnInit() {
  }
  onDone(e) {
    this.state = 'unchecked';
    this.userState = 'unchecked';
  }
  ngOnChanges(changes: SimpleChanges) {
    for(let propName in changes) {
      let chng = changes[propName];
      if (propName === 'scorePC' && chng.currentValue > 0) {
        this.state =  'checked';
      } else if (propName === 'scoreUser' && chng.currentValue > 0) {
        this.userState = 'checked';
      }
    }
  }
}
