function getScrollPercent(callback) {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    console.log((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
    callback((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}

function hideBanner(percentage) {
    if (percentage > 20) {
        document.getElementById('bannerTop').className = 'bannerShrink';
    } else if (percentage < 20) {
        document.getElementById('bannerTop').className = 'bannerBig';
    }
}

document.addEventListener("scroll", function () {
    getScrollPercent(hideBanner);
});
