import createHistory from "history/createBrowserHistory";

export default class History {
  constructor() {
    this.history = createHistory();
  }

  onChange(change) {
    this.history.listen((location, action) => {
      if (location.state) {
        change(location.state.spot);
      }
    });
  }

  update(spot) {
    this.history.push(`${spot.name}`, { spot: spot.time });
  }
};
