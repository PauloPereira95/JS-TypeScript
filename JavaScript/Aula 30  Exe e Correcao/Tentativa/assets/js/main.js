function getWeekDayDescri(weekday) {
    let weekDayText;
    switch (weekday) {
        case 0:
            weekDayText = 'Domingo';
            return weekDayText;
        case 1:
            weekDayText = 'Segunda-Feira';
            return weekDayText;
        case 2:
            weekDayText = 'Terça-Feira';
            return weekDayText;
        case 3:
            weekDayText = 'Quarta-Feira';
            return weekDayText;
        case 4:
            weekDayText = 'Quinta-Feira';
            return weekDayText;
        case 5:
            weekDayText = 'Sexta-Feira';
            return weekDayText;
        case 6:
            weekDayText = 'Sábado';
            return weekDayText;
        default:
            break;
    }
}
function getWeekMonthDescri(month) {
    let monthText;
    switch (month) {
        case 0:
            monthText = 'Janeiro';
            return monthText;
        case 1:
            monthText = 'Fevereiro';
            return monthText;

        case 2:
            monthText = 'Março';
            return monthText;

        case 3:
            monthText = 'Abril';
            return monthText;

        case 4:
            monthText = 'Maio';
            return monthText;

        case 5:
            monthText = 'Junho';
            return monthText;

        case 6:
            monthText = 'Julho';
            return monthText;

        case 7:
            monthText = 'Agosto';
            return monthText;

        case 8:
            monthText = 'Setembro';
            return monthText;

        case 9:
            monthText = 'Outubro';
            return monthText;

        case 10:
            monthText = 'Novembro';
            return monthText;

        case 11:
            monthText = 'Dezembro';
            return monthText;

        default:
            break;
    }
}
let date = new Date();
let day = date.getDate();
let weekDayText = getWeekDayDescri(date.getDay());
let res = document.querySelector('#mostrar');
let month = date.getMonth();
let monthText = getWeekMonthDescri(month);
let year = date.getFullYear();
let hours = date.getHours();
let min = date.getMinutes();

res.innerHTML = `${weekDayText}, ${date.getDate()} de ${monthText} de ${year}  ${hours}:${min}`;