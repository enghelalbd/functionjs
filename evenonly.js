// 19-9 Return all the even numbers of an array

function evennumsum(num){
    let sum=0;

    // console.log(num)

    for(const number of num )
    {
        // console.log(Number)

        if(number %2 ==0){
            console.log(number)
           sum=sum+number;
        }

            
    }
    return sum;
 
}

const num=[12,15,16,16,41,15] 
// evennumsum(num);
console.log(evennumsum(num));