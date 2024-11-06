import { Component, Input } from '@angular/core';
import { GreetComponent } from '../../models/greet/greet.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [GreetComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
 users:string[]=["sohila","Aya","Habiba"]
 
}
