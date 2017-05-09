import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Status } from "../status.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";

@Injectable()
export class RoutesStatusService {

  private baseUrl: string = 'http://198.199.67.245/gmapsetaapp/info/status';

  constructor(private http : Http) { }

  getAll(origin: number): Observable<Status[]> {
    let status$ = this.http
      .get(`${this.baseUrl}/${origin}`, {headers: this.getHeaders()})
      .map(mapStatusList)
      .catch(handleError);

    return status$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

function mapStatusList(response:Response): Status[] {
  return response.json().results.map(toStatus)
}

function mapStatus(response:Response): Status{
  return toStatus(response.json());
}

function toStatus(response:any): Status{
  let status = <Status>({
    id: response.id,
    name: response.name,
    description: response.description,
    kilometers: response.kilometers,
    startingPoint: response.startingPoint,
    endingPoint: response.endingPoint,
    arriveTime: response.arriveTime,
    trafficTime: response.trafficTime,
    selected: response.selected,
    color: response.color,
    fillPercent: response.fillPercent
  });
  console.log('response parsed:', status);
  return status;
}

// To avoid breaking the rest of our app, I extract the id from the info url
function extractId(statusData:any){
  let extractedId = statusData.url.replace('http://foo/api/status/','').replace('/','');
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
