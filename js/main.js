window.addEventListener('scroll',reveal);
function reveal(){
    var reveals=document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++){
        var windohight=window.innerHeight;
        var revealtop=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;
        if(revealtop<windohight-revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }

    }
}
const totop=document.querySelector("fa-solid fa-arrow-up");
window.addEventListener("scroll",scrollfunction)
function scrollfunction(){
 if(window.screenY > 700){
      totop.style.display="block";
    }else{
        totop.style. opacity="none";

    }

}

   