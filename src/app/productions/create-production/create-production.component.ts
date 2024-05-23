import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductionService } from '../productions.service';
import { Production } from '../productions';

@Component({
  selector: 'app-create-production',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-production.component.html',
  styleUrl: './create-production.component.css'
})

export class CreateProductionComponent implements OnInit {
  productionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productionService: ProductionService,
  ) { }

  ngOnInit() {
    this.productionForm = this.formBuilder.group({
      title: ['', Validators.required, Validators.minLength(3)],
      poster: ['', Validators.required],
      genre: ['', Validators.required, Validators.minLength(3)],
    });
  }

  createProduction(production: Production): void {
    this.productionService.createProduction(production).subscribe((productionCreated) => {
      alert('Production created successfully')
      this.productionForm.reset();   
    },
    );
  }
}



