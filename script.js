let buttons = document.querySelectorAll("button");
let o_p = document.querySelector("#output");

let string = "";
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let str = btn.innerHTML;
        if (str === "Ans") o_p.value = eval(o_p.value);
        else if (str === "Ac") o_p.value = "";
        else if (str === "De") {
            let arrValue = o_p.value.split("");
            arrValue.pop();
            o_p.value = arrValue.join("");
        }
        else o_p.value = `${o_p.value}${str}`;

        sound(btn, o_p.value);
    });
});

function sound(e, o_p) {
    let speech = new SpeechSynthesisUtterance();
    if (e.innerHTML === "Ac") speech.text = "All clear";
    else if (e.innerHTML === "De") speech.text = "Delete";
    else if (e.innerHTML === "Ans") speech.text = `Answer is ${o_p}`;
    else if (e.innerHTML === "*") speech.text = `multiply`;
    else if (e.innerHTML === "/") speech.text = `divided`;
    else if (e.innerHTML === "-") speech.text = `subtrack`;
    else if (e.innerHTML === "%") speech.text = `modules`;
    else speech.text = e.innerHTML;

    window.speechSynthesis.speak(speech);
}