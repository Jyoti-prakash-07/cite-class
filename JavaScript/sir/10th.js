num=17;
count=0;
for(let i = 1; i <= num; i++){
if (num % i === 0){
    count++;
    if(count>2){ // for evoide unnecessary iteration
        break;
    }
}
}
if(count>2){
    console.log("not prime");
}else{
    console.log("prime");
}