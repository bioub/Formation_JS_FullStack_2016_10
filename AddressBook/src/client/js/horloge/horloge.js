import moment from 'moment';

export class Horloge {
  constructor(container) {
    this.container = container;
  }

  update() {
    this.container.innerHTML = moment().format('hh:mm:ss');
  }

  start() {
    this.update();
    setInterval(this.update.bind(this), 1000);
  }
}
