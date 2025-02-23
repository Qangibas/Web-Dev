import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, categories, Product, products } from './app.interface';
import { ProductListComponent } from './product-list.component';
import {ProductItemComponent} from './product-item.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="categories-container">
      <div
        *ngFor="let category of categories"
        class="category-card"
        [class.active]="selectedCategory?.id === category.id"
        (click)="selectCategory(category)">
        <h2>{{ category.name }}</h2>
      </div>
    </div>

    <div class="products-container">
      <app-product-item
        *ngFor="let product of filteredProducts"
        [product]="product"
        (delete)="deleteProduct($event)"
        (like)="incrementLikes($event)"
        (shareWhatsApp)="shareOnWhatsApp($event)"
        (shareTelegram)="shareOnTelegram($event)"
      ></app-product-item>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, ProductItemComponent]
})
export class AppComponent {
  categories: Category[] = categories;
  products: Product[] = products;
  selectedCategory?: Category;

  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return this.products;
    return this.products.filter(p => p.categoryId === this.selectedCategory?.id);
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }

  incrementLikes(productId: number): void {
    this.products = this.products.map(p =>
      p.id === productId ? { ...p, likes: (p.likes || 0) + 1 } : p
    );
  }

  shareOnWhatsApp(product: Product): void {
    const text = encodeURIComponent(`${product.name}\n${product.kaspiLink}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(product: Product): void {
    const text = encodeURIComponent(`Check out this product: ${product.name}\n${product.kaspiLink}`);
    window.open(`https://t.me/share/url?url=${product.kaspiLink}&text=${text}`, '_blank');
  }
}
