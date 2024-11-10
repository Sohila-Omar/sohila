import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private router:Router){}


 handleRoute( routerPath:String){
 this.router.navigate([routerPath])
 } 
}
