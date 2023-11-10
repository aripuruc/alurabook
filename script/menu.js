function clickBurguer() {
var idmenu = document.getElementById('imenu');

    if (idmenu.style.display === 'none' || idmenu.style.display === '')  {
        idmenu.style.display = 'block';
    } else {
        idmenu.style.display = 'none';
    }
}