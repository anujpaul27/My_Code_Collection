var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

for (let i=1; i<numbers.length; i++)
{   
    var bigNumber = numbers[0]
    if (bigNumber < numbers[i])
    {
        bigNumber = numbers[i];
    }
}

console.log(bigNumber)

