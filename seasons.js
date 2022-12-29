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
  switch (mm) {
    case 1:
      s1();
      break;
    default:
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
