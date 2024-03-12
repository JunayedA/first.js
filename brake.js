for(i=1;i<20;i++){
    // console.log(i)

    if(i>10){

        break;
        }
}

var number = 0;
while(number<20){
    console.log(number)
    number++;
    if(number>10){
        break;
    }
}

var arry= ['junayd', 'jarif', 'wlid','ibusona','galid'];
for(i=0; i<arry.length; i++){
    item= arry[i];
    if(item=='wlid'){
        // break;
        continue;
    }
    console.log(item)
}