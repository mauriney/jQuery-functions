//Function para criar uma máscara no input que impede de inserir outros caracteres que não seja numeros e mantém o formato de 11 digitos (xxx.xxx.xxx-xx). Precisa tratar os pontos caso não utilize os no banco de dados.
function mascaraCPF(i){
    let v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}



//addClass(), removeClass(), toggleClass()

   // Adicionar classe:
    $("#adicionar_classe").click(function(){
        $("#paragrafo-classes").addClass("styling");
    });

    // Remover classe:
    $("#remover_classe").click(function(){
        $("#paragrafo-classes").removeClass("styling");
    });

    // Alternar classe:
    $("#alternar_classe").click(function(){
        $("#paragrafo-classes").toggleClass("styling");
    });
