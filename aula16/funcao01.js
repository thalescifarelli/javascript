function parimpar(numero)
{
    if(numero%2 == 0)
    {
        return `O numero é par`
    }
    else
    {
        return `O numero é impar`
    }
}

let result = parimpar(30)

console.log(result)