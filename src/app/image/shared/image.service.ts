import { Injectable } from '@angular/core';

@Injectable()

export class ImageService {
  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  {'id': 1, 'category': 'Nature', 'caption': 'Algarve, Portugal', 'url': 'assets/img/AlgarvePortugal1.jpg'},
  {'id': 2, 'category': 'Nature', 'caption': 'Algarve, Portugal', 'url': 'assets/img/AlgarvPortugal.jpg'},
  {'id': 3, 'category': 'Nature', 'caption': 'Antibes, France', 'url': 'assets/img/AntibesFrance.jpg'},
  {'id': 4, 'category': 'Buildings', 'caption': 'Grand Teton National Park, U.S.', 'url': 'assets/img/GrandTetonNationalPark.jpg'},
  {'id': 5, 'category': 'Buildings', 'caption': 'Hallstatt, Austria', 'url': 'assets/img/HallstattAustria.jpg'},
  {'id': 6, 'category': 'Buildings', 'caption': 'Autumn in Armenia', 'url': 'assets/img/Armenia.jpg'},
  {'id': 7, 'category': 'Buildings', 'caption': 'Rio de Janeiro', 'url': 'assets/img/leavingRiodeJaneiro.jpg'},
  {'id': 8, 'category': 'Bridges', 'caption': 'London, England', 'url': 'assets/img/LondonEngland.jpg'},
  {'id': 9, 'category': 'Bridges', 'caption': 'Neuschwanstein Castle, German', 'url': 'assets/img/NeuschwansteinCastleGerman.jpg'},
  {'id': 10, 'category': 'Bridges', 'caption': 'Paris, France', 'url': 'assets/img/ParisFrance.jpg'}
];
