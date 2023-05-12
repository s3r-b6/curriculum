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
            I am a software developer with a passion for data
            structures and algorithms. I have experience developing
            applications using Java, JavaScript and MySQL and
            MariaDB and I'm currently learning Rust. I also have
            experience with HTML and CSS and some React, but my main
            interest is back-end.
            <br /> <br />
            I am seeking internship opportunities to enhance my
            skills and to gain practical exposure in the industry. I
            am highly motivated, eager to learn and ready to take on
            new challenges.
        `;

        //Personal info
        document.querySelector("#titlePersonal").textContent =
            "Personal Information";
        document.querySelector("#infoName").textContent = " 💳 Full name:";
        document.querySelector("#infoBirth").textContent = "🎂 Date of Birth:";
        document.querySelector("#infoAddress").textContent = "📫 Address:";
        document.querySelector("#infoPhone").textContent = "📞 Phone:";

        //Skills
        document.querySelector("#titleSkills").textContent =
            "Professional Skills";
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
            Soy un desarrollador de software apasionado por las estructuras
            de datos y los algoritmos. Tengo experiencia en el desarrollo de 
            aplicaciones con Java, JavaScript, MySQL y MariaDB; actualmente
            estoy aprendiendo Rust. También tengo experiencia con HTML, CSS y algo de
            React, pero mi interés principal es en back-end.
            <br /> <br />
            Estoy buscando oportunidades de prácticas para mejorar mis habilidades y 
            adquirir experiencia práctica en la industria. Estoy motivado, 
            dispuesto a aprender y listo para enfrentar nuevos desafíos.
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
