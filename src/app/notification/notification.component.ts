import { Component, OnInit } from '@angular/core';
import {MemoryService} from '../memory/memory.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private memory: MemoryService) { }

  ngOnInit() {
  }

}
