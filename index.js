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
        document.querySelector("#skillsProgramming").textContent =
            "Programming Languages";
        document.querySelector("#skillsTools").textContent = "Tools";
        document.querySelector("#skillsSystems").textContent = "Systems";
        document.querySelector("#skillsOther").textContent = "Other";
        document.querySelector("#skillsEditors").textContent = "Editors";

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
        document.querySelector(".interests.content").innerHTML = `
                    <h3 class="interest title">Gaming and computers:</h3>
                    <p>
                        Cultivated a deep passion for technology through gaming
                        experiences. Constantly tweaking and modifying settings
                        on my systems. Knowledgeable in PC hardware, regularly
                        keeping up with industry trends through YouTube videos
                        and actively investing in component upgrades.
                    </p>
                    <h3 class="interest title">Development</h3>
                    <p>
                        Enthusiastic about coding, engaging in coding challenges
                        (e.g., Codewars, Advent of Code) and actively following
                        coding-related videos and streams. Currently expanding
                        skills through Rust programming language, exploring game
                        development with Bevy, REST API creation with Rocket,
                        and utilizing Tokio.
                    </p>
                    <h3 class="interest title">Music:</h3>
                    <p>
                        Studied electric guitar for 11 years, specializing in
                        jazz and progressive rock/metal. Developed discipline
                        and hard work ethic through music a lot of practice.
                        Strengthened English skills by watching online classes
                        and clinics conducted by accomplished guitarists.
                    </p>
                
`;
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
        document.querySelector("#skillsProgramming").textContent =
            "Lenguajes de programación";
        document.querySelector("#skillsTools").textContent = "Herramientas";
        document.querySelector("#skillsSystems").textContent = "Sistemas";
        document.querySelector("#skillsOther").textContent = "Otros";
        document.querySelector("#skillsEditors").textContent = "Editores";

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
        document.querySelector(".interests.content").innerHTML = `
            <h3 class="interest title">Juegos y computadoras:</h3>
            <p>
                He cultivado una profunda pasión por la tecnología a través de mis 
                experiencias en los videojuegos. Siempre estoy ajustando y modificando 
                la configuración de mis sistemas. Tengo conocimientos en hardware de PC
                y me mantengo al tanto de las últimas tendencias de la industria a través 
                de videos en YouTube. Además, invierto activamente en mejorar los 
                componentes de mi equipo.
            </p>
            <h3 class="interest title">Desarrollo:</h3>
            <p>
                Me entusiasma la programación y participo en desafíos de codificación como Codewars
                y Advent of Code. También sigo videos y transmisiones relacionadas con la programación. 
                Actualmente estoy ampliando mis habilidades con el lenguaje de programación Rust, 
                explorando el desarrollo de juegos con Bevy, la creación de API REST con Rocket y 
                utilizando Tokio.
            </p>
            <h3 class="interest title">Música:</h3>
            <p>
                Estudié guitarra eléctrica durante 11 años, especializándome en jazz, rock y metal progresivo.
                A través de la música, he desarrollado disciplina y una ética de trabajo sólida gracias a 
                muchas horas de práctica. También he mejorado mis habilidades en inglés al ver clases y 
                clínicas en línea impartidas por destacados guitarristas.
            </p>
        `;

        document.querySelector("#githubLink").textContent =
            "Ver contenido de la página";
        main.classList.toggle("eng");
    } else {
        return;
    }
}
