import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit , OnDestroy, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
  }

  ngOnInit(): void {
    console.log("init");
  }
  ngOnDestroy(): void {
    console.log("destroy");
    
  
  }

}
