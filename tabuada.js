document.querySelector('#entTabuada').focus();
document.querySelector('#botao').addEventListener("click", event => {
    event.preventDefault();

    let cont = 1
    let erro = document.querySelector('#error');
    let tabuada = parseInt(document.querySelector("#entTabuada").value);
    let tabuadaHTML = document.querySelector("#tabuada");

    tabuadaHTML.innerHTML = "";

    if (isNaN(tabuada)) {
        erro.innerHTML = "O campo não pode está vazio. Digite apenas números.";
        erro.style.display = "block"
        tabuadaHTML.style.display = "none";
    } else if (tabuada <= 0 || tabuada >= 11) {
        erro.innerHTML = "Digite um número entre 1 e 10";
        erro.style.display = "block";
        tabuadaHTML.style.display = "none";
    } else {
        let ul = document.createElement("ul");
        while (cont <= 10) {
            let resultado = tabuada * cont;
            let li = document.createElement("li")
            li.innerHTML += `${tabuada} x ${cont} = <b>${resultado}</b>`;
            ul.appendChild(li)
            cont++
            erro.style.display = "none";
            tabuadaHTML.style.display = "block"
        }
        tabuadaHTML.appendChild(ul);
    }
})
document.querySelector('#reset').addEventListener("click", () => {

    let erro = document.querySelector('#error');
    let tabuadaHTML = document.querySelector("#tabuada");

    erro.style.display = "none";
    tabuadaHTML.style.display = "none"
    tabuadaHTML.innerHTML = "";
    document.querySelector('#entTabuada').focus();
});