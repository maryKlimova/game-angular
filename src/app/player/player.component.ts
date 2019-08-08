import { Component, OnInit, Input } from '@angular/core';
import {MemoryService} from '../memory/memory.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player;
  constructor(private memory: MemoryService) {
  }

  ngOnInit() {
  }


}
