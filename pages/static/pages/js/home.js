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

$(document).on('submit', '#emailField', function (e) {
    e.preventDefault();

    $.ajax({
        type: 'POST',
        url: "email/",
        data: {
            email: $('#email').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function() {
            $('#emailConfirm').css('display', 'inline');
            $('#email').val('');
            setTimeout(function () {
                $('#emailConfirm').css('display', 'none')
            }, 3000)
        }
    })
});
