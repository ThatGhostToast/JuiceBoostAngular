import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Juice } from '../models/Juice';
import { JuiceServiceService } from '../service/juice-service.service';

@Component({
  selector: 'app-delete-Juice',
  templateUrl: './delete-Juice.component.html',
  styleUrls: ['./delete-Juice.component.css']
})
export class DeleteJuiceComponent implements OnInit {
  juice: Juice;

  juiceId: number;
  juiceName: string;

  constructor(private service: JuiceServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
     params => {
      this.juiceName = params.get('name');
      this.juiceId = parseInt(params.get('id'));
    });
  }

  onSubmit(){
    this.service.deleteJuice(this.juiceId, this.juiceName, console.log);
    alert("Juice deleted.");
    window.location.href = "http://localhost:4200";
  }
}
