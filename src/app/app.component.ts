import { Component, OnInit } from '@angular/core';
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


export class AppComponent implements OnInit {
  title = 'FE-PCC-check';
  typeOfdocuments = ["Aadhar_card", "Voter_Card", "Passport", "ration_Card", "Electricity_Bill"];
  statesObj = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Karnatka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

  cityObj = new CityList();
  model = new Model();
  cityList: string[];

  ngOnInit() { }

  constructor(private stateService: stateService) { }

  async getCity() {
    if (this.model && this.model.state) {
      await this.stateService.getCityList(this.model.state).subscribe((res) => {
        this.cityObj = res;
      })
    }
  }


}


