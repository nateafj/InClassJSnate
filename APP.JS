const bankStatement = [1024 , -3200, 2340, -500, 100]
let posArray = [1024 , -3200, 2340, -500, 100];
let result = posArray.filter(negFilter);
function negFilter(x){
    return x >= 0;
}
console.log(result);

