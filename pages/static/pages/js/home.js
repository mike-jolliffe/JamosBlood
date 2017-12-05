function getScrollDistance(callback) {
    var down = window.scrollY;
    console.log(down);
    callback(down);
}

function hideBanner(distance) {
    if (distance > 150) {
        document.getElementById('bannerTop').className = 'bannerShrink';
        document.getElementById('navMenu').classList.add('fixed');
    } else if (distance < 150) {
        document.getElementById('bannerTop').className = 'bannerBig';
        document.getElementById('navMenu').classList.remove('fixed');
    }
}

document.addEventListener("scroll", function () {
    getScrollDistance(hideBanner);
});

// document.getElementById('submit').onsubmit = function () {
//     return document.getElementById('mailingListContainer').prepend("<p>Thanks for signing up</p>")
// };
