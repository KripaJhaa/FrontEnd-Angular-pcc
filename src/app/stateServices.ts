import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateList } from './stateModel';
import { CityList } from './stateModel';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class stateService {


    constructor(private http: HttpClient) { }

    getSateList() {
        return this.http.post<string[]>('http://localhost:8802/state', httpOptions);
    }
    getCityList(state: string) {
        console.log('posting city')
        return this.http.post<CityList>('http://localhost:8802/cities', { state }, httpOptions);
    }
}

