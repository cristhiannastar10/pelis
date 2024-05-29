import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { InfoService } from '../info.service';


@Component({
  selector: 'app-read-info',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './read-info.component.html',
  styleUrl: './read-info.component.css'
})
export class ReadInfoComponent implements OnInit{
  info:Array<Info>=[]
  constructor(private routerPath: Router, private infoservice:InfoService) {

  }
  ngOnInit(){
    this.ObtenerInfo();

  }
  ObtenerInfo(){
    this.infoservice.obtenerInfo().subscribe(vs=>{
      this.info=vs;
      console.log(this.info)
    });
  }
  onEditarNavigate(id:number){
    this.routerPath.navigate([`/updateInfo/${id}`])
  }


}
