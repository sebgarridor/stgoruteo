import { Component, OnInit } from '@angular/core';

class Route {
  name: string;
  distance: number;
  elevationGain: number;
  maxElevation: number;
  imageUrl: string;
  pendientePromedio: number;
  zona: string;

  constructor(name: string, distance: number, elevationGain: number, maxElevation: number, imageUrl: string, zona: string, pendientePromedio: number) {
    this.name = name;
    this.distance = distance;
    this.elevationGain = elevationGain;
    this.maxElevation = maxElevation;
    this.imageUrl = imageUrl;
    this.zona = zona;
    this.pendientePromedio = pendientePromedio;
  }
}



@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss'],
})
export class RouteSelectorComponent  { 
  routes: Route[] = [
  new Route("Route 1", 10, 100, 1000, "https://image1.jpg", "norte", 6),
  new Route("Route 2", 20, 200, 2000, "https://image2.jpg", "norte", 6),
  new Route("Route 3", 30, 300, 3000, "https://image3.jpg", "oriente", 6),
  new Route("Route 4", 40, 400, 4000, "https://image4.jpg", "oriente", 6),
  new Route("Cuesta Barriga", 6.02, 463, 696, "https://i.imgur.com/jT9z5G6.png", "poniente", 4.9),
  new Route("Cuesta Lo Prado", 60, 600, 6000, "https://i.imgur.com/UrSrnxP.png", "poniente", 6),
  new Route("Route 7", 70, 700, 7000, "https://image7.jpg", "sur", 6),
  new Route("Route 8", 80, 800, 8000, "https://image8.jpg", "sur", 6),
];

selectedZona: string;

selectZona(zona: string) {
  this.selectedZona = zona;
}



}