const palavras = document.querySelector('#palavras')
const resultado = document.querySelector('#resultado')

function criptografar() {
  let texto = palavras.value
  let teste = texto.split('')
  for (let i = 0; i < teste.length; i++) {
    if (teste[i] === 'e') {
      teste[i] = 'enter'
    } else if (teste[i] === 'i') {
      teste[i] = 'imes'
    } else if (teste[i] === 'a') {
      teste[i] = 'ai'
    } else if (teste[i] === 'o') {
      teste[i] = 'ober'
    } else if (teste[i] === 'u') {
      teste[i] = 'ufat'
    }
  }
  let juntar = teste.join('')
  resultado.value = juntar
}

function descripto() {
  let texto = resultado.value
  let ufat = /ufat/gi
  let ober = /ober/gi
  let ai = /ai/gi
  let imes = /imes/gi
  let enter = /enter/gi

  let text = texto
    .replace(ufat, 'u')
    .replace(ober, 'o')
    .replace(ai, 'a')
    .replace(imes, 'i')
    .replace(enter, 'e')

  resultado.value = text
}

function copiar() {
  navigator.clipboard.writeText(resultado.value)
}
