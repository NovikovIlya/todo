document.getElementById('submit2').addEventListener("mouseover", checkbeg );
function checkbeg(){
  let y = document.getElementById('submit2');
  y.style.cssText = "margin-top: 20px"
}

document.getElementById('main-form').addEventListener("submit", checkForm );

function checkForm(event){
  event.preventDefault(); //Отключается перезагрузку страницы
  let x = document.getElementById('main-form');
  // let name = document.getElementById('name').value;
  let name = x.name.value;
  let pass = x.pass.value;
  let repass = x.repass.value;
  let state = x.state.value;

  let fail = "";

  if(name == "" || pass == "" || state == "")
    fail = "Заполните поля";
  else if  (name.length <= 1 || name.length > 50)
    fail = "Введите корректное имя";
  else if (pass != repass)
    fail = "Пароли должны совпадать";
  

  if (fail != "")
    document.getElementById('error').innerHTML = fail;
  else {
    alert("Все оке");
    window.location = 'https://github.com/NovikovIlya';
  }
  // return false;

}