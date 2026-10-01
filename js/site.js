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

  // ---- Dates that keep themselves current ----
  // Anything with data-start / data-end (YYYY-MM-DD) gets a status label
  // ("Today", "This week", "Last days"...) and knows when it has ended.
  //   .events / .up-list items: hide once ended (flyer walls, compact lists)
  //   .page-intro: shows its .ended-note and drops its buttons once ended
  //   .timeline items (data-date): marked past; the next one is highlighted
  // Without JavaScript everything still shows, with its full written date.
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

  // Returns false once the item has ended; otherwise sets its status label.
  var mark = function (item) {
    var start = item.dataset.start ? day(item.dataset.start) : null;
    var end = item.dataset.end ? day(item.dataset.end) : start;
    if (!start || !end) return true;
    if (daysFrom(end) < 0) return false;
    var toStart = daysFrom(start), toEnd = daysFrom(end), text = "";
    if (toStart > 0) {
      text = toStart === 1 ? label.tomorrow : toStart <= 6 ? label.week : "";
    } else if (toEnd === 0) {
      text = label.today;
    } else {
      text = toEnd <= 6 ? label.last : label.now;
    }
    var status = item.querySelector(".event__status, .status-pill");
    if (status && text) { status.textContent = text; status.hidden = false; }
    return true;
  };

  // Flyer walls (homepage, events page): the soonest event becomes the invitation
  document.querySelectorAll(".events").forEach(function (list) {
    var scope = list.closest("section") || document;
    var upcoming = [];
    list.querySelectorAll(".event").forEach(function (item) {
      item.classList.remove("is-next");
      if (mark(item)) upcoming.push(item); else item.hidden = true;
    });
    if (!upcoming.length) {
      var empty = scope.querySelector(".events__empty");
      if (empty) empty.hidden = false;
      return;
    }
    var lead = scope.querySelector(".events__lead");
    if (lead) {
      upcoming[0].classList.add("is-next");
      lead.appendChild(upcoming[0]);
    }
    var also = scope.querySelector(".events__also");
    if (also && upcoming.length > (lead ? 1 : 0)) also.hidden = false;
  });

  // Compact "coming up" lists
  document.querySelectorAll(".up-list").forEach(function (list) {
    var shown = 0;
    list.querySelectorAll("li").forEach(function (item) {
      if (mark(item)) shown++; else item.hidden = true;
    });
    var empty = list.parentNode.querySelector(".up-empty");
    if (empty && !shown) empty.hidden = false;
  });

  // Event page intros
  document.querySelectorAll(".page-intro[data-start]").forEach(function (intro) {
    if (!mark(intro)) {
      intro.classList.add("is-ended");
      var note = intro.querySelector(".ended-note");
      if (note) note.hidden = false;
    }
  });

  // Timelines (PTA meetings): past items marked, the next one highlighted
  document.querySelectorAll(".timeline").forEach(function (list) {
    var next = null;
    list.querySelectorAll("li[data-date]").forEach(function (item) {
      if (daysFrom(day(item.dataset.date)) < 0) item.classList.add("is-past");
      else if (!next) { next = item; item.classList.add("is-next"); }
    });
    if (next) {
      document.querySelectorAll("[data-next-date]").forEach(function (el) {
        el.textContent = next.querySelector(".timeline__date").textContent;
      });
    }
  });
});
