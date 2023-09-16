function verificar() {
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    var numero = Number(num.value)
    if (numero > 0) {
        res.innerHTML = 'O número digitado é <strong> Positivo</strong>.'
    } else if (numero < 0) {
        res.innerHTML = 'O número digitado é <strong> Negativo</strong>.'
    } else if (numero == 0) {
        res.innerHTML = 'O número digitado é <strong> Zero (0)</strong>.'
    }   
}

function parImpar() {
    var num1 = document.getElementById('num1')
    var res1 = document.getElementById('res1')
    var numero1 = Number(num1.value)

    if ((numero1 % 2) == 0) {
        res1.innerHTML = 'O número digitado é <strong>Par</strong>.'
    } else {
        res1.innerHTML = 'O número digitado é <strong>Ímpar</strong>.'
    }
}

function maior() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res2 = document.getElementById('res2')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    if (num1 > num2) {
        res2.innerHTML = `O maior número digitado foi <strong>${num1}</strong>.`
    } else {
        res2.innerHTML = `O maior número digitado foi <strong>${num2}</strong>.`
    }

}

function multiCinco(){
    var num2 = document.getElementById('num2')
    var res3 = document.getElementById('res3')
    var numero2 = Number(num2.value)
    if ((numero2 % 5) == 0) {
        res3.innerHTML = 'O número digitado <strong> é </strong> multiplo de 5.'
    } else {
        res3.innerHTML = 'O número digitado <strong> não é </strong> multiplo de 5.'
    }
}

function maioridade() {
    var idade = document.getElementById('idade')
    var res4 = document.getElementById('res4')
    var idd = Number(idade.value)
    if (idd < 16) {
        res4.innerHTML = 'Você não tem idade para votar'
    } else if (idd >= 16 && idd < 18) {
        res4.innerHTML = 'Você já pode votar, porém seu voto é opcional'
    } else if (idd >= 70) {
        res4.innerHTML = 'Se volto é facultativo'
    } else {
        res4.innerHTML = 'Você é obrigado a votar'
    }

}

function acerteSenha() {
    var senha = document.getElementById('senha')
    var res5 = document.getElementById('res5')
    var acerte = Number (senha.value)
    if (acerte === 12345) {
        res5.innerHTML = 'Acesso permitido.'
    } else {
        res5.innerHTML = 'Acesso Negado.'
    }

}