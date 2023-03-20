function tabuada()
{
    var res = window.document.querySelector('div#res')
    var limpar = res.querySelectorAll('*')

        limpar.forEach(element => {
        element.remove()
        });


    var numero = window.document.querySelector('input#txtnro')
    numero = numero.value

    var lista = window.document.createElement('select')
    lista.id = 'lista'
    lista.size = 10
    res.appendChild(lista)

    lista.innerText = ''

    if(numero.length == 0)
    {
        window.alert(`Por favor, digite um numero!!`)

        var limpar = res.querySelectorAll('*')

        limpar.forEach(element => {
        element.remove()
        });

    }
    else
    {
        for(i = 1; i <= 10; i++)
        {
            var soma = numero*i
            var novaLinha = window.document.createElement('option')
            novaLinha.textContent = `${numero} x ${i} = ${soma}`
            lista.appendChild(novaLinha)
        
        }
    }   
}
