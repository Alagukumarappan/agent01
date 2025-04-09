import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AI-Frontend';

  constructor() {}

  ngOnInit(): void {
  }  
  
}
