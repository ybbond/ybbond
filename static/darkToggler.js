(function() {
  window.onload = function() {
    console.log("Nice! You have the privilege of toggling the dark mode :D");
    console.log("Just press the 🌞 or 🌛 logo on the top of page!");
    const toggler = document.getElementById("dark-toggler");
    const mainWrapper = document.getElementById("main-theme");

    if (toggler && mainWrapper) {
      toggler.className = "header__menu__list__toggler";
      toggler.onclick = function() {
        if (mainWrapper.className === "theme-light") {
          mainWrapper.className = "theme-dark";
          toggler.innerText = "🌛";
        } else if (mainWrapper.className === "theme-dark") {
          mainWrapper.className = "theme-light";
          toggler.innerText = "🌞";
        }
      };
    }
  }
})()