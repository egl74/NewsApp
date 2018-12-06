const popup = require('./errorPopup.html');

class ErrorPopup {
  static instance;
  static popup;

  constructor() {
    if (this.instance) {
      return this.instance;
    }

    this.popup = popup;
    this.instance = this;
  }
}

module.exports = {
    ErrorPopup: ErrorPopup
}
