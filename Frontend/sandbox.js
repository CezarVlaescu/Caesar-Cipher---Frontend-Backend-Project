const text = document.getElementById('texted');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

const ele = document.querySelectorAll('span');

for (var i = 1; i < ele.length; i++) {
    ele[i].style.transform = "rotate(" + i * 15.7 + "deg)";
}

function encodeMessage() {
    const inputField = document.getElementById('text-text1');
    const outputField = document.getElementById('text-text2');

    const inputText = inputField.value;
    const encodedText = caesarCipher(inputText);
    outputField.value = encodedText;
}

function caesarCipher(str) {
    const decoded = {
        a: "n",
        b: "o",
        c: "p",
        d: "q",
        e: "r",
        f: "s",
        g: "t",
        h: "u",
        i: "v",
        j: "w",
        k: "x",
        l: "y",
        m: "z",
        n: "a",
        o: "b",
        p: "c",
        q: "d",
        r: "e",
        s: "f",
        t: "g",
        u: "h",
        v: "i",
        w: "j",
        x: "k",
        y: "l",
        z: "m",
    };

    str = str.toLowerCase();

    let decipher = "";
    for (let i = 0; i < str.length; i++) {
        if (decoded.hasOwnProperty(str[i])) {
            decipher += decoded[str[i]];
        } else {
            decipher += str[i];
        }
    }

    return decipher;
}


