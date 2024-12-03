import { Routes } from '@angular/router';
import { AboutComponent } from './componant/about/about.component';
import { ProductComponent } from './componant/product/product.component';
import { ContactComponent } from './componant/contact/contact.component';
import { ProfileComponent } from './componant/profile/profile.component';
import { DashboardComponent } from './componant/dashboard/dashboard.component';
import { BlogComponent } from './componant/blog/blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './componant/cart/cart.component';
import { ObserverComponent } from './componant/observer/observer.component';
import { ApiComponent } from './componant/api/api.component';
import { DynamicProductsComponent } from './componant/dynamic-products/dynamic-products.component';
import { AddProductComponent } from './componant/add-product/add-product.component';

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
        path:'cart',
        component:CartComponent,
        title:'Cart',
    },

    {
        path:'observer',
        component:ObserverComponent,
        title:'Observer',
    },

    {
        path:'dynamic-products',
        component:DynamicProductsComponent,
        title:'Dynamic Products',
    },

    {
        path:'add-product',
        component:AddProductComponent,
        title:' Add Product',
    },

    {
        path:'api',
        component:ApiComponent,
        title:'Api',
    },

    {
        path:'**',
        component:NotFoundComponent,
        title:"Not Found",
    },
];
