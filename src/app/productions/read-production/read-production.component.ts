import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Production } from '../productions';
import { ProductionService } from '../productions.service';

@Component({
  selector: 'app-read-production',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './read-production.component.html',
  styleUrls: ['./read-production.component.css']
})
export class ReadProductionComponent implements OnInit {
  productions: Array<Production> = [];

  constructor(private routerPath: Router, private productionService: ProductionService) { }

  ngOnInit() {
    this.obtenerProductions();
  }

  obtenerProductions() {
    this.productionService.obtenerProductions().subscribe(productions => {
      this.productions = productions;
      console.log(this.productions);
    });
  }

  onEditarNavigate(id: number) {
    this.routerPath.navigate([`update-info/${id}`]);
  }
}
