for(let i=2; i<=100; i++){
    let count=0;
    for(let j=2; j<=i/2; j++){
        if(i%j==0){
            count++;
            break;
        }
    }
    if(count==0){
        console.log(i);
    }
}