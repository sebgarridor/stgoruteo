import { Component } from '@angular/core';

@Component({
  selector: 'app-infiniteslider',
  templateUrl: './infiniteslider.component.html',
  styleUrls: ['./infiniteslider.component.scss']
})
export class InfinitesliderComponent {
  logos = [
    {
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
      height: 100,
      width: 250,
      alt: ''
    },
    {
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
      height: 100,
      width: 250,
      alt: ''
    }
  ];
}
