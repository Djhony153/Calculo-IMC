const pessoas = []

function calc(p,a) {
    let resultado = ""
    calculoImc = p / (a * a)
    
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

function escreverPessoa() {

    const resultado = document.querySelector('.result')
    const ul = document.createElement('ul')
    ul.className = "paciente"
    const liName = document.createElement('li')
    const liAltura = document.createElement('li')
    const liPeso = document.createElement('li')
    const liImc = document.createElement('li')

    for (let i = 0; i < pessoas.length; i++) {
        liName.innerText = "Nome: " + pessoas[i].nomePaciente
        liAltura.innerText = "Altura: " + pessoas[i].alturaPessoa + " m"
        liPeso.innerText = "Peso: " + pessoas[i].pesoPessoa + " Kg"
        liImc.innerText = "IMC: " + pessoas[i].calculoImc.toFixed(2) + " > " + pessoas[i].imc
    }

    ul.append(liName, liAltura, liPeso, liImc)

    resultado.append(ul)
}

document.querySelector('.calcular').addEventListener("click", function (ev){
    ev.preventDefault()


    const nomePaciente = document.getElementById('nome').value
    const pesoPessoa = document.getElementById('peso').value
    const alturaPessoa = document.getElementById('altura').value

    let imc = calc(parseFloat(pesoPessoa), parseFloat(alturaPessoa))

    let calculoImc = pesoPessoa / (alturaPessoa * alturaPessoa)
    
    pessoas.push({nomePaciente, alturaPessoa, pesoPessoa, calculoImc ,imc})
    
    escreverPessoa()
});