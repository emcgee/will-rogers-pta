document.addEventListener("DOMContentLoaded", function () {
  var es = document.documentElement.lang === "es";

  // Mobile navigation toggle: announces its state, closes on Esc or a tap outside
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  // Homepage "Coming up" flyer wall. Each event carries data-start / data-end
  // (YYYY-MM-DD). Events that have ended hide themselves, the soonest remaining one
  // moves into the big invitation spot, and events happening today or within the
  // week get a label. Without JavaScript every event still shows, with its full date.
  var list = document.querySelector(".events");
  if (!list) return;

  var day = function (iso) {
    var p = iso.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  };
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var daysFrom = function (d) { return Math.round((d - today) / 86400000); };
  var label = {
    today: es ? "Hoy" : "Today",
    tomorrow: es ? "Mañana" : "Tomorrow",
    week: es ? "Esta semana" : "This week",
    now: es ? "Ya empezó" : "Happening now",
    last: es ? "Últimos días" : "Last days"
  };

  var upcoming = [];
  list.querySelectorAll(".event").forEach(function (item) {
    item.classList.remove("is-next");
    var start = item.dataset.start ? day(item.dataset.start) : null;
    var end = item.dataset.end ? day(item.dataset.end) : start;
    if (!start || !end) return;
    if (daysFrom(end) < 0) { item.hidden = true; return; }
    upcoming.push(item);

    var toStart = daysFrom(start), toEnd = daysFrom(end), text = "";
    if (toStart > 0) {
      text = toStart === 1 ? label.tomorrow : toStart <= 6 ? label.week : "";
    } else if (toEnd === 0) {
      text = label.today;
    } else {
      text = toEnd <= 6 ? label.last : label.now;
    }
    var status = item.querySelector(".event__status");
    if (status && text) { status.textContent = text; status.hidden = false; }
  });

  if (!upcoming.length) {
    var empty = document.querySelector(".events__empty");
    if (empty) empty.hidden = false;
    return;
  }
  var lead = document.querySelector(".events__lead");
  upcoming[0].classList.add("is-next");
  if (lead) lead.appendChild(upcoming[0]);
  var also = document.querySelector(".events__also");
  if (also && upcoming.length > 1) also.hidden = false;
});
