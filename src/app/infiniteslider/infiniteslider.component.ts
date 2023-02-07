import { Component } from '@angular/core';

@Component({
  selector: 'app-infiniteslider',
  templateUrl: './infiniteslider.component.html',
  styleUrls: ['./infiniteslider.component.scss']
})
export class InfinitesliderComponent {
  logos = [
    {
      src: 'https://i.pinimg.com/originals/79/e9/93/79e9932ed0dfab43b14047f62f9c9d4e.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://download.logo.wine/logo/Cannondale_Bicycle_Corporation/Cannondale_Bicycle_Corporation-Logo.wine.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://www.vectorlogo.zone/logos/strava/strava-ar21.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://i.imgur.com/O3RBwGN.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0267/7732/1669/files/logo_1600x.png?v=1613641862',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://download.logo.wine/logo/Mavic/Mavic-Logo.wine.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://bontracker.com/file/2021/10/Logo-Nuevo-negro.png',
      height: 100,
      width: 250,
      alt: ''
    }
  ];
}
