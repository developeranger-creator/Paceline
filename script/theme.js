(function () {

    const savedTheme = localStorage.getItem("paceline-theme");

    if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
    }

})();

document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.querySelector(".theme-toggle");

    if (!themeToggle) return;

    const currentTheme =
        document.documentElement.dataset.theme || "light";

    updateThemeButton(currentTheme);

    themeToggle.addEventListener("click", () => {

        const current =
            document.documentElement.dataset.theme || "light";

        const newTheme =
            current === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = newTheme;

        localStorage.setItem("paceline-theme", newTheme);

        updateThemeButton(newTheme);

    });

    function updateThemeButton(theme) {

        const isDark = theme === "dark";

        themeToggle.setAttribute(
            "aria-pressed",
            String(isDark)
        );

        themeToggle.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light theme"
                : "Switch to dark theme"
        );
    }

});