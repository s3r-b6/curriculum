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
    if (english && !main.classList.contains("eng")) {
        switchButtonsState();
        main.classList.toggle("eng");
    } else if (!english && main.classList.contains("eng")) {
        switchButtonsState();
        main.classList.toggle("eng");
    } else {
        return;
    }

    function switchButtonsState() {
        document.querySelector(".lang.eng").classList.toggle("active");

        document.querySelector(".lang.esp").classList.toggle("active");
    }
}
