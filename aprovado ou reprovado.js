function nota(var1){
    var nota = var1;

    if (nota < 38){
        return "Você foi Reprovado!!";

}else if (nota >= 38){
    (Math.ceil(nota / 5) * 5);
        return "Você Foi Aprovado!!";

}else {
        return "Aprovado";

}

}
