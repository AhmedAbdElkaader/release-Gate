import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  EntityID = null
  constructor(private http: HttpClient) { }

  private subject = new Subject<any>();

  getCulturalTreasure(langId, count, CurrentPage) {
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/GetAllBookCulturalTreasure/${langId}?Count=${count}&CurrentPage=${CurrentPage}&EntityID=${this.EntityID}`)
  }

  getCulturalTreasureDet(langId, id) {
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/GetCulturalTreasureDetails/${langId}/${id}/?EntityID=${this.EntityID}`)
  }

  getNumbersUrl(ItemId) {
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/IncreaseReadNumber?ItemId=${ItemId}`)
  }

  searchCultureBooks(langId, Query ,Count ,CurrentPage) {
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/GetAllBooksSearchByTitle/${langId}?Query=${Query}&Count=${Count}&CurrentPage=${CurrentPage}&EntityID=${this.EntityID}`)
  }
  searchCultureVideos(langId, Query ,Count ,CurrentPage) {
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/GetAllVediosSearchByTitle/${langId}?Query=${Query}&Count=${Count}&CurrentPage=${CurrentPage}&EntityID=${this.EntityID}`)
  }

  getEntits(langId, count, CurrentPage) {
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/GetAllEntitiesSeriesCulturalTreasure/${langId}?Count=${count}&CurrentPage=${CurrentPage}`)
  }

  getDataAfterFilter(langId, count, CurrentPage, arrEnit, arrSer) {
    let obj = {
      EntitiesIds: arrEnit,
      SeriesIds: arrSer
    }
    return this.http.post(`${environment.baseUrl}/api/CulturalTreasure/GetAllCulturalTreasureByEntitiesorSeries/${langId}?Count=${count}&CurrentPage=${CurrentPage}`, obj).subscribe(res => {
      console.log(res)
    })
  }

  //videos
  getVideos(langId, count, CurrentPage) {
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/GetAllVediosCulturalTreasure/${langId}?Count=${count}&CurrentPage=${CurrentPage}&EntityID=${this.EntityID}`)
  }



  getFrom() {
    return this.http.get(`${environment.baseUrl}/api/CulturalTreasure/GetSpecialBookForm/1`)
  }

  setForm(data,BookId) {
    return this.http.post(`${environment.baseUrl}/api/CulturalTreasure/PostSpecialBookForm?BookId=${BookId}`, data).subscribe(res => {
      console.log(res)
      this.sendRes(res)
    })
  }


  sendRes(events) {
    this.subject.next(events)
  }
  getRes(): Observable<any> {
    return this.subject.asObservable()
  }



}




// let params = new HttpParams();
    // params = params.append('startDate', obj.startDate.toString());
    // params = params.append('endDate', obj.endDate.toString());
    // return this.http.get(this.point +`/gymExp/monthReport/`, {params})