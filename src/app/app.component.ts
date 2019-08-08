import {Component, OnInit, Input} from '@angular/core';
import {MemoryService} from './memory/memory.service';
import {SquareService} from './square/square.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private memory: MemoryService, private squares: SquareService) {

  }


  ngOnInit() {

  }

}
