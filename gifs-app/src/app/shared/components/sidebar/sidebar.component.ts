import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  //INYECTAR SERVICIO
  constructor(private gifsService: GifsService) { }

  ngOnInit() {
  }

  //PARA USARSE EN UN COMPONENTE DEBE SER GET
  get tags(){
    return this.gifsService.tagsHistory;
  }

}
