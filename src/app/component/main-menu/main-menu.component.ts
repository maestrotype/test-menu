import {Component, Injectable, OnInit} from '@angular/core';
import { StorageService } from '../../services/storage-service.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {
  close: boolean = false;
  rotate: boolean = false;
  constructor( private storageService: StorageService ) { }

  ngOnInit() {
    this.close = this.storageService.get('close-menu');
    this.rotate = this.storageService.get('rotate-menu');
  }

  collapsMenu() {
    this.close = !this.close;
    this.rotate = !this.rotate;
    this.storageService.set('close-menu', this.close);
    this.storageService.set('rotate-menu', this.rotate);
}

}
