import { Component, Input, OnInit } from '@angular/core';
import { Juice } from '../models/Juice';
import { JuiceServiceService } from '../service/juice-service.service';

@Component({
  selector: 'app-display-Juice',
  templateUrl: './display-Juice.component.html',
  styleUrls: ['./display-Juice.component.css']
})
export class DisplayJuiceComponent implements OnInit {
  @Input() juice: Juice;
  juices: Juice[] = [];

  constructor(private service: JuiceServiceService) { }

  ngOnInit(){
    this.service.getJuices((juices: Juice[]) => {
      this.juices = juices;
      console.log(juices);
    });
  }

}
