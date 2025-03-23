
import { Component } from '@angular/core';
import {Albums} from '../albums';
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  standalone: false,
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  albums:Albums[] = [];
  newAlbum:Albums;
  load:boolean;
  constructor(private albumsService:AlbumsService) {
    this.newAlbum = {} as Albums;
    this.load = true;
  }
  ngOnInit(){
    this.load = false;
    this.albumsService.getAlbums().subscribe((albums)=>{this.albums=albums; this.load = true;});
  }

  addAlbum(){
    this.albumsService.addAlbum(this.newAlbum).subscribe((album)=>{this.albums.push(album);});
    this.newAlbum = {} as Albums;
  }

  deleteAlbum(id:number){
    this.albumsService.deleteAlbum(id).subscribe();
    this.albums = this.albums.filter(album => album.id != id);
  }
}
