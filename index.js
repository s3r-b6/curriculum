window.onload = () => {
    document
        .querySelector(".interests.title")
        .addEventListener("click", () => toggleInterests());

    document
        .querySelector("button.pdf")
        .addEventListener("click", () => alert("test"));
    //TODO: Crear documento PDF

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

    //TODO: Arreglar textos
    if (!english && main.classList.contains("eng")) {
        //Spanish version
        switchButtonsState();

        document.querySelector("#subtitle").textContent =
            "Desarrollador de software";
        document.querySelector("#titleAbout").textContent = "Sobre mí";
        document.querySelector("#aboutMe").innerHTML = `
            Soy un desarrollador de software motivado y con especial
            interés en las estructuras de datos y los algoritmos. Mi
            principal interés es el desarrollo backend. Familiaridad
            con Java, JavaScript y SQL; tengo experiencia con
            tecnologías frontend (HTML, CSS, React). Actualmente
            aprendiendo Rust.
            <br />
            <br />
            Estoy buscando oportunidades de trabajo para adquirir
            experiencia en la industria e iniciar mi carrera
            laboral. Tengo muchas ganas de aprender, estoy motivado
            y preparado para enfrentar nuevos desafíos.
            <br />
            <br />
            Nivel alto de inglés. Nivel bajo de alemán.
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
        document.querySelector("#learningRust").textContent =
            "Aprendiendo Rust";
        document.querySelector("#skillsSystems").textContent = "Sistemas";
        document.querySelector("#skillsOther").textContent = "Otros";
        document.querySelector("#skillsEditors").textContent = "Editores";
        document.querySelector("#skillsOffice").textContent = "Ofimática";

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
            <h3 class="interest title">Juegos y ordenadores:</h3>
            <p>
                A través de mi experiencia con los videojuegos he cultivado
                una gran pasión por la tecnología. Disfruto configurando y
                modificando mi hardware e intento mantenerme al día de las
                últimas novedades. He utilizado mucho ordenadores, tanto por
                ocio como por estudios, por lo que me siento muy cómodo
                delante de uno.
            </p>
            <h3 class="interest title">Desarrollo:</h3>
            <p>
                Me gusta programar. Sigo vídeos y streams relacionados con
                la programación, y a menudo trato de resolver katas de
                programación (Advent of Code, Codewars). Ahora estoy
                aprendiendo algo de Rust y sigo profundizando en Java.
                Recientemente he comenzado un nuevo proyecto personal que
                consiste en escribir un pequeño lenguaje interpretado en
                Java (el código está disponible en mi GitHub) para entender
                cómo funcionan esta clase de lenguajes.
            </p>
            <h3 class="interest title">Música:</h3>
            <p>
                He estudiado guitarra (eléctrica, principalmente) durante 11
                años. Mis géneros de música favoritos son el jazz y el metal
                progresivo. A través de la música he trabajado mucho mi
                disciplina y mi concentración y he mejorado mucho mis
                habilidades en inglés a través de clases impartidas por
                destacados guitarristas.
            </p>
        `;

        document.querySelector("#githubLink").textContent =
            "Ver código del documento";
        main.classList.toggle("eng");
    } else if (english && !main.classList.contains("eng")) {
        //English version
        switchButtonsState();

        //About me
        document.querySelector("#titleAbout").textContent = "About me";
        document.querySelector("#aboutMe").innerHTML = `
            I'm a highly motivated software developer with a keen interest
            in data structures and algorithms with a primary focus
            on learning back-end development. I am familiar with Java,
            JavaScript and SQL; I have some experience with front-end
            technologies (HTML, CSS, React) and currently I am learning
            Rust.
            <br />
            <br />
            Currently seeking internship opportunities to gain expertise,
            practical industry exposure, and to contribute to
            organizational success. Eager to learn, motivated, and
            prepared to tackle new challenges head-on.
            <br />
            <br />
            My first language is spanish. High level of english and low level
            of german.
        `;

        document.querySelector("#subtitle").textContent = "Software developer";

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
        document.querySelector("#learningRust").textContent = "Learning Rust";
        document.querySelector("#skillsSystems").textContent = "Systems";
        document.querySelector("#skillsOther").textContent = "Other";
        document.querySelector("#skillsEditors").textContent = "Editors";
        document.querySelector("#skillsOffice").textContent = "Office Software";

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
                        I cultivated a deep passion for technology through my gaming
                        experiences. Constantly tweaking and modifying settings
                        on my systems. Knowledgeable in PC hardware, regularly
                        keeping up with industry trends through videos and streams
                        and I spend a lot of time in front of my computer.
                    </p>
                    <h3 class="interest title">Development</h3>
                    <p>
                        Enthusiastic about coding I try to engage in coding challenges
                        (e.g., Codewars, Advent of Code) frequently; and actively 
                        following coding-related videos and streams. I am currently learning
                        Rust and still studying Java. My last personal project consists of
                        writing a small interpreted language, to learn about this kind of 
                        language (code is available on my GitHub).
                    </p>
                    <h3 class="interest title">Music:</h3>
                    <p>
                        I studied electric guitar for 11 years, specializing in
                        jazz and progressive rock/metal. Developed discipline
                        and a hard work ethic through a lot of practice.
                        Learnt a lot by watching online classes and clinics 
                        conducted by accomplished international guitarists.
                    </p>
`;
        document.querySelector("#githubLink").textContent =
            "See code of the document";
        main.classList.toggle("eng");
    } else {
        return;
    }
}
