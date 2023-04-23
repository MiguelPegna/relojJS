(function (){
    let hora = function(){  
        let fecha = new Date(), 
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            anho = fecha.getFullYear(),
            horas = fecha.getHours(),
            minutos =  fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            ampm;

        let pDiaSemana = document.querySelector('#diaSemana'),
            pDia = document.querySelector('#dia'),
            pMes = document.querySelector('#mes'),
            pAnho = document.querySelector('#anho'),
            pHoras = document.querySelector('#hora'),
            pMinutos = document.querySelector('#minutos'),
            pSegundos = document.querySelector('#segundos'),
            pAMPM = document.querySelector('#am_pm');

        let meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
        let semana = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado');

        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pAnho.textContent = anho;  

        if(horas >= 12){
            horas = horas -12;
            ampm = 'PM';
        }
        else{
            ampm = 'AM';
        }

        if(horas == 0){
            horas = 12;
        }
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if (minutos<10){
            minutos ='0'+minutos;
        }
        pMinutos.textContent = minutos;

        if (segundos<10){
            segundos ='0'+segundos;
        }
        pSegundos.textContent = segundos; 
    };
    hora();
    let intervalo = setInterval(hora, 1000);   
}());