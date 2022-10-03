function writeNumbers (number) {
    let countNumber = 2;
    let arrNumbers = [];
    while ( arrNumbers.length + 1 <= number ) {
        if ( countNumber === 2) {
            arrNumbers.push(countNumber)
            countNumber++
        } 
        if ( countNumber > 2) {
            for ( i = 2; i < countNumber; i++ ) {
                // console.log(arrNumbers)
                if ( countNumber % i === 0 ) break;
                if ( i === countNumber - 1 ) { 
                    arrNumbers.push(countNumber)
                    countNumber++
                };                
            };
        };
    };
    
    return arrNumbers
};

writeNumbers(process.argv[2])