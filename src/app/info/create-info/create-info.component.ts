import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../info.service';
import { Info } from '../info';

@Component({
  selector: 'app-create-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-info.component.html',
  styleUrls: ['./create-info.component.css']
})

export class CreateInfoComponent implements OnInit {
  infoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private infoService: InfoService,
  ) { }

  ngOnInit() {
    this.infoForm = this.formBuilder.group({
      title: ['', Validators.required, Validators.minLength(3)],
      description: ['', Validators.required, Validators.minLength(3)],
      poster: ['', Validators.required],
      genre: ['', Validators.required, Validators.minLength(3)],
      duration: ['', Validators.required],
      director: ['', Validators.required],
      country: ['', Validators.required],
      cast: ['', Validators.required],
      release: ['', Validators.required],
      trailer: ['', Validators.required],
      platform: ['', Validators.required],
    });
  }

  createInfo(info: Info): void {
    this.infoService.createInfo(info).subscribe((infoCreated) => {
      alert('Info created successfully')
      this.infoForm.reset();   
    },
    );
  }
}



