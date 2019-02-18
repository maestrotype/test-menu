import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage-service.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  close: boolean = false;
  rotate: boolean = false;
  constructor( private storageService: StorageService) { }

  ngOnInit() {
    this.close = this.storageService.get('close-submenu');
    this.rotate = this.storageService.get('rotate-submenu');
  }

  collapsMenu() {
    this.close = !this.close;
    this.rotate = !this.rotate;
    this.storageService.set('close-submenu', this.close);
    this.storageService.set('rotate-submenu', this.rotate);
  }

}
