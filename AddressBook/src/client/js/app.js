import {Horloge} from './horloge/horloge';
import $ from 'bootstrap';

let divHorloge = document.querySelector('#horloge');
let horloge = new Horloge(divHorloge);
horloge.start();
