const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterbtn = document.getElementById('twitter');
const newQuotebtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Show Loading Screen
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide Loading Screen
function complete() {
  if(!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}
// Get Quote From Api
async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    // checking if The Author Name Is blank(then just add unknown) Or Not(add author name)
    if(data.quoteAuthor === '') {
      authorText.innerText = "-Unknown";
    } else {
      authorText.innerText = "-" + data.quoteAuthor;
    }
    // reducing Font Size For Longer Quotes
    if (data.quoteText.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = data.quoteText;
    // stop loader and show quote
    complete();
  } catch (error) {
    getQuote();
    console.log('Oh, We Couldn\'t Find a Good Quote Sorry\n', error);
  }
}

// Tweet The Current Quote
function twewtQuote() {
  const quote = '"' + quoteText.innerText + '"';
  const author = '\n' + authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} ${author}`;
  window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuotebtn.addEventListener('click', getQuote);
twitterbtn.addEventListener('click', twewtQuote);

// on load
getQuote(loading());
// getQuote();