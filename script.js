function soma(){
    let n1 = (document.getElementById('num1').value);
    let n2 = (document.getElementById('num2').value);
    
    let resultado = n1 + n2;
    
    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}