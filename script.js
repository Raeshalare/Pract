const form = document.forms.formOne;
const login = document.getElementById("login");
const date = document.getElementById("birth");

const gender = document.querySelector('input[name="sex"]:checked');

const resultName = document.getElementById("resultName");
const resultInfo = document.getElementById("resultInfo");
const resultGender = document.getElementById('resultGender');

const resultQuestion1 = document.getElementById('resultQuestion1');
const resultQuestion2 = document.getElementById('resultQuestion2');
const resultQuestion3 = document.getElementById('resultQuestion3');
const resultQuestion4 = document.getElementById('resultQuestion4');
const resultQuestion5 = document.getElementById('resultQuestion5');
const resultQuestion6 = document.getElementById('resultQuestion6');

function fun1() {
    // Проверка на минимальную длину логина
    if (login.value.length < 4) {
        loginError.textContent = "Символов должно быть минимум 4";
        return; 
    }

    // Проверка на наличие хотя бы одной заглавной буквы
    if (!validateSlide1()) {
        loginError.textContent = "Нужна хотя бы одна заглавная буква";
    } else {
        document.documentElement.style.setProperty("--transfX", 1 * (-100) + "%");
        document.getElementById("resultName").textContent = `Привет, ${login.value}!`;
        document.getElementById("resultInfo").textContent = `${date.value}`;
        document.getElementById("resultGender").textContent = `${gender.value}`;
        document.getElementById('header').classList.remove('auth-page');
    }
}


function fun2() {

    document.documentElement.style.setProperty("--transfX", 1 * (-100) + "%");
    
}


function fun3() {   
    // Получение значений ответов
    const question1 = document.getElementById("question1").value;
    const question2 = document.getElementById("question2").value;
    const question3 = document.querySelector('input[name="question3"]:checked');
    const question4 = document.querySelector('input[name="question4"]:checked');
    const question5 = document.querySelector('input[name="question5"]:checked');
    const question6 = document.querySelector('input[name="question6"]:checked');



    document.getElementById("questionResult1").innerHTML = `Вопрос 1: ${question1 || "Не указан"}`;
    document.getElementById("resultQuestion1").innerHTML = `Вопрос 1: ${question1 || "Не указан"}`;
    document.getElementById("questionResult2").innerHTML = `Вопрос 2: ${question1 || "Не указан"}`;
    document.getElementById("resultQuestion2").innerHTML = `Вопрос 2: ${question2 || "Не указан"}`;

    let result3 = `Вопрос 3: ${question3 ? question3.value : "Не указан"}`;
    if (question3 && question3.value == 59) {
        result3 += `<p style="color: green;">Правильно!</p>`;
    } else {
        result3 += `<p style="color: red;">Правильный ответ: 59</p>`;
    }
    document.getElementById("questionResult3").innerHTML = result3;
    document.getElementById("resultQuestion3").innerHTML = result3;

    let result4 = `Вопрос 4: ${question4 ? question4.value : "Не указан"}`;
    if (question4 && question4.value === "Гринир") {
        result4 += `<p style="color: green;">Правильно!</p>`;
    } else {
        result4 += `<p style="color: red;">Правильный ответ: Гринир</p>`;
    }
    document.getElementById("questionResult4").innerHTML = result4;
    document.getElementById("resultQuestion4").innerHTML = result4;

    let result5 = `Вопрос 5: ${question5 ? question5.value : "Не указан"}`;
    if (question5 && question5.value == 2013) {
        result5 += `<p style="color: green;">Правильно!</p>`;
    } else {
        result5 += `<p style="color: red;">Правильный ответ: 2013</p>`;
    }
    document.getElementById("questionResult5").innerHTML = result5;
    document.getElementById("resultQuestion5").innerHTML = result5;

    let result6 = `Вопрос 6: ${question6 ? question6.value : "Не указан"}`;
    if (question6 && question6.value === "1999") {
        result6 += `<p style="color: green;">Правильно!</p>`;
    } else {
        result6 += `<p style="color: red;">Правильный ответ: 1999</p>`;
    }
    document.getElementById("questionResult6").innerHTML = result6;
    document.getElementById("resultQuestion6").innerHTML = result6;


    document.querySelector(".result-container").style.display = "block";
}





function fun4() {
    document.documentElement.style.setProperty("--transfX", 2 * (-100) + "%");
}

function fun5(){
    document.documentElement.style.setProperty("--transfX", 4 * (-100) + "%");
}


function validateSlide1() {
    const name = document.getElementById('login').value;
    const birthDate = document.getElementById('birth').value;


    if (!/^[A-Za-zА-Яа-я0-9]+$/.test(name)) {
        return false;
    }

    if (!birthDate) {
        return false;
    }

    return true; 
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let result = "";
    let test = true;
    if (form.login.validity.valid) {
        result += "Логин: " + form.login.value + '\n';
        form.login.labels[0].innerText = "";
    } else {
    }

    if (form.birth.validity.valid) {
        result += "Дата рождения: " + form.birth.value + '\n';
        form.birth.labels[0].innerText = "";
    } else {
        form.birth.labels[0].innerText = "Неверно введена дата";
    }
});

function validateSlide2() {
    if (!document.querySelector('input[name="question3"]:checked')) {
        alert('Выберите вариант ответа на вопрос 3!');
        return false;
    }
    if (!document.querySelector('input[name="question4"]:checked')) {
        alert('Выберите вариант ответа на вопрос 4!');
        return false;
    }
    if (!document.querySelector('input[name="question5"]:checked')) {
        alert('Выберите вариант ответа на вопрос 5!');
        return false;
    }
    if (!document.querySelector('input[name="question6"]:checked')) {
        alert('Выберите вариант ответа на вопрос 6!');
        return false;
    } else {
        return true;
    }
}
function LogOut(){

    location.reload();

}


function Reset() {
    document.getElementById('form1').reset();
    document.getElementById('form2').reset();
    if (x > 0) {
        x -= 2;
    } else {
        x = car.length - 1;
    }
    document.documentElement.style.setProperty("--transfX", x * (-100) + "%");
}

let car = document.getElementsByClassName('def');
let x = 0;
let reg = /[0-9]/g;

const loginError = document.getElementById("loginError");
const question3Error = document.getElementById("question3Error");
const question4Error = document.getElementById("question4Error");
const question5Error = document.getElementById("question5Error");
const question6Error = document.getElementById("question6Error");

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', fun1);

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function(event) {
    event.preventDefault();
    fun3();
});

const btnbtn = document.getElementById('btnbtn');
btnbtn.addEventListener('click', function(event) {
    event.preventDefault();  
    document.documentElement.style.setProperty("--transfX", 1 * (-100) + "%");
});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(event) {
    event.preventDefault();  
    fun2();
});

function Results(){
        document.documentElement.style.setProperty("--transfX", 3 * (-100) + "%");
}

document.getElementById("Again").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("formSlide3").reset(); 
  });
  



const testingButton = document.getElementById('testingButton');
testingButton.addEventListener('click', function(event) {
    event.preventDefault();  
    fun4();
});

const btngallery = document.getElementById('btngallery');
btngallery.addEventListener('click', function(event) {
    event.preventDefault();  
    fun6();
});

function fun6(){
    document.documentElement.style.setProperty("--transfX", 5 * (-100) + "%");
}

const logoutbtn = document.getElementById('logout-btn')
logoutbtn.addEventListener('click', LogOut)

const logout = document.getElementById('logout')
logout.addEventListener('click', LogOut)

const btnresults = document.getElementById('btnresults')
btnresults.addEventListener('click', Results)

const btndict = document.getElementById('btndict')
btndict.addEventListener('click', fun5)



// Словарь терминов и их описания
const dictionary = {
    "Warframe": "Warframe — это онлайн-шутер от третьего лица с элементами RPG, разработанный Digital Extremes.",
    "Grineer": "Grineer — одна из фракций в игре Warframe, клонированная империя, ведущая войны против других рас.",
    "Corpus": "Corpus — это торговая фракция в Warframe, обладающая огромным богатством и высокоразвитыми технологиями.",
    "Orokin": "Orokin — древняя раса, существовавшая в мире Warframe, оставившая за собой высокоразвитию технологию и артефакты.",
    "Tenno": "Tenno — это игроки в игре Warframe, которые являются воинами, обладающими могущественными боевыми костюмами, называемыми Warframe.",
    "Void": "Void — загадочное пространство, существующее между мирами в Warframe, заполненное опасностями и ценными артефактами.",
    "Sentients": "Sentients — древние, почти бессмертные существа в Warframe, враждующие с человечеством и разрушившие цивилизацию Орокин.",
    "Operator": "Operator — это сущность, которая управляет Warframe в игре, обладая собственными уникальными способностями.",
    "Faction": "Faction — группа или организация, существующая в мире Warframe, каждая из которых имеет свои цели и идеологии.",
    "Focus": "Focus — система, позволяющая улучшать и настраивать способности оператора в игре Warframe."
  };
  
  // Функция для отображения описания термина
  function showDescription(term) {
    const descriptionText = document.getElementById("descriptionText");
    const descriptionField = document.getElementById("descriptionField");
  

    descriptionText.textContent = dictionary[term];
  

    descriptionField.style.display = 'block';
  }
  
  // Функция поиска по списку терминов
  function searchTerm() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const terms = document.querySelectorAll(".term");
  
    terms.forEach(term => {
      const termText = term.textContent.toLowerCase();
      if (termText.indexOf(searchInput) !== -1) {
        term.style.display = "block";  
      } else {
        term.style.display = "none";  
      }
    });
  }
  





  let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideInfo = document.getElementById("slideInfo");

// Функция для отображения слайда по индексу
function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = totalSlides - 1; 
    } else if (index < 0) {
        currentSlide = 0; 
    } else {
        currentSlide = index;
    }
    
    const offset = -100 * currentSlide; 
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    

    slideInfo.textContent = `${currentSlide + 1} слайд из ${totalSlides}`;
}

// Обработчики кнопок для переключения слайдов
document.getElementById('prevSlide').addEventListener('click', function() {
    showSlide(currentSlide - 1); 
});

document.getElementById('nextSlide').addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

// Инициализация слайдера
showSlide(currentSlide);
