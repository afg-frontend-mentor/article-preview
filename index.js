const button = document.querySelector("#button");

const tooltip = document.querySelector("#tooltip");

Popper.createPopper(button, tooltip, {
  placement: "top",
  modifiers: [
    {
      name: "preventOverflow",
      options: {
        mainAxis: false, // true by default
      },
    },
    {
      name: "offset",
      options: {
        offset: [0, 16],
      },
    },
  ],
});

function show() {
  tooltip.setAttribute("data-show", "");
}

function hide() {
  tooltip.removeAttribute("data-show");
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

showEvents.forEach((event) => {
  button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  button.addEventListener(event, hide);
});
