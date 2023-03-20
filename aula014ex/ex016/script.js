function contar()
{
    var inicio = window.document.querySelector('input#txtIni')
    inicio = inicio.value
    var fim = window.document.querySelector('input#txtFim')
    fim = fim.value
    var intervalo = window.document.querySelector('input#txtInt')
    intervalo = intervalo.value

    var result = window.document.querySelector('div#res')

    var contagem = ''

    if(intervalo == 0)
    {
        window.alert('Intervalo invalido! Considerando INTERVALO 1')
        intervalo = '1'
    }

    if(inicio.length == 0 || fim.length == 0 || intervalo.length == 0)
    {
        result.innerHTML = `<p>Impossivel contar!!</p>`
    }
    else
    {

        if (inicio < fim)
        {
            for(var i = Number(inicio); i <= Number(fim); i += Number(intervalo))
            {
                contagem = contagem + (`${i} \u{1F449}`)
            }
        }
        else
        {
            for(var i = Number(inicio); i >= Number(fim); i -= Number(intervalo))
            {
                contagem = contagem + (`${i} \u{1F449}`)
            }
        }

    result.innerHTML = `<p>Contando:<br>${contagem}\u{1F3C1}</p>`
    }
    
}

