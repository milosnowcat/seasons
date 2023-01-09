export function start() {
  var today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"), //January is 0!
    yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  console.log(today);

  season(mm);
}

function season(mm) {
  if (mm == 1) {
    s1();
  } else if (mm == 2) {
    s2();
  } else {
    console.log("ᓚᘏᗢ");
  }
}

function s1() {
  var body = document.getElementById("home"),
    season =
      "<!-- https://lenadesign.org/2021/12/22/css-happy-new-year-animation-fireworks/ -->" +
      '<div class="seasons" id="s1">' +
      '<div class="seasons s1_happy-new-year">' +
      '<div class="seasons s1_circle">' +
      '<div class="seasons s1_clock-bottom"></div>' +
      "</div>" +
      '<div class="seasons s1_clock-middle">' +
      '<div class="seasons s1_clock-face"></div>' +
      "</div>" +
      '<div class="seasons s1_clock-top">' +
      '<div class="seasons s1_roof"></div>' +
      '<div class="seasons s1_deco"></div>' +
      '<div class="seasons s1_sides"></div>' +
      "</div>" +
      '<div class="seasons s1_clouds"></div>' +
      '<div class="seasons s1_fireworks">' +
      '<div class="seasons s1_one"></div>' +
      "</div>" +
      '<div class="seasons s1_fireworks-2">' +
      '<div class="seasons s1_two"></div>' +
      "</div>" +
      '<div class="seasons s1_fireworks-3">' +
      '<div class="seasons s1_two"></div>' +
      "</div>" +
      '<div class="seasons s1_fireworks-4">' +
      '<div class="seasons s1_one"></div>' +
      "</div>" +
      '<div class="seasons s1_text">Happy 2023!</div>' +
      "</div>" +
      "</div>";
  body.insertAdjacentHTML("beforebegin", season);
}

function s2() {
  var body = document.getElementById("rahcode_yt"),
    season =
      '<div class="project__data">' +
      '<h2 class="project__title">Youtube</h2>' +
      '<p class="project__description">Video</p>' +
      '<a rel="sponsored" href="https://www.youtube.com/@rah_code" class="button button--flex button--white">Go<i class="uil uil-arrow-right project__icon button__icon"></i></a>' +
      "</div>" +
      '<iframe src="https://www.youtube.com/embed/bmCj0UNiflg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="project__img"></iframe>' +
      "<br />";
  body.innerHTML = season;

  body = document.getElementById("rahcode_s");
  season =
    '<div class="project__data">' +
    '<h2 class="project__title">Instagram</h2>' +
    '<p class="project__description">:3</p>' +
    '<a rel="sponsored" href="https://www.instagram.com/milosnowcat" class="button button--flex button--white">Go<i class="uil uil-arrow-right project__icon button__icon"></i></a>' +
    "</div>" +
    '<img src="https://seasons.rahcode.com/files/2/ad.jpg" alt="ᓚᘏᗢ" class="project__img" style="border-radius: 50%;" />' +
    "<br />";
  body.innerHTML = season;

  body = document.head;
  season = "<style>:root{--hue-color:340;}</style>";
  body.innerHTML += season;
}
