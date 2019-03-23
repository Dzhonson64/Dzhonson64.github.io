
$("#bnt-menu").click(function () {
    $("#m-menu").slideToggle();
});

/*** Воспроизведения видео ***/
var video_play = document.querySelector(".overlay>.video-play");
video_play.addEventListener('click', function () {
    var video = document.getElementById("video");
    var block = document.querySelector(".overlay>.block");
    block.style.opacity = (block.style.opacity == '0') ? '1' : '0';
    video_play.style.opacity = (video_play.style.opacity == '0.1') ? '1' : '0.1';
    if (video.paused) {  // если видео остановлено, запускаем
        video.play();
    } else {
        video.pause();
    }
}, false);




/*** Добавления(Появление) кнопки Read More ***/
/* 
    list - блок контента,
    bnt - объект кнопки Read More,
    minSize - кол-во символов для появления кнопки Read More
*/
function showReadMore(list, bnt, minSize) {
    for (var i = 0; i < list.length; i++) {
        var textForReadMore = list[i].textContent;
        if (textForReadMore.length > minSize) {
            bnt[i].style.display = "inline";
        }
    }
};

/*** Реализцаия показа контента по нажатию на Ream More ***/
// el - объект кнопки read More
function actionReadMore(el) {
    for (var i = 0; i < el.length; i++) { // прохожусь по всем кнопкам read more и выбирается нужная для нажатия
        el[i].addEventListener('click', function () {
            var content = this.previousElementSibling; // соседний блок - контент
            content.style.height = (content.style.height == '') ? content.scrollHeight + 'px' : "";
        });
    }
}
/*** Интерфес реализации Read More***/
/* 
    list - блок контента,
    bnt - объект кнопки Read More,
    minSize - кол-во символов для появления кнопки Read More
*/
function readMore(list, bnt, minSize) {
    showReadMore(list, bnt, minSize);
    actionReadMore(bnt);
}

/*** TABS ***/
/*
    tabsName - массив tabs
    cardsName - массив cards-content
*/
function tabs(tabsName, cardsName) {
    for (var i = 0; i < tabsName.length; i++) {
        tabsName[i].addEventListener('click', function () {
            var tagName = this.getAttribute("name");
            if (tagName == "all") {
                for (var j = 0; j < cardsName.length; j++) {
                    cardsName[j].style.display = "block";
                }
                for (var i = 0; i < cardsName.length; i++){
                    cardsName[i].classList.remove("active");
                }
            } else {
                
                for (var j = 0; j < cardsName.length; j++) {
                    cardsName[j].style.display = "block";
                    if (cardsName[j].getAttribute("name") != tagName) {
                        cardsName[j].style.display = "none";
                    }
                }
                for (var i = 0; i < cardsName.length; i++){
                    cardsName[i].classList.remove("active");
                }
            }
        });
    }
}



/*** SLIDER ***/

/*
    left - стрелка влево
    right - стрелка вправо
    background - элемет объектра, на чём будет располгаться фоновая картинка
    imagesSlider - массив с названиями картинок
*/
function sliders(left, right, background, imagesSlider) {
    var k = 0;

    left.addEventListener('click', function () {
        if (k == 0) {
            k = imagesSlider.length;
        }
        k = k - 1;
        removeClassToPointers();
        addClassToPointers(k);
        background.style.background = 'url(img/' + imagesSlider[k] + ')';

    });
    right.addEventListener('click', function () {
        k = k + 1;
        if (k == imagesSlider.length) {
            k = 0;
        }
        removeClassToPointers();
        addClassToPointers(k);
        background.style.background = "url(img/" + imagesSlider[k] + ")";

    });
    setInterval(function () {
        k = k + 1;
        if (k == imagesSlider.length) {
            k = 0;
        }
        removeClassToPointers();
        addClassToPointers(k);
        background.style.background = "url(img/" + imagesSlider[k] + ")";
    }, 4000);
}

function actionCircleBar(imagesSlider, background, nameClass) {
    var pointers = background.querySelectorAll("." + nameClass);

    pointers[0].addEventListener('click', function () {
        removeClassToPointers();
        this.classList.add("active");
        background.style.backgroundImage = 'url(img/' + imagesSlider[0] + ')';
    });
    pointers[1].addEventListener('click', function () {
        removeClassToPointers();
        this.classList.add("active");
        background.style.backgroundImage = 'url(img/' + imagesSlider[1] + ')';
    })
    pointers[2].addEventListener('click', function () {
        removeClassToPointers();
        this.classList.add("active");
        background.style.backgroundImage = 'url(img/' + imagesSlider[2] + ')';
    })
}

function actionCircleBar2(imagesSlider, background, nameClass) {
    var pointers = background.querySelectorAll("." + nameClass);

    pointers[0].addEventListener('click', function () {
        removeClassToPointers2();
        this.classList.add("active");
        background.style.backgroundImage = 'url(img/' + imagesSlider[0] + ')';
    });
    pointers[1].addEventListener('click', function () {
        removeClassToPointers2();
        this.classList.add("active");
        background.style.backgroundImage = 'url(img/' + imagesSlider[1] + ')';
    })
    pointers[2].addEventListener('click', function () {
        removeClassToPointers2();
        this.classList.add("active");
        background.style.backgroundImage = 'url(img/' + imagesSlider[2] + ')';
    })
    var k = 0;
    setInterval(function () {
        k = k + 1;
        if (k == imagesSlider.length) {
            k = 0;
        }
        removeClassToPointers2();
        addClassToPointers2(k);
        background.style.background = "url(img/" + imagesSlider[k] + ")";
    }, 4000);
}
/* Сделать circle активным */
// k - номер слайдера
function addClassToPointers(k) {
    var circles = document.querySelectorAll("header .slider .circle");
    circles[k].classList.add("active");
}


/* Сделать circles НЕактивными */
function removeClassToPointers() {
    var circles = document.querySelectorAll("header .slider .circle");
    for (var i = 0; i < circles.length; i++) {
        circles[i].classList.remove("active");
    }
}

function addClassToPointers2(k) {
    var circles = document.querySelectorAll(".content .posts .blocks .circle .pointer");
    circles[k].classList.add("active");
}


/* Сделать circles НЕактивными */
function removeClassToPointers2() {
    var circles = document.querySelectorAll(".content .posts .blocks .circle .pointer");
    for (var i = 0; i < circles.length; i++) {
        circles[i].classList.remove("active");
    }
}


/* Создание circle */
// parent - элемент-родитель, где будут раполагаться circles-bar
// imagesSlider - массив с названиями картинок
// nameClass - название класса для pointers
function createCircleSlider(parent, imagesSlider, nameClass) {
    for (var i = 0; i < imagesSlider.length; i++) {
        parent.appendChild(document.createElement('div'));
    }
    var circleDiv = parent.querySelectorAll("div");
    for (var i = 0; i < circleDiv.length; i++) {
        circleDiv[i].classList.add(nameClass);
    }
}


function slider(left, right, background, imagesSlider, parent, nameClass) {
    createCircleSlider(parent, imagesSlider, nameClass);
    sliders(left, right, background, imagesSlider);
    actionCircleBar(imagesSlider, background, nameClass);
}
function slider2(parent, imagesSlider, nameClass, background) {
    createCircleSlider(parent, imagesSlider, nameClass);
    actionCircleBar2(imagesSlider, background, nameClass);
}

















var imagesSlider = [
    "bg.png",
    "hintersee-3601004_1920.jpg",
    "yellowstone-national-park-1581879_1920.jpg"
];
var imagesSlider2 = [
    "bg1.png",
    "bg_photo6.png",
    "bg_photo4.png"
]
slider(
    document.querySelector("header .fa-chevron-left"),
    document.querySelector("header .fa-chevron-right"),
    document.querySelector("header"),
    imagesSlider,
    document.querySelector("header .pointer"),
    'circle'
);
slider2(
    document.querySelector(".posts .circle"),
    imagesSlider2,
    'pointer',
    document.querySelector(".content .posts .bar1"),
)
readMore(
    document.querySelectorAll(".cards .p"),
    document.querySelectorAll(".cards .moreRead"),
    160
);
readMore(
    document.querySelectorAll(".posts .p"),
    document.querySelectorAll(".posts .more"),
    113
);
readMore(
    document.querySelectorAll("footer .p"),
    document.querySelectorAll("footer .more"),
    297
);




tabs(
    document.querySelectorAll(".projects .categories .button"),
    document.querySelectorAll(".projects .project .cardContent")
);
