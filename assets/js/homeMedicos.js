/* Ventana Modal home  */
document.getElementById("citas").addEventListener("click",function(){
    document.getElementsByClassName("fondo_transparente2")[0].style.display="block" 
    return false
 })
 document.getElementsByClassName("modal_cerrar2")[0].addEventListener("click",function(){
     document.getElementsByClassName("fondo_transparente2")[0].style.display="none" 
 })