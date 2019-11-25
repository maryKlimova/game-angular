import {Component, OnInit} from '@angular/core';
import {MemoryService} from '../memory/memory.service';
import {SquareService} from '../square/square.service';


@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  constructor(private memory: MemoryService, private squares: SquareService) {

  }

  ngOnInit() {
  }

}
