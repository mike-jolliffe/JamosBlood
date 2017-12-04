function getScrollDistance(callback) {
    var down = window.scrollY;
    console.log(down);
    callback(down);
}

function hideBanner(distance) {
    if (distance > 200) {
        document.getElementById('bannerTop').className = 'bannerShrink';
    } else if (distance < 200) {
        document.getElementById('bannerTop').className = 'bannerBig';
    }
}

document.addEventListener("scroll", function () {
    getScrollDistance(hideBanner);
});
