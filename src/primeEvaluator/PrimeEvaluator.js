import "./PrimeEvaluator.css"

export function primeNumberCheck(number){
    if (number !=undefined){
        if (number<=1)return "This is not a prime number.";
        const prime=divideNumber(number);
        if(prime){
            return <h5 >{number} is a prime number.</h5>       
        }
        if (number==undefined) return " ";
        
        else return <h5 id="notPrime">{number} is not a prime number.</h5>
    }
}

   const divideNumber=(number)=>{
       const prime=true;
       var divideWith = 2;
       const sqrRootOfNumber = Math.sqrt(number);
    
       while (divideWith <= sqrRootOfNumber && prime)
       {
           var check = number % divideWith;
           if (number % divideWith == 0) return !prime;
           divideWith++;
       }
       return prime;
   }
    
   const primeNumberCheckBool=(number)=>{
       if (number <= 1) return false;
       if (number % 2 == 0 && number != 2) return false;
       const prime = divideNumber(number);
       if (prime)
       {
           return true;
       }
       else return false;
    }   

    export function nextPrimeNumber(number){           
        if (number==null || number==0){ return ("")}   

        var isNumberprime = false;
        var nextNumber= ++number;

            while (!isNumberprime)
            {
                isNumberprime = primeNumberCheckBool(nextNumber);
                if (!isNumberprime) {
                   ++nextNumber;
                }
            } 
            return(
                <div className="nextPrimeBubble">
                    <div className="innerbubble">
                    <h5>Next prime number:</h5>
                    <h2>{nextNumber}</h2>
                    </div>
                </div>
            ) 
    }
     