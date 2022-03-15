import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Juice Boost!';
  version = "1.0";

  constructor(private router: Router){

  }

  public displayVersion()
  {
    //alert("Version " + this.version);
    alert("Version: 1.0");
  }

  public displayJuiceList()
  {
    console.log("Inside display artist list");
    this.router.navigate(['list-juice'], { queryParams : { data: new Date()}});
  }
}
