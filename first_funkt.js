function writeNumbers (number) {
    let arrNumbers = [];
    let divider = 2
    counter = 0
    while ( counter <= number - 1 ) {
        let countNumber = divider;
        if ( countNumber === 2) {
            arrNumbers.push(countNumber)
            counter++
            divider++
        };
        if ( countNumber > 2) {
            for ( i = 2; i < countNumber; i++ ) {
                if ( i + 1 === countNumber ) {  
                    arrNumbers.push(countNumber)
                    divider++           
                    counter++
                };          
                if ( countNumber % i === 0 ) {
                    divider++ 
                    break;
                };  
            };
        };
    };    
    return arrNumbers
};

console.log(writeNumbers(process.argv[2]))