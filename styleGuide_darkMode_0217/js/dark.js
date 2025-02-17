window.addEventListener("load", function () {
  const toggleTheme = this.document.getElementById("toggleTheme");
  toggleTheme.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    document.querySelector("header").classList.toggle("dark");
    document.querySelector("footer").classList.toggle("dark");
    // button
    document.querySelectorAll(".button").forEach((button) => {
        // {}이거 없으면 return 안써도 됨.
      // console.log(button);
      button.classList.toggle("dark");
      const isDark = button.classList.contains("dark")
      const emoji = button.querySelector("#modeEmoji")
      if(emoji) emoji.textContent = isDark ? "🌙" : "☀"
      const label = button.querySelector("span:last-child")
      if(label) label.textContent = isDark ? "다크모드" : "라이트모드"
    });
    
  });
});
