function tabuada()
{
    var numero = window.document.querySelector('input#txtnro')
    numero = numero.value

    var res = window.document.querySelector('div#res')

    var lista = window.document.createElement('lu')
    lista.id = 'lista'
    res.appendChild(lista)
    lista.innerHTML = ''

    if(numero.length == 0)
    {
        window.alert(`Por favor, digite um numero!!`)
    }
    else
    {
        for(i = 1; i <= 10; i++)
        {
            var soma = numero*i
            var novaLinha = window.document.createElement('li')
            novaLinha.textContent = `${numero} x ${i} = ${soma}`
            lista.appendChild(novaLinha)
        
        }
    }   
}
