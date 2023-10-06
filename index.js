const pessoas = []

function calc(p,a) {
    let resultado = ""
    calculoImc = p / (a * a)

    console.log(p,a)
    console.log(calculoImc)
    
    if (calculoImc < 18.5) {
        resultado = "Abaixo do Peso!"
    } else if (calculoImc >= 18.5 && calculoImc <= 24.9) {
        resultado = "Peso Normal"
    } else if (calculoImc >= 25.0 && calculoImc <= 29.9) {
        resultado = "Pré-obesidade"
    } else if (calculoImc >= 30.0 && calculoImc <= 34.9) {
        resultado.valeu = "Obesidade Grau 1"
    } else if (calculoImc >= 35.0 && calculoImc <= 39.9) {
        resultado = "Obesidade Grau 2"
    } else {
        resultado = "Obesidade Grau 3"
    }

    return resultado
};

document.querySelector('.calcular').addEventListener("click", function (ev){
    ev.preventDefault()

    const resultado = document.querySelector('.result input')
    const nomePaciente = document.getElementById('nome').value
    const pesoPessoa = document.getElementById('peso').value
    const alturaPessoa = document.getElementById('altura').value

    let imc = calc(
        parseFloat(pesoPessoa),
        parseFloat(alturaPessoa)
    );

    resultado.value = calc(
        parseFloat(pesoPessoa),
        parseFloat(alturaPessoa)
    );

    pessoas.push({nomePaciente, alturaPessoa, pesoPessoa, imc})
    
});



