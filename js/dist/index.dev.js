"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//MY API LINKS
//1.CRYPTOCURRENCIES
var CRYPTO = "https://api.coincap.io/v2/assets"; //2.MARKET VALUE

var MARKET = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"; //3.EXCHANGES

var EXCHANGES = "https://api.coingecko.com/api/v3/exchanges";
document.addEventListener('DOMContentLoaded', function () {
  //Load crypto
  var loadCrypto = function loadCrypto() {
    fetch(CRYPTO).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      var _document$getElementB;

      var cryptoData = data.data[0];
      console.log(cryptoData);

      (_document$getElementB = document.getElementById('coin-list')).append.apply(_document$getElementB, _toConsumableArray(cryptoData));
    });
  };

  loadCrypto();
});