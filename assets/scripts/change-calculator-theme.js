/* Script para alterar o tema da Calculadora */

const themeChanger = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function changeCalculatorTheme(data) {
  if (data.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

themeChanger.addEventListener("change", changeCalculatorTheme, false);
