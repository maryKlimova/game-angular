import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { NotificationComponent } from './notification/notification.component';
import { SquareComponent } from './square/square.component';
import {MemoryService} from './memory/memory.service';
import {SquareService} from './square/square.service';
import { FieldComponent } from './field/field.component';


const appRoutes: Routes = [
  { path: '', component: FieldComponent, pathMatch: 'full' },
  { path: 'game/:id', component: FieldComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NotificationComponent,
    SquareComponent,
    FieldComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MemoryService, SquareService, { provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})



export class AppModule { }
