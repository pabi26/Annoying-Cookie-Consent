setTimeout(() => {
    document.getElementById('cookie-banner').style.display = 'block'
}, 2000);

setTimeout(() => {
    document.getElementById('banner-3').style.display = 'block'
}, 20000);

setTimeout(() => {
    document.getElementById('banner-4').style.display = 'block'
}, 90000);


document.getElementById('accept').addEventListener('click', function() {
    document.getElementById('banner').style.display = 'block'
})


document.getElementById('no').addEventListener('click', function() {
    document.getElementById('banner').style.display = 'none'
})


document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('banner-2').style.display = 'block'
})

document.getElementById('no1').addEventListener('click', function() {
    document.getElementById('banner-2').style.display = 'none'
})


document.getElementById('yes1').addEventListener('click', function() {
    document.getElementById('banner-2').style.display = 'none'
})

document.getElementById('pissOff').addEventListener('click', function() {
    document.getElementById('banner-3').style.display = 'none'
})

document.getElementById('very').addEventListener('click', function() {
    document.getElementById('banner-3').style.display = 'none'
})

document.getElementById('one').addEventListener('click', function() {
    document.getElementById('banner-4').style.display = 'none'
})

document.getElementById('two').addEventListener('click', function() {
    document.getElementById('banner-4').style.display = 'none';
    document.getElementById('banner').style.display = 'none';
    document.getElementById('banner-2').style.display = 'none';
    document.getElementById('banner-3').style.display = 'none';
    document.getElementById('cookie-banner').style.display = 'none';
})
