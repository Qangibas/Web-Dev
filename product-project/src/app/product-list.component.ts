import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Category } from './app.interface';
import { ProductItemComponent } from './product-item.component';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="products-container">
      <app-product-item
        *ngFor="let product of filteredProducts"
        [product]="product"
        (delete)="handleDelete($event)"
        (like)="handleLike($event)"
        (shareWhatsApp)="shareWhatsApp.emit($event)"
        (shareTelegram)="shareTelegram.emit($event)"
      ></app-product-item>
    </div>
  `,
  standalone: true,
  imports: [CommonModule, ProductItemComponent]
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() selectedCategory?: Category;
  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();
  @Output() shareWhatsApp = new EventEmitter<Product>();
  @Output() shareTelegram = new EventEmitter<Product>();

  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return this.products;
    return this.products.filter(p => p.categoryId === this.selectedCategory?.id);
  }

  handleDelete(productId: number): void {
    this.delete.emit(productId);
  }

  handleLike(productId: number): void {
    this.like.emit(productId);
  }
}
