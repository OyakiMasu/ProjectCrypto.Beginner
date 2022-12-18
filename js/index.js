//MY API LINKS
//1.CRYPTOCURRENCIES
const CRYPTO = "https://api.coincap.io/v2/assets"
//2.MARKET VALUE
const MARKET = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//3.EXCHANGES
const EXCHANGES = "https://api.coingecko.com/api/v3/exchanges"

document.addEventListener('DOMContentLoaded', () => {

//Create entry of cryptos


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
             `                     <li>Symbol : ${cryptoData[i].symbol}</li> 
                                   <li>Name : ${cryptoData[i].name}</li>
                                   <li>Market value : ${cryptoData[i].priceUsd}$
                                                              `
            document.getElementById('coin-list').append(cryptoName)
            // let cryptoSymbol = document.createElement('ul')
            // cryptoSymbol.innerHTML = `<li>${cryptoData[i].symbol}</li>`
            // document.getElementById('coin-list').append(cryptoSymbol)

        }

        })
}    
 loadCrypto();

})

