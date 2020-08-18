var saldo;
class chamada_conta{
    constructor(id, cliente,dta_abertura, saldo){
        this.id = id;
        this.cliente = cliente;
        this.dta_abertura = dta_abertura;
        this.saldo = saldo;
    }
}

function saldo(){
    document.getElementById('depresso').innerHTML = 'Seu saldo é de:'+saldo;
}

function sacar(){
    debugger    
    var valor  =document.getElementById("saca").value;;
    if (saldo <= 0 || null){
        alert("Seu saldo insuficiente seu pobre!!");
    }else if(valor>saldo){
        alert("Pobre");
    }else{
        saldo = saldo - valor;
        document.getElementById('depresso').innerHTML = 'Foi sacado:'+saldo;
    }
}


function depositar(){
    debugger
    var deposito = document.getElementById("dep1").value;


        this.deposito - deposito;
        document.getElementById('depresso').innerHTML = 'Adicionado ao seu saldo:'+deposito;
        saldo= deposito+saldo;
}


function atua(){
    var atua = document.getElementById("atua").value;

    atua1 = saldo / atua;
    fatu = atua1 + saldo;

    document.getElementById('depresso').innerHTML = 'Adicionado ao seu saldo:'+fatu;

}