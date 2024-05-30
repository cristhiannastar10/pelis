import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { Production } from '../productions';
import { ProductionsService } from '../productions.service';

@Component({
  selector: 'app-read-production',
  standalone: true,
  imports: [NgFor, RouterModule, HttpClientModule, CommonModule],
  templateUrl: './read-production.component.html',
  styleUrls: ['./read-production.component.css']
})
export class ReadProductionComponent implements OnInit {
  productions: Array<Production> = [];

  constructor(private router: Router, private productionService: ProductionsService) { }

  ngOnInit() {
    this.obtenerProductions();
  }

  obtenerProductions() {
    this.productionService.obtenerInfo().subscribe(productions => {
      this.productions = productions;
      console.log(this.productions);
    });
  }

  onMirarNavigate() {
    this.router.navigate(['/leer-info']);
  }
}
