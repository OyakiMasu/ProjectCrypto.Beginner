//MY API LINKS
//1.CRYPTOCURRENCIES
const CRYPTO = "https://api.coincap.io/v2/assets"
//2.MARKET VALUE
const MARKET = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//3.EXCHANGES
const EXCHANGES = "https://api.coingecko.com/api/v3/exchanges"

document.addEventListener('DOMContentLoaded', () => {
//MY DATA THAT I AM CONSTANTLY CALLING
const mainPage = document.getElementById('Crypto')
const cryptoCoins = document.getElementById('coin-list')
const cryptoExchanges = document.getElementById('market-value')
const searchResults = document.getElementById('search-result')

//LINKS THAT I WILL USE FOR THE EVENTS
const homeLink = document.getElementById('home-link')
const cryptolistLink = document.getElementById('crypto-link')
const exchangeLink = document.getElementById('exchange-link')
const homecryptoIntro = document.getElementById('Crypto')

//Search Engine
const searchForm = document.getElementById('search-form')
const searchBox = document.getElementById('search')


//Click event for the crypto list
cryptolistLink.addEventListener('click', () => {
  //hide main page
mainPage.style.display = "none"
  //hide exchanges
cryptoExchanges.style.display="none"
  //hide search
 searchBox.style.display="none"
  //show Crypto List
cryptoCoins.removeAttribute('hidden')  
cryptoCoins.style.display= "flex"  

})

//Click event for the home page
homeLink.addEventListener('click', () => {
//hide crypto page
cryptoCoins.style.display = "none"
//hide exchanges
cryptoExchanges.style.display = "none"
//hide search 
 searchBox.style.display="none"
//show home
homecryptoIntro.removeAttribute('hidden')
homecryptoIntro.style.display = "flex"


})

//Load crypto
const loadCrypto = () => {
    fetch(CRYPTO)
        .then((resp) => resp.json())
        .then((data) => {
            const cryptoData = data.data
            // console.log(cryptoData[0].name)
           
            //  const coinsList = cryptoData.map(

            // cat => ( cat.name)
            // )
            // document.getElementById('coin-list').append(...coinsList)
        for(i=0 ;i<cryptoData.length; i++){
            let cryptoName = document.createElement('ul')
            cryptoName.innerHTML=
             `      
                   <li>Symbol : ${cryptoData[i].symbol}</li> 
                    <li>Name : ${cryptoData[i].name}</li>
                    <li>Market value : ${cryptoData[i].priceUsd}$
            `
            cryptoCoins.append(cryptoName)
            // let cryptoSymbol = document.createElement('ul')
            // cryptoSymbol.innerHTML = `<li>${cryptoData[i].symbol}</li>`
            // document.getElementById('coin-list').append(cryptoSymbol)

        }

        })
}    







//Load Crypto list
 loadCrypto();

})

