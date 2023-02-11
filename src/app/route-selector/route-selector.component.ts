import { Component, OnInit,  Output, EventEmitter, ErrorHandler  } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';



class Route {
  name: string;
  distance: number;
  elevationGain: number;
  maxElevation: number;
  imageUrl: string;
  pendientePromedio: number;
  zona: string;
  segmentId: number;

  constructor(name: string, distance: number, elevationGain: number, maxElevation: number, imageUrl: string, zona: string, pendientePromedio: number, segmentId: number) {
    this.name = name;
    this.distance = distance;
    this.elevationGain = elevationGain;
    this.maxElevation = maxElevation;
    this.imageUrl = imageUrl;
    this.zona = zona;
    this.pendientePromedio = pendientePromedio;
    this.segmentId = segmentId;
  }

  
}



@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss'],
})
export class RouteSelectorComponent  { 
  routes: Route[] = [
  new Route("Pie Andino Oriente ", 4.75, 251, 1123, "https://i.imgur.com/nC29pQ2.png", "norte", 5.1, 632958),
  new Route("Cuesta Chabacuco", 10.79, 675, 1320, "https://i.imgur.com/7FQSN86.png", "norte", 6.1, 14390168),
  new Route("Yerba Loca", 23.17, 1858, 1750, "https://image3.jpg", "oriente", 3.8, 13539244),
  new Route("El Toyo", 21.37, 314, 1011, "https://image4.jpg", "oriente", 0.8, 1332501),
  new Route("Cuesta Barriga", 6.02, 463, 696, "https://i.imgur.com/jT9z5G6.png", "poniente", 4.9, 1667042),
  new Route("Cuesta Lo Prado", 5.44, 420, 793, "https://i.imgur.com/UrSrnxP.png", "poniente", 7.7, 18676329),
  new Route("Cuesta Chada", 4.14, 251, 667, "https://image7.jpg", "sur", 6.1, 1289604),
  new Route("Pirque - La Obra", 24.49, 280, 847, "https://image8.jpg", "sur", -0.1, 31818271),
];

selectedZona: string;
selectedRoute: any;
showModal = false;
segmentData: any;
weatherData: any;
distanceInKilometers: number;


//inyecting httpclient
constructor(private http: HttpClient) {}

selectZona(zona: string) {
this.selectedZona = zona;
}

//function to make the modal popup and printing the object to see if it works
openModal(route) {
this.selectedRoute = route;
console.log(this.selectedRoute); //checking if it returns the object
this.showModal = true;

//
// making the api call, subscribe is deprecated but still working
const stravaToken = 'a21e168483621721fc2f38412ec16ed7fc3a455e';
const segmentId = this.selectedRoute.segmentId;
const stravaUrl = `https://www.strava.com/api/v3/segments/${segmentId}?access_token=${stravaToken}`;

this.http.get(stravaUrl).subscribe(data => {
    this.segmentData = data;
    this.distanceInKilometers = this.segmentData.distance / 1000;
    console.log(this.segmentData);
  },
  error => {
    console.log(error);
  }
);

//making the api call to the weatherapi

const weatherToken = '4780381ff8917a65ef1b3822f249d2e1';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-33.669&lon=-70.354&appid=${weatherToken}&units=metric`;

this.http.get(weatherUrl).subscribe(tiempoData => {
        this.weatherData = tiempoData;
        console.log(this.weatherData);
      },
      error => {
        console.log(error);
      }
      );
  }
}



