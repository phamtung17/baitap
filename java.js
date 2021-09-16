
var Eldn = document.querySelectorAll('.box')[0];
var Eldk = document.querySelectorAll('.box')[1];
var close = document.querySelectorAll('.mark')[0];
var close1 = document.querySelectorAll('.mark')[1];

console.log(Eldn);
console.log(Eldk);
var dn = document.querySelectorAll('footer button')[0];
var dk = document.querySelectorAll('footer button')[1];
console.log(dn);
console.log(dk);

dn.onclick = event => {
    event.preventDefault();
    Eldk.style.display = 'none';
    Eldn.style.display = 'flex';
}
dk.onclick = event => {
    event.preventDefault();
    Eldn.style.display = 'none';
    Eldk.style.display = 'flex';
}

close.onclick = event => {
    event.preventDefault();
    Eldn.style.display = 'none';
    Eldk.style.display = 'none';
}
close1.onclick = event => {
    event.preventDefault();
    Eldn.style.display = 'none';
    Eldk.style.display = 'none';
}

// banner
var view = document.querySelector('.view img');
var anhqcs = document.querySelectorAll('.banner ul li a');
anhqcs.forEach(anhqc => {
    let imgUrl = anhqc.getAttribute('href');
    anhqc.onclick = event => {
        event.preventDefault();
        view.src = imgUrl;
    }
})
