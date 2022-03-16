var openside = document.getElementById("openside");

var x = document.getElementById("sidebar");
x.style.left = "-100%";
openside.addEventListener("click", function() {
  if (x.style.left == "-100%") {
    x.style.left = "0%";
  } else {
    x.style.left = "-100%";
  }
});

scrollup.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

var navbar = document.getElementById("navbar");
if (navbar == undefined) {
  navbar2.style.width = "100%";
  navbar2.style.top = "0px";
  navbar2.style.backgroundColor = "gray";
}

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    var bread = document.getElementById("bread");
    var navbar = document.getElementById("navbar");
    if (bread != undefined) {
      bread.style.visibility = "visible";
      bread.style.height = "37px";
      bcon.style.height = "35px";
    }
    if (navbar == undefined) {
      navbar2.style.width = "100%";
      navbar2.style.top = "0px";
      navbar2.style.backgroundColor = "gray";
    } else {
      navbar.style.width = "100%";
      navbar.style.top = "0px";
      navbar.style.backgroundColor = "gray";
    }

    scrollup.style.display = "flex";
    icofb.style.display = "block";
    icoln.style.display = "block";
    icogm.style.display = "block";
  } else {
    var bread = document.getElementById("bread");
    var navbar = document.getElementById("navbar");
    if (bread != undefined) {
      bread.style.visibility = "hidden";
      bcon.style.height = "0px";
      bread.style.height = "0px";
    }

    if (navbar == undefined) {
      navbar2.style.width = "100%";
      navbar2.style.top = "0px";
      navbar2.style.backgroundColor = "gray";
    } else {
      navbar.style.width = "80%";
      navbar.style.top = "30px";
      navbar.style.backgroundColor = "transparent";
    }

    scrollup.style.display = "none";
    icofb.style.display = "none";
    icoln.style.display = "none";
    icogm.style.display = "none";
  }
  //detect if the user is at the buttom page
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    icofb.style.display = "none";
    icoln.style.display = "none";
    icogm.style.display = "none";
  }
};

var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
