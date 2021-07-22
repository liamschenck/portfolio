window.onload = function() {

    document.getElementById('footer-img').addEventListener('click', function (e) {
      document.getElementById("footer").setAttribute("style", "display: none")
      e.target.appendChild(img);
    });
  
  };