import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [
      {
        "id": 52,
        "firstname": "Novak",
        "lastname": "Djokovic",
        "shortname": "N.DJO",
        "sex": "M",
        "country": {
          "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Serbie.png",
          "code": "SRB"
        },
        "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Djokovic.jpg",
        "data": {
          "rank": 2,
          "points": 2542,
          "weight": 80000,
          "height": 188,
          "age": 31,
          "last": [1, 1, 1, 1, 1]
        }
      },
      {
        "id": 95,
        "firstname": "Venus",
        "lastname": "Williams",
        "shortname": "V.WIL",
        "sex": "F",
        "country": {
          "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/USA.png",
          "code": "USA"
        },
        "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Venu-Williams.jpg",
        "data": {
          "rank": 52,
          "points": 1105,
          "weight": 74000,
          "height": 185,
          "age": 38,
          "last": [0, 1, 0, 0, 1]
        }
      },
      {
        "id": 65,
        "firstname": "Stan",
        "lastname": "Wawrinka",
        "shortname": "S.WAW",
        "sex": "M",
        "country": {
          "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Suisse.png",
          "code": "SUI"
        },
        "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Stan-Wawrinka.jpg",
        "data": {
          "rank": 21,
          "points": 1784,
          "weight": 81000,
          "height": 183,
          "age": 33,
          "last": [1, 1, 1, 0, 1]
        }
      },
      {
        "id": 102,
        "firstname": "Serena",
        "lastname": "Williams",
        "shortname": "S.WIL",
        "sex": "F",
        "country": {
          "picture": "https://i.eurosport.com/_iss_/geo/country/flag/medium/2209.png",
          "code": "USA"
        },
        "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Serena-Williams.jpg",
        "data": {
          "rank": 10,
          "points": 3521,
          "weight": 72000,
          "height": 175,
          "age": 37,
          "last": [0, 1, 1, 1, 0]
        }
      },
      {
        "id": 17,
        "firstname": "Rafael",
        "lastname": "Nadal",
        "shortname": "R.NAD",
        "sex": "M",
        "country": {
          "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Espagne.png",
          "code": "ESP"
        },
        "picture": "https://latelierssl.blob.core.windows.net/trainingday/TennisStats/Resources/Rafael-Nadal.jpg",
        "data": {
          "rank": 1,
          "points": 1982,
          "weight": 85000,
          "height": 185,
          "age": 33,
          "last": [1, 0, 0, 0, 1]
        }
      }
    ]
  },
  actions: {
    getPlayers() {

    }
  },
  mutations: {
    SET_PLAYERS(state, players) {

    }
  },
  modules: {}
});
