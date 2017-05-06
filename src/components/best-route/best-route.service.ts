import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Info } from "../info.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";

@Injectable()
export class BestRouteService {

  //private baseUrl: string = 'http://localhost:3000/info/best';
  private baseUrl: string = 'http://198.199.67.245/gmapsetaapp/info/best';

  constructor(private http : Http) { }

  get(id: number): Observable<Info> {
    let info$ = this.http
      .get(`${this.baseUrl}/${id}`, {headers: this.getHeaders()})
      .map(mapInfo)
      .catch(handleError);

    return info$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
 
    headers.append("Access-Control-Allow-Origin", "http://localhost:8100");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    headers.append("Access-Control-Max-Age", "3600");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, Origin, remember-me");

    return headers;
  }

}

function mapInfo(response:Response): Info{
  return toInfo(response.json());
}

function toInfo(response:any): Info{
  let info = <Info>({
    id: response.id,
    name: response.name,
    description: response.description,
    kilometers: response.kilometers,
    routeUrl: response.routeUrl,
    startingPoint: response.startingPoint,
    endingPoint: response.endingPoint,
    arriveTime: response.arriveTime,
    trafficTime: response.trafficTime
  });
  console.log('response parsed:', info);
  return info;
}

// To avoid breaking the rest of our app, I extract the id from the info url
function extractId(infoData:any){
  let extractedId = infoData.url.replace('http://foo/api/info/','').replace('/','');
  return parseInt(extractedId);
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
