(function () {
  const accordionBtns = [
    ...document.querySelectorAll("[data-expander-toggle]"),
  ];
  const faqCheckbox = document.querySelector("#faq-checker");

  toggleAllAccordions = false;

  accordionBtns.forEach((accordionBtn) => {
    const controlId = accordionBtn.getAttribute("aria-controls");
    const accordionTarget = document.getElementById(controlId);

    accordionBtn.addEventListener("click", (e) => {
      if (toggleAllAccordions) {
        resetAccordions();
        addSettings(accordionBtn, accordionTarget);
      } else {
        if (accordionBtn.classList.contains("active")) {
          removeSettings(accordionBtn, accordionTarget);
        } else if (!accordionBtn.classList.contains("active")) {
          addSettings(accordionBtn, accordionTarget);
        }
      }
    });
  });

  faqCheckbox.addEventListener("change", (e) => {
    const checkboxTarget = e.target;
    const isChecked = checkboxTarget.checked;
    toggleAllAccordions = isChecked;
  });

  function resetAccordions() {
    accordionBtns.forEach((accordionBtn) => {
      const controlId = accordionBtn.getAttribute("aria-controls");
      const accordionTarget = document.getElementById(controlId);

      removeSettings(accordionBtn, accordionTarget);
    });
  }

  function addSettings(btn, content) {
    btn.classList.add("active");
    content.classList.add("active");
    btn.setAttribute("aria-expanded", "true");
    content.setAttribute("aria-hidden", "true");
  }

  function removeSettings(btn, content) {
    btn.classList.remove("active");
    content.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "false");
  }
})();
