import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Product } from './app.interface';

@Component({
  selector: 'app-product-item',
  template: `
    <div class="product-card">
      <div class="product-image-container">
        <img [src]="getDisplayedImage()" [alt]="product.name" class="main-image">
      </div>

      <div *ngIf="product.images?.length" class="image-gallery">
        <div
          *ngFor="let image of product.images; let i = index"
          class="thumbnail"
          [class.active]="selectedImageIndex === i"
          (click)="selectImage(i)">
          <img [src]="image" [alt]="product.name">
        </div>
      </div>

      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p class="description">{{ product.description }}</p>
        <div class="rating">
          <span class="stars">
            <span class="filled" [style.width.%]="(product.rating / 5) * 100"></span>
          </span>
          <span class="rating-value">{{ product.rating }}/5</span>
        </div>
        <p class="price">{{ product.price | number }} ₸</p>
        <p class="likes">Likes: {{ product.likes || 0 }}</p>
      </div>

      <div class="product-actions">
        <div class="like-delete-btn">
          <button (click)="handleLike()" class="l_d-btn like-btn">
            Like
          </button>
          <button (click)="handleDelete()" class="l_d-btn delete-btn">
            Delete
          </button>
        </div>
        <a [href]="product.kaspiLink" target="_blank" class="kaspi-link">
          View on Kaspi.kz
        </a>
        <div class="share-buttons">
          <button (click)="shareWhatsApp.emit(product)" class="share-btn whatsapp">
            Share on WhatsApp
          </button>
          <button (click)="shareTelegram.emit(product)" class="share-btn telegram">
            Share on Telegram
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, DecimalPipe]
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();
  @Output() shareWhatsApp = new EventEmitter<Product>();
  @Output() shareTelegram = new EventEmitter<Product>();

  selectedImageIndex = 0;

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  getDisplayedImage(): string {
    return this.product.images?.[this.selectedImageIndex] || this.product.mainImage;
  }

  handleDelete(): void {
    this.delete.emit(this.product.id);
  }

  handleLike(): void {
    this.like.emit(this.product.id);
  }
}
