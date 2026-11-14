// Random accent on EVERY load — like snehalpatel.in. Not persisted.
  (function () {
    var palette = [
      { name: "HOT PINK",    value: "#FF2E7E" },
      { name: "MARIGOLD",    value: "#FFB800" },
      { name: "ELECTRIC BLUE", value: "#2E9BFF" },
      { name: "VIVID ORANGE", value: "#FF6B00" },
      { name: "LIME",        value: "#9BE815" },
      { name: "PURPLE",      value: "#9B5DE5" },
      { name: "TEAL",        value: "#00C9A7" },
      { name: "SIGNAL RED",  value: "#FF4757" },
      { name: "SKY",         value: "#38C6F4" },
      { name: "TANGERINE",   value: "#FF9F1C" }
    ];
    var pick = palette[Math.floor(Math.random() * palette.length)];
    document.documentElement.style.setProperty("--accent", pick.value);
    document.documentElement.dataset.themeName = pick.name;
    window.__FP_PALETTE = palette;
    window.__FP_CURRENT = pick;
  })();

(function () {
    // Theme label + shuffle (never repeats the current colour, never persists)
    var label = document.getElementById("themeName");
    function showName() { if (label && window.__FP_CURRENT) label.textContent = "THEME: " + window.__FP_CURRENT.name; }
    showName();
    var btn = document.getElementById("shuffleBtn");
    btn.addEventListener("click", function () {
      var palette = window.__FP_PALETTE, next = window.__FP_CURRENT;
      while (next === window.__FP_CURRENT) next = palette[Math.floor(Math.random() * palette.length)];
      window.__FP_CURRENT = next;
      document.documentElement.style.setProperty("--accent", next.value);
      showName();
      btn.textContent = "↻ " + next.name + "!";
      setTimeout(function(){ btn.textContent = "↻ Change Theme"; }, 1400);
    });

    // Terminal answers — all from Farhan's real profile
    var answers = {
      who: "Farhan Pijwala — BCA Semester 5 student at Dinsha Patel College of Computer Science (DPCCS), Nadiad, Gujarat. Frontend & Full-Stack Developer. Class Representative, DPCCS — Sem 3 & Sem 4 only.",
      nexleaf: "Nexleaf — AI Career Navigator. See The Vault above for the full write-up. Repo: github.com/Farhanpijwala/Nexleaf",
      vastra: "Vastra — Clothing Mall. See The Vault above for the full write-up. Repo: github.com/Farhanpijwala/vastra-clothing-mall",
      skills: "React · TypeScript · Node.js · MySQL · PHP · JavaScript · HTML · CSS · Tailwind CSS · Express · Git & GitHub. Languages: English, Hindi, Urdu, Gujarati.",
      available: "Yes — open to remote Frontend / Full-Stack internships and available to start now, for the full duration. No relocation, remote only.",
      contact: "Email: farhanghandhi007@gmail.com\nPhone: +91 70162 28534\nGitHub: github.com/Farhanpijwala\nLinkedIn: linkedin.com/in/farhan-pijwala-63401631b\nX: x.com/Farhan_pijwala\nInstagram: instagram.com/iamfarhan_p\nPortfolio: farhanpijwala.github.io/portfolio"
    };
    var out = document.getElementById("termOutput");
    var typing = null;
    document.querySelectorAll(".chip-btn").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var text = answers[chip.getAttribute("data-q")] || "";
        if (typing) clearInterval(typing);
        out.textContent = "";
        var i = 0, cursor = document.createElement("span"); cursor.className = "cursor";
        typing = setInterval(function () {
          i += 3;
          out.textContent = text.slice(0, i);
          out.appendChild(cursor);
          if (i >= text.length) { clearInterval(typing); typing = null; }
        }, 12);
      });
    });
  })();