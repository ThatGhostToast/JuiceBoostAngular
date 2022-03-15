import { Component, OnInit } from '@angular/core';
import { Juice } from '../models/Juice';
import { JuiceServiceService } from '../service/juice-service.service';

@Component({
  selector: 'app-create-Juice',
  templateUrl: './create-Juice.component.html',
  styleUrls: ['./create-Juice.component.css']
})
export class CreateJuiceComponent implements OnInit {
  name = '';
  ingredients = '';
  benefits = '';
  htm = '';
  imageName = '';

  selectedImage = '';
  images: string[] = [
    'appleJuice.png',
    'orangeJuice.png',
    'grapefruitJuice.png',
    'strawberrySmoothie.png',
    'kiwiJuice.png',
    'starfruitJuice.png'
  ];
  
  constructor(private service: JuiceServiceService) {}

  ngOnInit(): void {}
  
  reset() {
    console.log('Resetting info');
    this.name = '';
    this.ingredients = '';
    this.benefits = '';
    this.htm = '';
    this.selectedImage = '';
  }

  onSubmit() {
    console.log('this.name', this.name);
    console.log('this.ingredients', this.ingredients);
    console.log('this.benefits', this.benefits);
    console.log('this.htm', this.htm);
    console.log('this.selectedImage', this.selectedImage);

    this.service.createJuice(
      new Juice(
        -1,
        this.name,
        this.ingredients,
        this.benefits,
        this.htm,
        this.selectedImage,
      ),
      null
    );
    
    location.reload();
  }

}
