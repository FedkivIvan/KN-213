const first_name = document.getElementById('first_name')
const number = document.getElementById('phone')
const password = document.getElementById('pwd')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const MyTable = document.getElementById('MyTable')

form.addEventListener('submit', (e) => {
    let massages = []
    if (first_name.value === '' || first_name.value === null) {
        massages.push('Name is required');

    }
    else {
        first_name.style.background = 'green'
    }    

    var regex = /^[A-Za-z]+$/
    var isValid = regex.test(document.getElementById("first_name").value);
        
    if (!isValid) 
    {
      massages.push('Name must consist of letters')
    }

    if(isNaN(number.value)) {
      massages.push('Phone number must consist of numbers')
    }

    if (password.value.length <= 6) {
        massages.push('Password must be longer than 6 characters')
    }

    if (massages.length > 0) {
        e.preventDefault()
        errorElement.innerText = massages.join(' \n\ ')
    }
});

MyTable.addEventListener('mouseover', function() {
    MyTable.style.background = "white";
    MyTable.style.color = "black";
    MyTable.style.border = "black";
});

document.getElementById('MyButton').addEventListener('click', function(){ alert("Learning more"); });

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('light');
    document.getElementById("hdr").classList.toggle("header_light");
    document.getElementById("hdrlogo").classList.toggle("header_logo_light");
    document.getElementById("nvl").classList.toggle("nav_link_light");
    document.getElementById("nvl1").classList.toggle("nav_link_light");
    document.getElementById("nvl2").classList.toggle("nav_link_light");
    document.getElementById("nvl3").classList.toggle("nav_link_light");
    document.getElementById("nvl4").classList.toggle("nav_link_light");
    document.getElementById("nvl5").classList.toggle("nav_link_light");
    document.getElementById("nvl6").classList.toggle("nav_link_light");
    document.getElementById("nvl7").classList.toggle("nav_link_light");
    document.getElementById("nvl8").classList.toggle("nav_link_light");
    document.getElementById("form").classList.toggle("forms_light");
});


function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("Nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}








