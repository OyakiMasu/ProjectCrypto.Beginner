//MY API LINKS
//1.CRYPTOCURRENCIES
const CRYPTO = "https://api.coincap.io/v2/assets"
//2.EXCHANGES
const EXCHANGES = "https://api.coingecko.com/api/v3/exchanges"
//3.BLOCKCHAIN
const BLOCKCHAIN = "https://api.coingecko.com/api/v3/coins/categories"

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

//Click event for the landing page
mainPage.addEventListener('click', () => {
  cryptolistLink.style.display = "none"
  cryptoExchanges.style.display = "none"
  searchResults.style.display = "none"
  homecryptoIntro.removeAttribute("hidden")
  homecryptoIntro.style.display ="flex"
})

//Click event for the crypto list
cryptolistLink.addEventListener('click', () => {
  //hide main page
mainPage.style.display = "none"
  //hide exchanges
cryptoExchanges.style.display="none"
  //hide search
 searchResults.style.display="none"
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
 searchResults.style.display="none"
//show home
homecryptoIntro.removeAttribute('hidden')
homecryptoIntro.style.display = "flex"

})

//Click event for the exchanges
exchangeLink.addEventListener('click', () => {
  //hide main page
mainPage.style.display="none"
  //hide crypto list
cryptoCoins.style.display="none"
  //hide search
searchResults.style.display="none"
//show exchanges
cryptoExchanges.removeAttribute("hidden")
cryptoExchanges.style.display="flex"   
})

//The search bar event for blockchain
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const change = searchBox.value
  blockGen(change)
  cryptoCoins.style.display = "none"
  cryptoExchanges.style.display = "none"
  searchResults.style.display = "flex"
  searchResults.removeAttribute('hidden')
  
}) 

//Load crypto
const loadCrypto = () => {
  fetch(CRYPTO)
    .then((resp) => resp.json())
    .then((data) => {
    const cryptoData = data.data
    // console.log(cryptoData[0].name)
           
for(i=0 ;i<cryptoData.length; i++){
let cryptoName = document.createElement('ul')
cryptoName.innerHTML=
             `      
<li>Symbol : ${cryptoData[i].symbol}</li> 
<li>Name : ${cryptoData[i].name}</li>
<li>Market value : ${cryptoData[i].priceUsd}$
            `
cryptoCoins.append(cryptoName)
        
        }

        })

//load exchange data
const LoadExchanges = () => {
  fetch(EXCHANGES)
  .then((resp) => resp.json())
  .then((data) => 
  //  console.log(data)
  {
  const dataExchange = data
  //  console.log(dataExchange)
  for(i=0 ;i<dataExchange.length; i++){
    let exchangeGen = document.createElement('ul')
    exchangeGen.innerHTML = 
        ` <li>Name : ${dataExchange[i].name}</li>
          <li>Country : ${dataExchange[i].country}</li>
          <li>Link : ${dataExchange[i].url}</li> 
        `
    let exchangeImg = document.createElement('img')
    exchangeImg.className = 'ex-img'
    exchangeImg.src = ` ${dataExchange[i].image}`
    cryptoExchanges.append(exchangeImg);
    cryptoExchanges.append(exchangeGen);
}
}
)
}
//load Exchange list
LoadExchanges();
}    
//Load Crypto list
 loadCrypto();

//load searchBar Items
const blockGen = () => {
  fetch(BLOCKCHAIN)
   .then((resp) => resp.json())
   .then((data) => 
        {
        const chainLoader = data
        // console.log(data)
for(i=0 ;i<chainLoader.length; i++){
  let chainGen = document.createElement('ul')
  chainGen.innerHTML =
  `
  <li>Name : ${chainLoader[i].name}</li>
  <li>Id : ${chainLoader[i].id}</li>
  <li>Content : ${chainLoader[i].content}</li>
  `
  let chainImg = document.createElement('img')
  chainImg.className = 'block-img'
  chainImg.src = `${chainLoader[i].top_3_coins}`
  searchResults.append(chainImg)
  searchResults.append(chainGen)
  
}
})
}
//load Blockchain systems
blockGen();
})