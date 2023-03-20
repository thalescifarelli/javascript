function fatorial(numero)
{
    if(numero == 1)
    {
        return 1
    }
    else
    {
        return numero * fatorial(numero-1)
    }
}


var result = fatorial(5)

console.log(result)