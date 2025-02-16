import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product, products } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, DecimalPipe],
  standalone: true
})
export class AppComponent {
  products: Product[] = products;
  selectedImageIndexes: { [key: number]: number } = {};

  shareOnWhatsApp(product: Product): void {
    const text = encodeURIComponent(`Check out this product: ${product.name}\n${product.kaspiLink}`);
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
}
