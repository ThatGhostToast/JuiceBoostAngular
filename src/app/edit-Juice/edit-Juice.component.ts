import { Component, Input, OnInit } from '@angular/core';
import { JuiceServiceService } from '../service/juice-service.service';
import { Juice } from '../models/Juice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-Juice',
  templateUrl: './edit-Juice.component.html',
  styleUrls: ['./edit-Juice.component.css']
})
export class EditJuiceComponent implements OnInit {
  public newName: string = "";
  newJuice: Juice;

  newIngreds: string;

  juiceId: number;
  juiceName: string;

  constructor(private service: JuiceServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
     params => {
      this.juiceId = parseInt(params.get('id'));
      this.juiceName = params.get('name');
    });
    this.service.getJuice(this.juiceId, (juice: Juice) => {
      this.newJuice = juice;
      console.log(this.newJuice);
    });
  }

  onSubmit(){
    this.newJuice.Name = this.newName;
    this.newJuice.Ingredients = this.newIngreds;
    console.log(this.newJuice);
    this.service.updateJuice(this.newJuice, (juice : Juice) => {
      this.newJuice = juice;
    });

    window.location.href = "http://localhost:4200";
  }

}
