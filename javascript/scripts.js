var openSide = document.getElementById("burger-menu");
var checkStatus = 0;

openSide.addEventListener("click", function sideBarOpen(){

    if (checkStatus == 0){
        document.getElementById("menu-sidebar").style.width = "200px";
        document.getElementById("burger-menu").style.paddingLeft = "200px";
        document.getElementById("flex-container").style.paddingLeft = "233px";
        checkStatus = 1;
    } else{
        document.getElementById("menu-sidebar").style.width = "0";
        document.getElementById("burger-menu").style.paddingLeft = "3%";
        document.getElementById("flex-container").style.paddingLeft = "3%";
        checkStatus = 0;
    }

});