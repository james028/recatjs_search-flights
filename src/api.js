const API = 'https://warsawjs-flights-api.herokuapp.com';

export function readAirportList() {
    return fetch(`${API}/airports`)
        .then(response => response.json());
}

export function searchFlights(param) {
    const {departureFlight, returnFLight, from, to} = param;
    return fetch(`${API}/flights/${departureFlight}/${returnFLight}/${from}/${to}`)
        .then(response => response.json());
}