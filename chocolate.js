let m=8;
let arr=[4,5,0,1,9,0,5,0];
let result=Function(m,arr)
console.log(result);
function Function(m,arr){
    let index=0;
    for(let i=0;i<m;i++){
        if(arr[i]==0){
            continue;
        }
        else{
            arr[index]=arr[i];
            index++;
        }
    }
    while(index<m){
        arr[index]=0;
        index++;
    }
    return arr;
}
