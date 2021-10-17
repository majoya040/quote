/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * here some objects are creating which indicates each quote and their property
 ***/
const quote1= {
    mainquote: "The purpose of our lives is to be happy.",
    person: "Dalai Lama"
};

const quote2= {
    mainquote: "Life is what happens when you’re busy making other plans",
    person: "John Lennon",
    citation: "parade.com"
};

const quote3= {
    mainquote: "Get busy living or get busy dying.",
    person: "Stephen King"
};

const quote4= {
    mainquote: "You only live once, but if you do it right, once is enough.",
    person: "Mae West"
};

const quote5= {
    mainquote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    person: "Thomas A. Edison",
    citation: "parade.com"
};

const quote6= {
    mainquote: "If you want to live a happy life, tie it to a goal, not to people or things.",
    person: "Albert Einstein"
};

const quote7= {
    mainquote: "If life were predictable it would cease to be life, and be without flavor.",
    person: "Eleanor Roosevelt",
    citation: "parade.com"
};

const quote8= {
    mainquote: "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it",
    person: "Henry Ford",
    citation: "parade.com"

};

const quote9= {
    mainquote: "In order to write about life first you must live it.",
    person: "Ernest Hemingway"
};

const quote10= {
    mainquote: "The unexamined life is not worth living.",
    person: "Socrates"
};

//array of quotes
const arrayquote = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];

// console.log(arrayquote[3].person);

// console.log(quote1.mainquote , quote1.person);
// console.log(quote2);
// console.log(quote6);

/***
 * `getRandomQuote` function is creating where random num is generating
 ***/
function getrandomquote() {
    return (Math.floor(Math.random() * 10));
}
 
// console.log (x);

// console.log(arrayquote[x].person);
/***
 * `printQuote` function prints the randomly generated quotes and checks if there are any citations in the objects.
 ***/

function printQuote(){
    let x= getrandomquote() ;
    let quoteobject=arrayquote[x] ;

    document.getElementsByClassName("quote")[0].innerHTML = quoteobject.mainquote;
    if(quoteobject.hasOwnProperty("citation")){
        document.getElementsByClassName("source")[0].innerHTML = quoteobject.person + ' <span class="citation">' +
        quoteobject.citation + '</span>';
    }

    else{
        document.getElementsByClassName("source")[0].innerHTML = quoteobject.person;
    }
}


/***
 * click event listener for the print quote button
 ***/

document.getElementById("load-quote").addEventListener("click", printQuote, true);
