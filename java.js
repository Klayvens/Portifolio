

const themeButton = document.getElementById("themeButton");
const themeIcon = themeButton.querySelector("i");
const root = document.documentElement;



function aplicarTema(modoEscuro) {

    if (modoEscuro) {


        root.style.setProperty("--background", "#07101f");
        root.style.setProperty("--background-secondary", "#0b172b");
        root.style.setProperty("--card", "#101e33");

        root.style.setProperty("--text", "#ffffff");
        root.style.setProperty("--text-secondary", "#9eabc0");
        root.style.setProperty(
            "--border",
            "rgba(255,255,255,0.09)"
        );
        root.style.setProperty(
            "--shadow",
            "rgba(0,0,0,0.30)"
        );

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    } else {

       

        root.style.setProperty("--background", "#f4f6fa");
        root.style.setProperty("--background-secondary", "#ffffff");
        root.style.setProperty("--card", "#ffffff");

        root.style.setProperty("--text", "#172033");
        root.style.setProperty("--text-secondary", "#5d687a");
        root.style.setProperty(
            "--border",
            "rgba(0,0,0,0.10)"
        );
        root.style.setProperty(
            "--shadow",
            "rgba(0,0,0,0.15)"
        );

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );
    }
}



const temaSalvo =
    localStorage.getItem("portfolio-theme");

if (temaSalvo === "light") {
    aplicarTema(false);
} else {
    aplicarTema(true);
}



themeButton.addEventListener("click", function () {

    const temaAtual =
        localStorage.getItem("portfolio-theme");

    if (temaAtual === "dark") {
        aplicarTema(false);
    } else {
        aplicarTema(true);
    }

});




const elements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill, .project, .contact-inner"
);

elements.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach(function (element) {
    observer.observe(element);
});




const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        alert(
            "Mensagem preparada! Para receber mensagens de verdade, conecte este formulário a um serviço de formulário ou backend."
        );

        contactForm.reset();
    }
);
