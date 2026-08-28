
console.log("SCRIPT LOADED");
// ================================
// Question Option Selection
// ================================

function selectOption(button) {
    const buttons = button.parentElement.querySelectorAll("button");

    buttons.forEach(function (btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
}


// ================================
// CHAI PAGE
// ================================

function chaiYes(button) {

    selectOption(button);

    const response = document.getElementById("chaiResponse");

    if (response) {
        response.innerHTML =
            "Then maybe one day, chai ke saath thodi si baatein bhi ho jaayein. ☕❤️";
    }
}


function chaiNo(button) {

    selectOption(button);

    const response = document.getElementById("chaiResponse");

    if (response) {
        response.innerHTML =
            "That's completely okay. 🌸 No pressure at all.";
    }
}


function showChaiAnswer() {

    const answerBox = document.getElementById("chaiAnswerBox");

    if (answerBox) {
        answerBox.style.display = "block";
    }
}


// ================================
// FINAL PROPOSAL
// ================================

function sayYes() {

    const response = document.getElementById("response");

    if (response) {

        response.innerHTML = `
            <div class="yes-message">

                <div class="celebrate-heart">
                    ❤️
                </div>

                <h2>
                    I'm really glad you said yes! 🥹
                </h2>

                <p>
                    Toh phir... ek chai meri taraf se pakki. ☕❤️
                </p>

                <p>
                    Aur haan, is baar shayari bhi sunaunga. :)
                </p>

            </div>
        `;
    }

    createHearts();
}


function sayThink() {

    const response = document.getElementById("response");

    if (response) {

        response.innerHTML = `
            <div class="think-message">

                <h2>
                    Take your time 🌸
                </h2>

                <p>
                    Koi jaldi nahi hai.
                    Jo dil kahe, wahi answer dena. ❤️
                </p>

            </div>
        `;
    }
}


// ================================
// HEART ANIMATION
// ================================

function createHearts() {

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.className = "floating-heart";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 5000);
    }
}