import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componant/header/header.component';
import { NavbarComponent } from './componant/navbar/navbar.component';
import { ProductComponent } from './componant/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,HeaderComponent,NavbarComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
