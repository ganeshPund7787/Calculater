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
    });
});