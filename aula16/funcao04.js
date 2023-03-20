function fatorial(numero)
{
    let fat = 1
    for(i = numero; i > 1; i --)
    {
        fat *= i
    }
    return fat
}

var result = fatorial(5)

console.log(result)