import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarnav',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sidebarnav.component.html',
  styleUrl: './sidebarnav.component.css'
})
export class SidebarnavComponent implements OnInit{


  visibleSidebar1: boolean = false;
  sidebarItems: { label: string; route: string; isNew?: boolean }[] = [
    { label: 'Home', route: '/index'},
    { label: 'Any to Any Converter', route: '/anytoany' },
    { label: 'Instagram Post generator', route: '/instagrampostgenerator' },
  ];
  

  constructor() {}

  ngOnInit(): void {
      
  }

}