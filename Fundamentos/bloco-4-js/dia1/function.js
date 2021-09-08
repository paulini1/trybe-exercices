function printGreeting(name){
console.log('olá, ' +name );

}
printGreeting('Paulini');

function makeGreeting(name){
    return 'eai ' + name + '? Tudo bem com você?';
}
let greeting = makeGreeting('Guilherme');
console.log(greeting);

function sum(num1, num2){
    return num1+num2;
}

function canDrive(age){
    if( age>=18){
        return true;
    }else{
        return false;
    }
}
