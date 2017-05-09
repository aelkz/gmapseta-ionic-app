export interface Status{
  id: number;
  name: string;
  description: string;
  kilometers: number;
  startingPoint: string;
  endingPoint: string;
  arriveTime: string;
  trafficTime: string;
  selected: boolean;
  color: string;
  fillPercent: number;
}
