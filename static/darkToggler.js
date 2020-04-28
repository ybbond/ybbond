(function() {
  window.onload = function() {
    const toggler = document.getElementById("dark-toggler");
    const mainWrapper = document.getElementById("main-theme");
    const currentTheme = localStorage.getItem("theme");

    if (toggler && mainWrapper) {
      toggler.className = "header__menu__list__toggler";
      toggler.onclick = function() {
        if (mainWrapper.className === "theme-light") {
          mainWrapper.className = "theme-dark";
          localStorage.setItem("theme", "dark");
          toggler.innerText = "🌛";
        } else if (mainWrapper.className === "theme-dark") {
          mainWrapper.className = "theme-light";
          localStorage.setItem("theme", "light");
          toggler.innerText = "🌞";
        }
      };
    }

    if (currentTheme && currentTheme === "light") {
      mainWrapper.className = "theme-light";
      toggler.innerText = "🌞";
    }

    console.log("Nice! You have the privilege of toggling the dark mode :D");
    console.log("Just press the 🌞 or 🌛 logo on the top of page!");
  }
})()