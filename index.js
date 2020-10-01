const shareBtn = document.querySelector(".share");

const test = document.querySelector(".test");

document.addEventListener("DOMContentLoaded", () => {
  let isShown = true;

  shareBtn.addEventListener("click", () => {
    const rect = shareBtn.getBoundingClientRect();
    console.log({
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    });

    if (isShown) {
      test.classList.remove("visible");
      test.classList.add("hidden");
      isShown = false;
    } else {
      test.classList.remove("hidden");
      test.classList.add("visible");
      isShown = true;
    }
  });
});
