var numeroObj = window.document.querySelector('input#txtnumber')

var lista = window.document.querySelector('select#lista')

var res = window.document.querySelector('div#res')

var numeros = []

function adicionar()
{
    res.innerHTML = ''

    var numero = numeroObj.value

    if(numero.length == 0 || numero < 1 || numero > 100 || numeros.indexOf(Number(numero)) != -1)
    {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    else
    {
        var novoOption = window.document.createElement('option')
        novoOption.textContent = `Valor ${numero} adicionado`
    
        lista.appendChild(novoOption)
    
        numeros.push(Number(numero))
    }

    numeroObj.value = ''
    numeroObj.focus()
    
}

function finalizar()
{
    if(numeros.length == 0)
    {
        window.alert('Adicione valores antes de finalizar!')
    }
    else
    {
        numeros.sort(function(a, b) {
            return a - b;
          });
    
        var quantidade = numeros.length
        var maior = numeros[numeros.length - 1]
        var menor = numeros[0]
        var soma = 0
    
        numeros.forEach(element => {
            soma += element
        });
    
        var media = soma/quantidade
    
        res.innerHTML += `<p>Ao todo, temos ${quantidade} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
    

}

function reiniciar()
{
    numeros = []

    res.innerHTML = ''

    var reiniciar = lista.querySelectorAll('*')

    reiniciar.forEach(element => {
        element.remove()
    });
}