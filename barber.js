window.onload=function(){
    var menuButton=document.getElementById('menuBtn');
    var sideNav=document.getElementById('sideNav');
    var menu=document.getElementById('menu');
        sideNav.style.right == "-200px"
        menuButton.onclick = function()
        {
            if(sideNav.style.right == "-200px")
            {
                sideNav.style.right="0";
                menu.src = "./images/close.png"
            }
            else{
                sideNav.style.right="-200px";
                menu.src="./images/menu.png"
            }
        }
        var scroll = new SmoothScroll('a[href*="#"]', {
            speed: 500,
            speedAsDuration: true
        });
}