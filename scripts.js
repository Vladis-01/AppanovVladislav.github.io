let formData = new FormData();
var buttonsubmit = document.forms[0].elements[4];
buttonsubmit.addEventListener("click", buttonPressed);
console.log("Скрипт загружен")
function buttonPressed(evt) {
    console.log("Кнопка нажата загружен");
    evt.preventDefault();

    if (document.forms[0].elements[0].value == '') {
        Swal.fire(
            'Ошибка!',
            'Вы не ввели имя!',
            'error'
        )
        console.log("Вы не ввели имя");
    } else {
        if (document.forms[0].elements[1].value == '+7 ') {
            Swal.fire(
                'Ошибка!',
                'Вы не ввели номер телефона!',
                'error'
            )
            console.log("Вы не ввели номер телефона");
        } else {
            formData.append('userName', document.forms[0].elements[0].value);
            formData.append('Phone', document.forms[0].elements[1].value);
            formData.append('Doctor', document.forms[0].elements[2].value);
            formData.append('Data', document.forms[0].elements[3].value);
            Swal.fire(
                formData.get('userName') + ', вы записались к ' + formData.get('Doctor') + 'у' + ' на дату: ' + formData.get('Data'),
                'В ближайшее время на номер ' + formData.get('Phone') + ' позвонит оператор',
                'success'
            )
            console.log("Записались");
        }
    }
    formData = new FormData();
}