var circle = document.getElementById("circle");

document.addEventListener("mousemove", function (event) {
    var x = event.clientX;
    var y = event.clientY;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.textContent = "x: " + (x - 20) + ", y: " + (y - 20);
});

function parseQuote(data) {
    const quoteText = data.quoteText;
    document.getElementById('fortune').textContent = quoteText;
}

const fortune_url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote'
async function getFortune() {
    const fortune_url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote';
    const script = document.createElement('script');
    script.src = fortune_url;
    document.body.appendChild(script);
}

getFortune();

// this code is from: https://www.youtube.com/watch?v=uxf0--uiX0I 

// the original example is from: https://codepen.io/ohmycodeness/pen/KzdLRb 

// and fixed by chat GPT: The issue could be that the Forismatic API returns JSONP, which is a different format than regular JSON. JSONP is a JSON response wrapped in a function call, and it's commonly used for cross-domain requests.