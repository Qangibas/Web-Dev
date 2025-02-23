import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product, products, Category, categories } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, DecimalPipe],
  standalone: true
})
export class AppComponent {
  products: Product[] = products;
  categories: Category[] = categories;
  selectedCategory?: Category;
  selectedImageIndexes: { [key: number]: number } = {};

  deleteProduct(productId: number): void {
    this.products = this.products.filter(function (product){
      return product.id !== productId;
    })
  }

  shareOnWhatsApp(product: Product): void {
    const text = encodeURIComponent(`${product.name}\n${product.kaspiLink}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(product: Product): void {
    const text = encodeURIComponent(`Check out this product: ${product.name}\n${product.kaspiLink}`);
    window.open(`https://t.me/share/url?url=${product.kaspiLink}&text=${text}`, '_blank');
  }

  selectImage(productId: number, index: number): void {
    this.selectedImageIndexes[productId] = index;
  }

  getDisplayedImage(product: Product): string {
    const index = this.selectedImageIndexes[product.id] || 0;
    return product.images?.[index] || product.mainImage;
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  incrementLikes(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes = (product.likes || 0) + 1;
    }
  }

  get filteredProducts(): Product[] {
    if (!this.selectedCategory) {
      return this.products;
    }
    return this.products.filter(p => p.categoryId === this.selectedCategory?.id);
  }
}
