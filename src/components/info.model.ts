export interface Info{
  id: number;
  name: string;
  description: string;
  kilometers: number;
  routeUrl: string;
  startingPoint: string;
  endingPoint: string;
  arriveTime: string;
  trafficTime: string;
  // it is optional because I know it
  // doesn't exist in the API that we will
  // consume in the next exercise :)
  //profession?: string;
}
