let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

num.push(1)

num.sort()

console.log(num)


for(i = 0; i < num.length; i++)
{
    console.log(num[i])
}

console.log('/////////////////////')

num.forEach(element => {
    console.log(element)
});

console.log('/////////////////////')

for(var pos in num)
{
    console.log(num[pos])
}

console.log('/////////////////////')


console.log(num.indexOf(3))