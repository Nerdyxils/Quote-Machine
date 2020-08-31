
generateQuote = () => {

    var quote = ["While fear depletes power, faith gives wings for the soul\'s elevation. - T.F. Hodge",
"Even the juncture in history and the zeitgeist we live in is something we choose, setting the scene for the spiritual fodder we need to grow and achieve deeper elevation of our souls. - Raquel Sepeda",
"They say the apple don\'t fall far from the tree but every apple has it own seeds - O.S. Hickman",
"I like anything that is thought provoking and elevates one\'s consciousness to the highest and out of it\'s safety net, making one breathe aspiration. - Petra Remes",
"Sometimes God uses people to test you. Be patient with people because you never know how God can use them to bring you your breakthrough. - Jeanette Coron",
"Don\’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. - Mary Kay Ash",
"Only the paranoid survive. - Andy Grove",
"If people are doubting how far you can go, go so far that you can\’t hear them anymore. - Michele Ruiz",
"Do one thing every day that scares you. - Eleanor Roosevelt"
    
    ];

    const quoteChange = quote[Math.floor(Math.random() * quote.length)];
    document.querySelector("p").innerHTML = quoteChange;

}


