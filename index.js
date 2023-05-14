window.onload = () => {
    document
        .querySelector(".interests.title")
        .addEventListener("click", () => toggleInterests());

    document
        .querySelector(".lang.esp")
        .addEventListener("click", () => langSwitch(false));

    document
        .querySelector(".lang.eng")
        .addEventListener("click", () => langSwitch(true));
};

function toggleInterests() {
    let interestsContent = document.querySelector(".interests.content");
    interestsContent.classList.toggle("inactive");
    if (!interestsContent.classList.contains("inactive")) {
        document.querySelector(".interests.title").scrollIntoView();
    }
}

function langSwitch(english) {
    const main = document.querySelector("main");

    function switchButtonsState() {
        document.querySelector(".lang.eng").classList.toggle("active");
        document.querySelector(".lang.esp").classList.toggle("active");
    }

    if (english && !main.classList.contains("eng")) {
        //English version
        switchButtonsState();

        //About me
        document.querySelector("#titleAbout").textContent = "About me";
        document.querySelector("#aboutMe").innerHTML = `
            Highly motivated software developer with a keen interest
            in data structures and algorithms with a primary focus
            on learning back-end development. Proficient in Java,
            JavaScript and SQL. Some experience with front-end
            technologies (HTML, CSS, React) and currently learning
            Rust.
            <br />
            <br />
            Seeking internship opportunities to gain expertise,
            practical industry exposure, and to contribute to
            organizational success. Eager to learn, motivated, and
            prepared to tackle new challenges head-on.

        `;

        //Personal info
        document.querySelector("#titlePersonal").textContent =
            "Personal information";
        document.querySelector("#infoName").textContent = " 💳 Full name:";
        document.querySelector("#infoBirth").textContent = "🎂 Date of Birth:";
        document.querySelector("#infoAddress").textContent = "📫 Address:";
        document.querySelector("#infoPhone").textContent = "📞 Phone:";

        //Skills
        document.querySelector("#titleSkills").textContent =
            "Professional skills";
        //TODO:

        //Education
        document.querySelector("#titleEducation").textContent = "Education";
        document
            .querySelectorAll(".info.title.degree")
            .forEach((e) => (e.textContent = "Degree:"));
        document.querySelector("#degree1").innerHTML = `
            Professional Training in Software Development <br /> 
            (Desarrollo de Aplicaciones Multiplataforma (DAM))`;
        document.querySelector("#degree2").textContent = "Degree in Musicology";
        document
            .querySelectorAll(".info.title.institution")
            .forEach((e) => (e.textContent = "Institution:"));
        document
            .querySelectorAll(".info.title.date")
            .forEach((e) => (e.textContent = "Date:"));

        //Interests
        document.querySelector("#titleInterests").textContent = "More about me";

        main.classList.toggle("eng");
    } else if (!english && main.classList.contains("eng")) {
        //Spanish version
        switchButtonsState();

        document.querySelector("#titleAbout").textContent = "Sobre mí";
        document.querySelector("#aboutMe").innerHTML = `
            Soy un desarrollador de software altamente motivado, con especial
            interés en las estructuras de datos y los algoritmos. Mi interés principal
            es el desarrollo backend. Habilidad en Java, JavaScript, SQL  y algo de
            experiencia con tecnologías frontend (HTML, CSS, React). Actualmente estoy 
            aprendiendo Rust
            <br/> <br/>
            Estoy buscando oportunidades de trabajo para adquirir experiencia 
            real en la industria y contribuir al éxito de la organización. 
            Estoy ansioso por aprender, motivado y preparado para enfrentar 
            nuevos desafíos con determinación.
            `;

        //Personal info
        document.querySelector("#titlePersonal").textContent =
            "Información personal";
        document.querySelector("#infoName").textContent = "💳 Nombre completo:";
        document.querySelector("#infoBirth").textContent =
            "🎂 Fecha de nacimiento:";
        document.querySelector("#infoAddress").textContent = "📫 Dirección:";
        document.querySelector("#infoPhone").textContent = "📞 Teléfono:";

        //Skills
        document.querySelector("#titleSkills").textContent =
            "Habilidades profesionales";
        //TODO:

        //Education
        document.querySelector("#titleEducation").textContent = "Estudios";
        document
            .querySelectorAll(".info.title.degree")
            .forEach((e) => (e.textContent = "Grado:"));
        document.querySelector("#degree1").textContent =
            "Grado superior en Desarrollo de Aplicaciones Multiplataforma (DAM)";
        document.querySelector("#degree2").textContent = "Grado en Musicología";
        document
            .querySelectorAll(".info.title.institution")
            .forEach((e) => (e.textContent = "Institución:"));
        document
            .querySelectorAll(".info.title.date")
            .forEach((e) => (e.textContent = "Fecha:"));

        //Interests
        document.querySelector("#titleInterests").textContent = "Más sobre mí";
        //TODO:

        main.classList.toggle("eng");
    } else {
        return;
    }
}
