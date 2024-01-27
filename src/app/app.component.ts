import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { DRIVERS } from '../db-data';
import { Driver } from './module/klasa';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DriverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oweb';
  ilijana = DRIVERS[1];
  anaj = DRIVERS[2];
  anai =DRIVERS[3];
  vozaci=DRIVERS;
  appKlik(suzi:Driver)
  {
    console.log("APP e kliknat",suzi);
  }
}
