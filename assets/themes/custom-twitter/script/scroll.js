<script type="text/javascript">
window.onscroll = function() {myFunction()};

function myFunction() {
	x = document.getElementById("fade");
    if (x.scrollTop < 10) {
    	x.className = "fade";
    }
    if (document.documentElement.scrollTop == 0) {
        x.className = "fade-visible";
    }
}
</script>
/*window.onscroll = function() {myFunction()};

function myFunction() {
    x = document.getElementsByClassName("fade");
    for (i = 0; i < x.length; i++) {
      if (x[i].scrollTop > 50) {
        x[i].className = "fade-visible";
    } else {
        x[i].className = "fade";
    }
}
</script>*/
