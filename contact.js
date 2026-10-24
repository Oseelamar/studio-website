// Contact page: copy-the-email button, gentle validation, and sending the enquiry in place
// (no email app, no new page). The form posts JSON to its data-endpoint.
(function () {
  // Copy the email address
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    var hint = btn.querySelector(".enquiry__copy-hint");
    btn.addEventListener("click", function () {
      var done = function () {
        btn.classList.add("is-copied");
        if (hint) hint.textContent = "Copied";
        setTimeout(function () { btn.classList.remove("is-copied"); if (hint) hint.textContent = "Copy"; }, 1800);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(btn.dataset.copy).then(done, function () {});
    });
  });

  var form = document.querySelector(".enquiry-form");
  if (!form) return;
  var done = document.querySelector(".enquiry-done");
  var failed = form.querySelector(".enquiry-form__failed");
  var submit = form.querySelector(".enquiry-form__submit");
  var submitLabel = form.querySelector("[data-submit-label]");
  var emailOk = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); };

  // Show an error under a field only after the person has had a go at it
  function check(input) {
    var v = input.value.trim();
    var ok = input.name === "email" ? emailOk(v) : v.length > 0;
    var field = input.closest(".field");
    field.classList.toggle("is-invalid", !ok);
    input.setAttribute("aria-invalid", ok ? "false" : "true");
    var err = form.querySelector('[data-error-for="' + input.name + '"]');
    if (err) {
      err.id = err.id || "err-" + input.name;
      input.setAttribute("aria-describedby", err.id);
    }
    return ok;
  }
  form.querySelectorAll("[required]").forEach(function (input) {
    input.addEventListener("blur", function () { if (input.value) check(input); });
    input.addEventListener("input", function () { if (input.closest(".field").classList.contains("is-invalid")) check(input); });
  });

  // Let the message box grow with the text instead of scrolling inside itself
  var area = form.querySelector("textarea");
  if (area) area.addEventListener("input", function () { area.style.height = "auto"; area.style.height = area.scrollHeight + "px"; });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    failed.hidden = true;
    var firstBad = null;
    form.querySelectorAll("[required]").forEach(function (input) {
      if (!check(input) && !firstBad) firstBad = input;
    });
    if (firstBad) { firstBad.focus(); return; }

    var data = new FormData(form);
    var payload = {
      name: (data.get("name") || "").trim(),
      email: (data.get("email") || "").trim(),
      company: (data.get("company") || "").trim(),
      services: data.getAll("services"),
      budget: data.get("budget") || "",
      message: (data.get("message") || "").trim(),
      website: data.get("website") || "", // spam trap
      page: location.href,
    };

    form.classList.add("is-sending");
    submit.disabled = true;
    submitLabel.textContent = "Sending…";

    fetch(form.dataset.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (res) { if (!res.ok) throw new Error(res.status); })
      .then(function () {
        done.querySelector("[data-done-name]").textContent = payload.name ? ", " + payload.name.split(" ")[0] : "";
        done.querySelector("[data-done-email]").textContent = payload.email;
        form.classList.add("is-leaving");
        setTimeout(function () {
          form.hidden = true;
          done.hidden = false;
          requestAnimationFrame(function () { done.classList.add("is-shown"); });
          done.focus({ preventScroll: true });
          done.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 350);
      })
      .catch(function () {
        failed.hidden = false;
        submit.disabled = false;
        submitLabel.textContent = "Send message";
        form.classList.remove("is-sending");
      });
  });
})();
