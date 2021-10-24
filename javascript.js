var backend = 0
var frontend = 0
var naosei = 0

//deixa os divs escondidos (hidden/visible)
document.getElementById("frontend").style.visibility='hidden' 
document.getElementById("backend").style.visibility='hidden' 
document.getElementById("naosei").style.visibility='hidden'
//------//


//slidebar 
var barra = document.getElementById("barra"); //a propria barra
var final = document.getElementById("final"); //resultado

final.innerHTML = barra.value




barra.oninput = function()
{
    var resultado = final.innerHTML = this.value;
    return resultado;
}

var valor_barra = barra.value



//--------//




        


        //Javascript Questoes//
 


        
        function  Desabilitar1()
        {
            document.getElementById("r1_1").disabled = true
            document.getElementById('r1_2').disabled = true
            document.getElementById('r1_3').disabled = true 
        }

        function Desabilitar2() {
            document.getElementById("r2_1").disabled = true
            document.getElementById('r2_2').disabled = true
            document.getElementById('r2_3').disabled = true 
        }
        
        function Desabilitar3(){
            document.getElementById("r3_1").disabled = true
            document.getElementById('r3_2').disabled = true
            document.getElementById('r3_3').disabled = true 
        }

        function Desabilitar4() {
            document.getElementById("r4_1").disabled = true
            document.getElementById('r4_2').disabled = true
            document.getElementById('r4_3').disabled = true 
        }
        


            //Caso o botao 1 da primeira pergunta seja clicado
            document.getElementById("r1_1").onclick = function (){
                Desabilitar1()
                this.style.background = "red";
                document.getElementById("r1_2").style.opacity = "0.5"
                document.getElementById("r1_3").style.opacity = "0.5"
                backend += 1
            }

            //caso o botao 2 da primeira pergunta seja clicado
            document.getElementById("r1_2").onclick = function (){
                Desabilitar1()
                this.style.background = "red";
                document.getElementById("r1_1").style.opacity = "0.5"
                document.getElementById("r1_3").style.opacity = "0.5"
                frontend += 1
            }

            //caso o botao 3 da primeira pergunta seja clicado
                document.getElementById("r1_3").onclick = function (){
                    Desabilitar1()
                    this.style.background = "red";
                    document.getElementById("r1_1").style.opacity = "0.5"
                    document.getElementById("r1_2").style.opacity = "0.5"
                    naosei += 1
                }

            //caso o botao 1 da segunda pergunta seja clicado
            document.getElementById("r2_1").onclick = function (){
                Desabilitar2()
                this.style.background = "red";
                document.getElementById("r2_2").style.opacity = "0.5"
                document.getElementById("r2_3").style.opacity = "0.5"
                frontend += 1
            }

            //caso o botao 2 da segunda pergunta seja clicado 
            document.getElementById("r2_2").onclick = function (){
                Desabilitar2()
                this.style.background = "red";
                document.getElementById("r2_3").style.opacity = "0.5"
                document.getElementById("r2_1").style.opacity = "0.5"
                backend += 1
            }

            //caso o bota 3 da segunda pergunta seja clicado
            document.getElementById("r2_3").onclick = function (){
                Desabilitar2()
                this.style.background = "red";
                document.getElementById("r2_1").style.opacity = "0.5"
                document.getElementById("r2_2").style.opacity = "0.5"
                naosei += 1
            }

            //caso o bota 1 da terceira pergunta seja clicado 
            document.getElementById("r3_1").onclick = function (){
                Desabilitar3()
                this.style.background = "red";
                document.getElementById("r3_2").style.opacity = "0.5"
                document.getElementById("r3_3").style.opacity = "0.5"
                frontend += 1
            }

            //caso o bota 2 da terceira pergunta seja clicado
            document.getElementById("r3_2").onclick = function (){
                Desabilitar3()
                this.style.background = "red";
                document.getElementById("r3_1").style.opacity = "0.5"
                document.getElementById("r3_3").style.opacity = "0.5"
                backend += 1
            }

            //caso o botao 3 da terceira pergunta seja clicado
            document.getElementById("r3_3").onclick = function (){
                Desabilitar3()
                this.style.background = "red";
                document.getElementById("r3_2").style.opacity = "0.5"
                document.getElementById("r3_1").style.opacity = "0.5"
                naosei += 1
            }

            //caso o botao 1 da quarta pergunta seja clicado
            document.getElementById("r4_1").onclick = function (){
                Desabilitar4()
                this.style.background = "red";
                document.getElementById("r4_2").style.opacity = "0.5"
                document.getElementById("r4_3").style.opacity = "0.5"
                backend += 1
            }

            //caso o botao 2 da quarta pergunta seja clicado
            document.getElementById("r4_2").onclick = function (){
                Desabilitar4()
                this.style.background = "red";
                document.getElementById("r4_1").style.opacity = "0.5"
                document.getElementById("r4_3").style.opacity = "0.5"
                frontend += 1
            }

            //caso o botao 3 da quarta pergunta seja clicado 
            document.getElementById("r4_3").onclick = function (){
                Desabilitar4()
                this.style.background = "red";
                document.getElementById("r4_2").style.opacity = "0.5"
                document.getElementById("r4_1").style.opacity = "0.5"
                naosei += 1
            }
            



        //-------//

        //Exibir resultado para o usuario//
        



        document.getElementById('resultado').onclick = function (){


            if(backend + frontend + naosei >= 4)
            {
                //contar o valor da barra 
                if(barra.value > 5)
                {
                    frontend += 1
                }
                else if(barra.value < 5)
                {
                    backend += 1
                }
                else if(barra.value == 5) 
                {
                    naosei += 1
                }
                //

                if(naosei == 5)
                {
                    document.getElementById("naosei").style.visibility='visible'
                }
                else{
                    
                 if(backend > frontend)
                {
                   document.getElementById("backend").style.visibility='visible' 
                }

                else{

                 if(frontend > backend)
                 {
                    document.getElementById("frontend").style.visibility='visible' 
                 }

                    }
                }
                document.getElementById('resultado').style.visibility = 'hidden'
            }
            else{
                 alert('Ops, parece que voce nao respondeu todas as perguntas!!')
            }

        }

        

        

        //---------//

        //Dar um refresh na pagina//
        document.getElementById("resetar").onclick = function() {
            window.location.reload(false); 
        }
        //--------------//



            // impedir que a pagina seja atualizada quando o usuario envia os forms apertando a questao
            document.getElementById("Pergunta1").onclick = function(event){
            event.preventDefault()}

            document.getElementById("Pergunta2").onclick = function(event){
                event.preventDefault()}

            document.getElementById("Pergunta3").onclick = function(event){
            event.preventDefault()}

            document.getElementById("Pergunta4").onclick = function(event){
                event.preventDefault()}
          //-------//
        
            