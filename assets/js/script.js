function calcular() {
  let peso = document.getElementById('peso').value
  let altura = document.getElementById('altura').value
  let resultado = document.getElementById('resultado')
  let imc = peso / (altura * altura).toFixed(2)

  let classificacao = '';
  if (peso !== '' && altura !== ''){
    if (imc < 18.5){
        classificacao = 'abaixo do peso.';
    }else if (imc < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
    }else if (imc < 30){
        classificacao = 'levemente acima do peso.';
    }else if (imc < 35){
        classificacao = 'com obesidade grau I.';
    }else if (imc < 40){
        classificacao = 'com obesidade grau II';
    }else {
        classificacao = 'com obesidade grau III. Cuidado!!';
    }
    resultado.innerHTML = `Você está ${classificacao}`
  }else{
    resultado.innerHTML = 'PREENCHA TODOS OS CAMPOS!'
    document.getElementById('resultado').style.color = '#FFF'
    document.getElementById('resultado').style.background = 'red'
  }
}