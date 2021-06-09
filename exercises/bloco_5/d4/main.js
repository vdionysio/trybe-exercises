/*
As pessoas devem ter o poder de alterar:
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ).
Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
*/
window.onload = function(){
  let bgColor = document.createElement("input");
  let txtColor = document.createElement("input");
  let fontSize = document.createElement("input");
  let lineHeight = document.createElement("input");
  let fontFamily = document.createElement("input");

  let arr = [bgColor, txtColor, fontSize, lineHeight, fontFamily]
  let arrStr = ["background-color", "text-color", "font-size", "line-height", "font-family"]

  for (let i = 0; i < arr.length; i += 1) {
    let inp = localStorage.getItem(arrStr[i])
    
    switch(i) {
      case 0:
        document.body.style.backgroundColor = inp
        break;
      case 1:
        document.body.style.color = inp
        break;
      case 2:
        document.body.style.fontSize = inp
        break;
      case 3:
        document.body.style.lineHeight = inp
        break;
      case 4:
        document.body.style.fontFamily = inp;
        break;
    }
    
    
    
    
    
  }

  for (let i = 0; i < arr.length; i += 1) {
    let div = document.createElement('div');
    div.className = arrStr[i];
    let btn = document.createElement('button')
    btn.className = arrStr[i];
    btn.innerHTML = 'Change'
    arr[i].className = arrStr[i];
    
    arr[i].placeholder = arrStr[i];
    document.body.appendChild(div);
    document.getElementsByClassName(arrStr[i])[0].appendChild(arr[i])
    document.getElementsByClassName(arrStr[i])[0].appendChild(btn)
  }

  for (let i = 0; i < arr.length; i += 1) {
    let btn = document.getElementsByClassName(arrStr[i])[2];
    btn.addEventListener('click', function() {
      let inp = document.getElementsByClassName(arrStr[i])[1];
      let text = document.getElementsByClassName("text")[0];
      
      localStorage.setItem(arrStr[i], inp.value)
      if (i==0) {document.body.style.backgroundColor = inp.value;}
      else if (i==1) {document.body.style.color = inp.value;}
      else if (i==2) {document.body.style.fontSize = inp.value + 'px';}
      else if (i==3) {document.body.style.lineHeight = inp.value + 'px';}
      else {document.body.style.fontFamily = inp.value;}
    });
  }
}
