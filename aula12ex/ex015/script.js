function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano)
    {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    }
    else
    {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked)
        {
            genero = 'Homem'
            if(idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'fotohomemcrianca.png')
            }
            else if(idade < 21)
            {
                img.setAttribute('src', 'fotohomemjovem.png')
            }
            else if(idade < 50)
            {
                img.setAttribute('src', 'fotohomemadulto.png')
            }
            else
            {
                img.setAttribute('src', 'fotohomemidoso.png')
            }
        }
        else if (fSex[1].checked)
        {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'fotomulhercrianca.png')
            }
            else if(idade < 21)
            {
                img.setAttribute('src', 'fotomulherjovem.png')
            }
            else if(idade < 50)
            {
                img.setAttribute('src', 'fotomulheradulta.png')
            }
            else
            {
                img.setAttribute('src', 'fotomulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}