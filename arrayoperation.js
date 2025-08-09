// 19-8 Sum of all numbers in an array using function


function sumofNumbers(numbers){
    let sum=0;
    for(const b of numbers)
        sum=sum+b;

     console.log(sum);



    // console.log(numbers);
    // return numbers;
    return sum;

}

const a=[12,14,15,16,18]
const sum=sumofNumbers(a);

console.log('Sum of numbers is:',sum);