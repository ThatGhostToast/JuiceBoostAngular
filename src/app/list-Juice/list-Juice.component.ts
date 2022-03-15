import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juice } from '../models/Juice';
import { JuiceServiceService } from '../service/juice-service.service';

@Component({
  selector: 'app-list-Juice',
  templateUrl: './list-Juice.component.html',
  styleUrls: ['./list-Juice.component.css'],
})
export class ListJuiceComponent implements OnInit {
  juices: Juice[] = [];
  selectedJuice: Juice;
  totalJuices: Juice;
  constructor(
    private route: ActivatedRoute,
    private service: JuiceServiceService
  ) {}

  ngOnInit() {
    this.service.getJuices((juices: Juice[]) => {
      this.juices = juices;
      console.log(juices);
    });
  }

  public onSelectJuice(juice: Juice) {
    this.selectedJuice = juice;
  }
}
