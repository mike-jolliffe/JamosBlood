function getScrollPercent(callback) {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    console.log((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
    callback((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}

function hideBanner(percentage) {
    if (percentage > 15) {
        document.getElementById('bannerTop').className = 'bannerShrink';
        document.getElementById('bannerTitle').style.fontSize = '2em';

    }
}

document.addEventListener("scroll", function () {
    getScrollPercent(hideBanner);
});
