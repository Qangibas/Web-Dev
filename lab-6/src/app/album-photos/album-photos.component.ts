
import { Component } from '@angular/core';
import {Photos} from "../photos";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  standalone: false,
  styleUrls: ['./photos.component.css']
})
export class AlbumPhotosComponent {
  photos:Photos[] = [];
  load:boolean;
  constructor(private albumsService:AlbumsService, private route:ActivatedRoute) {
    this.load = true;
  }
  ngOnInit(){
    this.getId();
  }
  getId(){
    this.route.paramMap.subscribe((params)=>{
      const id = Number(params.get('id'));
      this.load = false;
      this.albumsService.getPhotos(id).subscribe((photos)=>{this.photos = photos; this.load = true;});
    })
  }
}
