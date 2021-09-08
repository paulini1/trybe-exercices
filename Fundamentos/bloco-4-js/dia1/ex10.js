const custoProduto = 1;
const vendaProduto = 3;
if(custoProduto >= 0  && vendaProduto >=0){
    let totalCusto = custoProduto * 1.2;
    let lucroProduto = (vendaProduto - totalCusto) * 1000;
    console.log(lucroProduto);
    }else{
        console.log("Os valores não podem ser negativos.")
    }
