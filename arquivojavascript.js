function perguntaEndereco(){ 
    do{
        endereco = prompt("Insira o seu endereço:");
         confirma = confirm("Seu endereço é: " + endereco); 
      }while(!confirma); 
      alert("A página será alterada..."); 
      document.write("Seu endereço é "+endereco+".");
   }

document.write("A soma é: " + soma());

function soma(){
    let number1 = "10";
    let number2= "20";

    return number1 + number2;
}


function alertar(){
    alert("Opa!!! Olha o alerta!!!");
}

function confirma(){ 
	resposta = confirm("Confirma"); 
	if(resposta==1){
	  return true;
	}else {
	  return false;
}

   

}
