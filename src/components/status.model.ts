export interface Status{
  id: number;
  name: string;
  kilometers: number;
  startingPoint: string;
  endingPoint: string;
  arrivalTime: string;
  trafficTime: string;
  selected: boolean;
  color: string;
  fillPercent: string;
}
