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
  descripcion: string;

  constructor(name: string, distance: number, elevationGain: number, maxElevation: number, imageUrl: string, zona: string, pendientePromedio: number, segmentId: number, descripcion: string) {
    this.name = name;
    this.distance = distance;
    this.elevationGain = elevationGain;
    this.maxElevation = maxElevation;
    this.imageUrl = imageUrl;
    this.zona = zona;
    this.pendientePromedio = pendientePromedio;
    this.segmentId = segmentId;
    this.descripcion = descripcion;
  }

  
}



@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss'],
})
export class RouteSelectorComponent  { 
  routes: Route[] = [
  new Route("Pie Andino Oriente ", 4.75, 251, 1123, "https://i.imgur.com/nC29pQ2.png", "norte", 5.1, 632958, "Ubicado en el nororiente de Santiago, conecta el sector oriente con Chicureo."),
  new Route("Cuesta Chabacuco", 10.79, 675, 1320, "https://i.imgur.com/7FQSN86.png", "norte", 6.1, 14390168, "En el límite regional entre la RM y la V Región, es una ruta para ruteros experimentados debido a su lejanía."),
  new Route("Yerba Loca", 23.17, 1858, 1750, "https://i.imgur.com/BMgBIAO.png ", "oriente", 3.8, 13539244, "Clásico para quienes disfrutan de la Cordillera de los Andes, ubicada en la curva 15 del Camino a Farellones"),
  new Route("El Toyo", 21.37, 314, 1011, "https://i.imgur.com/EYAPA8C.png", "oriente", 0.8, 1332501, "De las rutas más conocidas y bellas, funciona como ruta de acceso hacia el Cajón del Maipo."),
  new Route("Cuesta Barriga", 6.02, 463, 696, "https://i.imgur.com/jT9z5G6.png", "poniente", 4.9, 1667042, "Conocido como el patio del Poniente, es la ruta más usada por los ciclistas del sector poniente de la ciudad."),
  new Route("Cuesta Lo Prado", 5.44, 420, 793, "https://i.imgur.com/UrSrnxP.png", "poniente", 7.7, 18676329, "Otra ruta conocida del poniente, con accesos desde la ruta 68, o también desde el interior."),
  new Route("Cuesta Chada", 4.14, 251, 667, "https://i.imgur.com/wGcgdua.png", "sur", 6.1, 1289604, "Ubicada en el límite regional entre la RM y la VI Región, conectando a San Francisco de Mostazal."),
  new Route("Pirque - La Obra", 24.49, 280, 847, "https://i.imgur.com/Ok09ROE.png", "sur", -0.1, 31818271, "Ruta que conecta Pirque y el Toyo, pasando por los bellos paisajes del interior de Pirque."),
];

selectedZona: string;
selectedRoute: any;
showModal = false;
segmentData: any;
weatherData: any;
distanceInKilometers: number;


options = ['selecciona una zona', 'zona norte', 'zona oriente', 'zona poniente', 'zona sur'];
defaultOption = this.options[0];
selectedOption: string;
showList = false;

toggleList() {
  this.showList = !this.showList;
}

selectOption(option: string) {
  this.selectedOption = option;
  this.defaultOption = option;
  this.showList = false;
}


//inyecting httpclient
constructor(private http: HttpClient) {}

selectZona(zona: string) {
this.selectedZona = zona;
}

//function to make the modal popup and printing the object to see if it works
openModal(route: any) {
this.selectedRoute = route;
console.log(this.selectedRoute); //checking if it returns the object
this.showModal = true;

//
// making the api call, subscribe is deprecated but still working
const stravaToken = 'e195bdd00b285473a994327c62a1f5264953b3bc';
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

const weatherToken = '35ccbcec23612074f938e5f8cd310a37';
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



