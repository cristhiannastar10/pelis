import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, CommonModule } from '@angular/common';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-read-info',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule, HttpClientModule],
  templateUrl: './read-info.component.html',
  styleUrls: ['./read-info.component.css']  // Corrected property name
})
export class ReadInfoComponent implements OnInit {
  info: Array<Info> = [];

  constructor(private router: Router, private infoService: InfoService) {}

  ngOnInit() {
    this.obtenerInfo();
  }

  obtenerInfo() {
    this.infoService.obtenerInfo().subscribe(vs => {
      this.info = vs;
      console.log(this.info);  // Ensure data is being logged correctly
    });
  }

  onEditarNavigate(id: number) {
    this.router.navigate([`/updateInfo/${id}`]);
  }

  onEliminarNavigate(id: number) {
    this.router.navigate([`/deleteInfo/${id}`]);
  }
}
