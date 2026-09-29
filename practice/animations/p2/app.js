const input = document.getElementById("input");
const preview = document.getElementById("preview");

let previousText = "";


/*
    Creates one animated character.
*/
function createCharacter(char, index) {

    const span = document.createElement("span");

    span.classList.add("char");
    span.classList.add("enter");

    /*
        Preserve spaces.
    */
    if (char === " ") {
        span.classList.add("space");
        span.innerHTML = "&nbsp;";
    } else {
        span.textContent = char;
    }

    /*
        Each character gets a slightly different delay.
    */
    const delay = Math.min(index * 35, 300);

    span.style.transitionDelay = `${delay}ms`;
    span.style.setProperty("--delay", `${delay}ms`);

    return span;
}


/*
    Updates the preview.
*/
function updateText(newText) {

    /*
        Find common part between
        previous text and new text.
    */
    let commonLength = 0;

    while (
        commonLength < previousText.length &&
        commonLength < newText.length &&
        previousText[commonLength] === newText[commonLength]
    ) {
        commonLength++;
    }


    /*
        -------------------------
        HANDLE REMOVED CHARACTERS
        -------------------------
    */

    const currentCharacters = [...preview.children];

    for (
        let i = currentCharacters.length - 1;
        i >= commonLength;
        i--
    ) {

        const element = currentCharacters[i];

        element.classList.remove("active");
        element.classList.add("exit");

        setTimeout(() => {

            if (element.parentNode) {
                element.remove();
            }

        }, 350);
    }


    /*
        -------------------------
        HANDLE NEW CHARACTERS
        -------------------------
    */

    for (
        let i = commonLength;
        i < newText.length;
        i++
    ) {

        const char = newText[i];

        const element = createCharacter(char, i);

        preview.appendChild(element);


        /*
            Force browser to recognize
            the starting animation state.
        */
        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                element.classList.remove("enter");
                element.classList.add("active");

            });

        });
    }


    previousText = newText;
}


/*
    Listen to typing.
*/
input.addEventListener("input", (event) => {

    updateText(event.target.value);

});