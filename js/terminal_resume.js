window.console = window.console || function (t) { };

if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");

}

var captionLength = 0;
currentDate = new Date().toJSON().slice(0, 10);

var caption1 = currentDate + `  I am an experienced <mark>Python programmer</mark> with a strong background in computer science
 and software development.<br>
 ~ Rob`;


$(document).ready(function () {
    setInterval('cursorAnimation()', 600);
    captionEl = $('#caption');

    testTypingEffect()

    $('#test-typing').click(function () {
        testTypingEffect();
    });

    $('#test-erasing').click(function () {
        testErasingEffect();
    });
});

function testTypingEffect() {
    caption = caption1;
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if (captionLength < caption.length + 1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
        allDone()

    }
}

function allDone() {
    // < !--document.getElementById('test-erasing').display = block-- >
    // alert('type all done Rob')

    const element1 = document.getElementById("fa-3x");
    element1.style.display = "block";


}

function testErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength > 0) {
        erase();
    } else {
        $('#caption').html("You didn't write anything to erase, but that's ok!");
        setTimeout('testErasingEffect()', 1000);
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if (captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    },
        'fast', 'swing').animate({
            opacity: 1
        },
            'fast', 'swing');
}

