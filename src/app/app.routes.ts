import { Routes } from '@angular/router';
import { AboutComponent } from './componant/about/about.component';
import { ProductComponent } from './componant/product/product.component';
import { ContactComponent } from './componant/contact/contact.component';
import { ProfileComponent } from './componant/profile/profile.component';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { BlogComponent } from './componant/blog/blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {
        path:'',
        component:ProductComponent,
        title:"Home",
    },

    {
        path:'about',
       component:AboutComponent,
       title:'About',
    },

    {
        path:'contact',
        component:ContactComponent,
        title:'Contact',
    },

    {
        path:'profile',
        component:ProfileComponent,
        title:'Profile',
    },

    {
        path:'product-details/:id',
        component:ProductDetailsComponent,
        title:'Product Details',
    },


    {
        path:'dashboard',
        component:DashboardComponent,
        title:'Dashboard',
    },

    
    {
        path:'blog',
        component:BlogComponent,
        title:'Blog',
    },

    {
        path:'**',
        component:NotFoundComponent,
        title:"Not Found",
    },
];
