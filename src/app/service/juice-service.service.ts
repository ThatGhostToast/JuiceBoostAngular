import { Injectable } from '@angular/core';
import exampledata from '../../data/sample-music-data.json';
import { Juice } from '../models/Juice';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JuiceServiceService {
  juices: Juice[] = [];
  hostname: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    // Create a list of Artists
    this.juices.push(new Juice(0, 'Kiwi Juice', 'Kiwi', 'Tastes Good', 'Squeeze Kiwi', 'pic5.png'));

    // Loop over the JSON Music Data and create a list of Albums and its Tracks
    for (let x = 0; x < exampledata.length; ++x) {
      if (exampledata[x].name == 'Kiwi Juice') {
        this.juices.push(
          new Juice(
            exampledata[x].id,
            exampledata[x].name,
            exampledata[x].ingredients,
            exampledata[x].benefits,
            exampledata[x].htm,
            exampledata[x].imageName,
          )
        );
      }
    }
  }

  public getJuices(callback:any) {
    this.http
      .get<Juice[]>(this.hostname + '/juice')
      .subscribe((data) => {
        let juices: Juice[] = [];
        for (let x = 0; x < data.length; ++x) {
          juices.push(
            new Juice(
              data[x]['id'],
              data[x]['name'],
              data[x]['ingredients'],
              data[x]['benefits'],
              data[x]['htm'],
              data[x]['imageName'],
            )
          );
        }
        callback(juices);
      });
  }

  public getJuice(id:number, callback:any) {
    this.http
      .get<Juice>(this.hostname + '/juices/search/juice/' + id)
      .subscribe((data) => {
        let juice: Juice = new Juice(
          data['id'],
          data['name'],
          data['ingredients'],
          data['benefits'],
          data['htm'],
          data['imageName']
        );
        callback(juice);
      });
  }

  public createJuice(juice:Juice, callback:any) {
    this.http
      .post<Juice>(this.hostname + '/juice', juice)
      .subscribe((data) => {
        callback(data);
      });
  }

  public updateJuice(juice:Juice, callback:any) {
    this.http.put<Juice>(this.hostname + '/juice', juice).subscribe((data) => {
      callback(data);
    });
  }

  public deleteJuice(id:number, name:string, callback:any) {
    this.http
      .delete(this.hostname + '/juice/' + id)
      .subscribe((data) => {
        callback(data);
      });
  }
}