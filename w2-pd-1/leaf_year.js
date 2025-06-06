
function leafYear (year)
{
    if (year %4 == 0 && year % 100 != 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(leafYear(2024))  // true 
console.log(leafYear(2025))  // flase 

