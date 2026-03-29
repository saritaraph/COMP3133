import { Component } from '@angular/core';
import { Heros } from './heros/heros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Heros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Tour of Heroes';
}