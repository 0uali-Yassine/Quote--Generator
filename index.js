let bigdiv = document.querySelector('.big_div');
let quote = document.querySelector('.Quote');
let writer = document.querySelector('.writer');
let btn = document.querySelector('.btn');
let phase = [
    ["“Be yourself; everyone else is already taken.”","-- Oscar Wilde"],
    ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,"-- Albert Einstein"],
    ["“So many books, so little time.”","-- Frank Zappa"],
    ["“A room without books is like a body without a soul.”","-- Marcus Tullius Cicero"],
    ["“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”","-- Bernard M. Baruch"],
    ["“You only live once, but if you do it right, once is enough.”","-- Dr. Seuss"]
];

btn.addEventListener('click', ()=>{
    let n = Math.floor(Math.random()*phase.length);
    console.log(n);
    quote.innerText = phase[n][0];
    writer.innerText = phase[n][1]; 
})