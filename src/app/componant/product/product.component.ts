import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  products = [
    { id: 1, name: "Wireless Headphones", description: "Noise-canceling wireless headphones.", price: 120.99, category: "Electronics", stock: 50, rating: 4.5 },
    { id: 2, name: "Smart Watch", description: "Stylish smart watch with fitness tracking.", price: 85.75, category: "Accessories", stock: 100, rating: 4.2 },
    { id: 3, name: "Bluetooth Speaker", description: "Portable speaker with powerful sound.", price: 45.99, category: "Audio", stock: 200, rating: 4.7 },
    { id: 4, name: "Running Shoes", description: "Durable running shoes for all terrains.", price: 70.50, category: "Footwear", stock: 120, rating: 4.4 },
    { id: 5, name: "Yoga Mat", description: "Eco-friendly, non-slip yoga mat.", price: 25.99, category: "Fitness", stock: 300, rating: 4.3 },
    { id: 6, name: "Laptop Stand", description: "Adjustable stand for laptops and tablets.", price: 35.99, category: "Office Supplies", stock: 150, rating: 4.6 },
    { id: 7, name: "Water Bottle", description: "Stainless steel, insulated water bottle.", price: 19.99, category: "Fitness", stock: 500, rating: 4.8 },
    { id: 8, name: "Backpack", description: "Spacious, waterproof backpack.", price: 59.99, category: "Accessories", stock: 220, rating: 4.5 },
    { id: 9, name: "Gaming Mouse", description: "Ergonomic gaming mouse with RGB lighting.", price: 29.99, category: "Electronics", stock: 400, rating: 4.7 },
    { id: 10, name: "Coffee Maker", description: "Automatic coffee maker with timer.", price: 89.99, category: "Home Appliances", stock: 80, rating: 4.4 },
    { id: 11, name: "Electric Kettle", description: "Fast-boil electric kettle.", price: 24.99, category: "Home Appliances", stock: 300, rating: 4.6 },
    { id: 12, name: "Wireless Charger", description: "Fast wireless charger for smartphones.", price: 15.99, category: "Electronics", stock: 250, rating: 4.3 },
    { id: 13, name: "Digital Camera", description: "Compact digital camera with 20MP.", price: 210.50, category: "Photography", stock: 90, rating: 4.5 },
    { id: 14, name: "Smart Thermostat", description: "Energy-saving smart thermostat.", price: 130.00, category: "Smart Home", stock: 60, rating: 4.2 },
    { id: 15, name: "Robot Vacuum", description: "Automatic robot vacuum cleaner.", price: 180.00, category: "Home Appliances", stock: 40, rating: 4.6 },
    { id: 16, name: "Camping Tent", description: "Waterproof tent for outdoor camping.", price: 75.00, category: "Outdoors", stock: 75, rating: 4.4 },
    { id: 17, name: "Portable Projector", description: "Mini projector for movies and presentations.", price: 99.99, category: "Electronics", stock: 55, rating: 4.3 },
    { id: 18, name: "Cooking Set", description: "Non-stick cooking set with utensils.", price: 49.99, category: "Kitchen", stock: 200, rating: 4.5 },
    { id: 19, name: "Fitness Tracker", description: "Health monitoring fitness tracker.", price: 39.99, category: "Fitness", stock: 320, rating: 4.4 },
    { id: 20, name: "Electric Toothbrush", description: "Rechargeable electric toothbrush.", price: 34.99, category: "Personal Care", stock: 180, rating: 4.7 }

];




}
