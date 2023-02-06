import { Component, OnInit } from '@angular/core';

class Route {
  name: string;
  distance: number;
  elevationGain: number;
  maxElevation: number;
  zona: string;

  constructor(name: string, distance: number, elevationGain: number, maxElevation: number, zona: string) {
    this.name = name;
    this.distance = distance;
    this.elevationGain = elevationGain;
    this.maxElevation = maxElevation;
    this.zona = zona;
  }
}

@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss']
})
export class RouteSelectorComponent implements OnInit {
  zonas = ['zona norte', 'zona oriente', 'zona poniente', 'zona sur'];
  routesByZona = {};
  selectedZona: string;

  ngOnInit() {
    const zonaNorteRoutes = [
      new Route('Route 1', 10, 100, 1000, 'zona norte'),
      new Route('Route 2', 20, 200, 2000, 'zona norte'),
      new Route('Route 3', 30, 300, 3000, 'zona norte'),
      new Route('Route 4', 40, 400, 4000, 'zona norte'),
      new Route('Route 5', 50, 500, 5000, 'zona norte'),
    ];
    const zonaOrienteRoutes = [
      new Route('Route 1', 11, 110, 1100, 'zona oriente'),
      new Route('Route 2', 21, 210, 2100, 'zona oriente'),
      new Route('Route 3', 31, 310, 3100, 'zona oriente'),
      new Route('Route 4', 41, 410, 4100, 'zona oriente'),
      new Route('Route 5', 51, 510, 5100, 'zona oriente'),
    ];
    const zonaPonienteRoutes = [
      new Route('Route 1', 12, 120, 1200, 'zona poniente'),
      new Route('Route 2', 22, 220, 2200, 'zona poniente'),
      new Route('Route 3', 32, 320, 3200, 'zona poniente'),
      new Route('Route 4', 42, 420, 4200, 'zona poniente'),
      new Route('Route 5', 52, 520, 5200, 'zona poniente'),
    ];
    const zonaSurRoutes = [
    new Route('Route 1', 13, 130, 1300, 'zona sur'),
    new Route('Route 2', 23, 230, 2300, 'zona sur'),
    new Route('Route 3', 33, 330, 3300, 'zona sur'),
    new Route('Route 4', 43, 430, 4300, 'zona sur'),
    new Route('Route 5', 53, 530, 5300, 'zona sur'),
  ];

  this.routesByZona = {
    'zona norte': zonaNorteRoutes,
    'zona oriente': zonaOrienteRoutes,
    'zona poniente': zonaPonienteRoutes,
    'zona sur': zonaSurRoutes
  };
}
}

  


