import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { NotificationComponent } from './notification/notification.component';
import { SquareComponent } from './square/square.component';
import {MemoryService} from './memory/memory.service';
import {SquareService} from './square/square.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NotificationComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MemoryService, SquareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
