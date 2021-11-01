const select = document.getElementById('select');
const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];


for(let index = 0; index < estados.length; index +=1){
    let option = document.createElement('option');
    option.innerHTML = estados[index];
    option.value = estados[index];
    select.appendChild(option);
}