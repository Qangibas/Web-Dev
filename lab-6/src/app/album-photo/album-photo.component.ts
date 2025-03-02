// album-photos.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo, AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  standalone: false,
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = []; // 1. Объявлено свойство photos
  albumId: number = 0;  // 2. Добавлено свойство albumId

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    // 3. Получение ID альбома из URL
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPhotos();
  }

  // 4. Метод для загрузки фото
  loadPhotos(): void {
    this.albumsService.getPhotosByAlbumId(this.albumId)
      .subscribe(photos => this.photos = photos);
  }

  // 5. Метод для возврата назад
  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
