import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from '../../node_modules/rxjs';
import { Observable } from 'rxjs';
import { stateService } from './stateServices';
import { StateList } from './stateModel';
import { CityList } from './stateModel';
import { Model } from './stateModel';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'FE-PCC-check';
  typeOfdocuments = ["Aadhar_card", "Voter_Card", "Passport", "ration_Card", "Electricity_Bill"]
  states: StateList[];
  city: CityList;
  model = new Model();
  state: string
  constructor(private stateService: stateService) { }


  async getStates() {
    if (!this.states) {
      await this.stateService.getSateList().subscribe((res) => {
        this.states = res;
      })
    }
  }
  async getCity() {
    console.log(this.model.state)
    if (!this.model && this.model.state) {
      this.state = this.model.state;
      await this.stateService.getCityList(this.state).subscribe((res) => {
        this.city = res;
        console.log("asd" + res)
      })
    }
  }


}


