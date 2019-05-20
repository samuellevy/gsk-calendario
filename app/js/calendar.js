var calendar = {
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    dayWeekName: ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"],
    actualMonth: 5,
    init: function(){
        console.log('%cstarting app', 'color:green');
        calendar.mountCalendar();
        this.buttonsListener();
        // this.drawDay();
    },
    getJson: function(){
        var obj = {a:1, b:2, c:3};
        return obj;
    },
    getHolidays: function(){
        var holidays = [
            //Maio
            {'date': new Date(2019, 4, 1), 'type': 'holiday', 'title': 'Dia do Trabalho/ Campanha Gripe'},
            {'date': new Date(2019, 4, 8), 'type': 'important', 'title': 'Dia Internacional da Cruz Vermelha'},
            {'date': new Date(2019, 4, 12), 'type': 'holiday', 'title': 'Dia da Enfermagem/ Dia das Mães'},
            {'date': new Date(2019, 4, 13), 'type': 'important', 'title': 'Dia do Combate Mundial a Influenza'},
            {'date': new Date(2019, 4, 15), 'type': 'important', 'title': 'Dia Internacional da Família'},
            {'date': new Date(2019, 4, 31), 'type': 'important', 'title': 'Dia Mundial sem Tabaco/ Término Campanha Gripe'},
            
            // Janeiro
            {'date': new Date(2019, 0, 1), 'type': 'holiday', 'title': 'Dia mundial da paz'},
            {'date': new Date(2019, 0, 20), 'type': 'important', 'title': 'Dia do farmacêutico'},
            {'date': new Date(2019, 0, 28), 'type': 'important', 'title': 'Dia Nacional de Combate e Prevenção da Hanseníase'},
            
            // Fevereiro
            {'date': new Date(2019, 1, 1), 'type': 'star', 'title': 'Campanha de Gripe'},
            {'date': new Date(2019, 1, 4), 'type': 'important', 'title': 'Dia Mundial do Câncer'},
            {'date': new Date(2019, 1, 11), 'type': 'important', 'title': 'Dia Mundial do Enfermo'},
            {'date': new Date(2019, 1, 15), 'type': 'important', 'title': 'Dia Internacional de Luta contra o Câncer na Infância'},
            
            // Março
            {'date': new Date(2019, 2, 5), 'type': 'holiday', 'title': 'Carnaval'},
            {'date': new Date(2019, 2, 8), 'type': 'important', 'title': 'Dia Internacional da Mulher'},
            {'date': new Date(2019, 2, 20), 'type': 'important', 'title': 'Início do Outono'},
            {'date': new Date(2019, 2, 21), 'type': 'important', 'title': 'Dia Internacional da Síndrome de Down'},
            {'date': new Date(2019, 2, 22), 'type': 'important', 'title': 'Dia Mundial da Água'},
            {'date': new Date(2019, 2, 31), 'type': 'important', 'title': 'Dia da Saúde e Nutrição'},
            
            // Abril
            {'date': new Date(2019, 3, 1), 'type': 'important', 'title': 'Início Campanha Gripe'},
            {'date': new Date(2019, 3, 2), 'type': 'important', 'title': 'Dia Mundial de Conscientização do Autismo'},
            {'date': new Date(2019, 3, 4), 'type': 'important', 'title': 'Dia Nacional do Parkinsoniano'},
            {'date': new Date(2019, 3, 7), 'type': 'important', 'title': 'Dia Mundial da Saúde'},
            {'date': new Date(2019, 3, 11), 'type': 'important', 'title': 'Dia do Infectologista'},
            {'date': new Date(2019, 3, 13), 'type': 'important', 'title': 'Dia do Jovem'},
            {'date': new Date(2019, 3, 21), 'type': 'holiday', 'title': 'Páscoa'},
            {'date': new Date(2019, 3, 24), 'type': 'star', 'title': 'Dia mundial da meningite'},
            
            //Maio
            {'date': new Date(2019, 4, 1), 'type': 'holiday', 'title': 'Dia do Trabalho/ Campanha Gripe'},
            {'date': new Date(2019, 4, 8), 'type': 'important', 'title': 'Dia Internacional da Cruz Vermelha'},
            {'date': new Date(2019, 4, 12), 'type': 'holiday', 'title': 'Dia da Enfermagem/ Dia das Mães'},
            {'date': new Date(2019, 4, 13), 'type': 'important', 'title': 'Dia do Combate Mundial a Influenza'},
            {'date': new Date(2019, 4, 15), 'type': 'important', 'title': 'Dia Internacional da Família'},
            {'date': new Date(2019, 4, 31), 'type': 'important', 'title': 'Dia Mundial sem Tabaco/ Término Campanha Gripe'},
            
            // Junho
            {'date': new Date(2019, 5, 5), 'type': 'important', 'title': 'Dia Mundial do Meio Ambiente/ Início da Campanha de catapora'},
            {'date': new Date(2019, 5, 9), 'type': 'star', 'title': 'Dia mundial da imunização'},
            {'date': new Date(2019, 5, 12), 'type': 'important', 'title': 'Dia dos Namorados'},
            {'date': new Date(2019, 5, 21), 'type': 'important', 'title': 'Início do Inverno'},
            
            // Julho
            {'date': new Date(2019, 6, 1), 'type': 'important', 'title': 'Dia da Vacina BCG/ Campanha de catapora'},
            {'date': new Date(2019, 6, 2), 'type': 'important', 'title': 'Dia do Hospital'},
            {'date': new Date(2019, 6, 20), 'type': 'important', 'title': 'Dia do Amigo'},
            {'date': new Date(2019, 6, 26), 'type': 'important', 'title': 'Dia dos Avós'},
            {'date': new Date(2019, 6, 27), 'type': 'important', 'title': ' Dia do Pediatra'},
            {'date': new Date(2019, 6, 28), 'type': 'star', 'title': 'Dia Mundial de Luta Contra as Hepatites Virais'},
            
            // Agosto
            {'date': new Date(2019, 7, 5), 'type': 'important', 'title': 'Dia da Farmácia'},
            {'date': new Date(2019, 7, 11), 'type': 'important', 'title': 'Dias dos Pais'},
            {'date': new Date(2019, 7, 24), 'type': 'important', 'title': 'Dia da Infância'},
            {'date': new Date(2019, 7, 29), 'type': 'important', 'title': 'Dia Nacional de Combate ao Fumo/ Fim da Campanha de catapora'},
            
            // Setembro
            {'date': new Date(2019, 8, 5), 'type': 'important', 'title': 'Dia do Oficial de Farmácia'},
            {'date': new Date(2019, 8, 8), 'type': 'important', 'title': 'Dia Nacional de Luta por Medicamento'},
            {'date': new Date(2019, 8, 21), 'type': 'important', 'title': 'Dia da Luta Nacional das Pessoas com Deficiências'},
            {'date': new Date(2019, 8, 23), 'type': 'star', 'title': 'Início da Campanha de Catapora'},
            {'date': new Date(2019, 8, 27), 'type': 'important', 'title': 'Dia Nacional de Doação de Órgãos'},
            {'date': new Date(2019, 8, 29), 'type': 'important', 'title': 'Dia Mundial do Coração'},
            
            // Outubro
            {'date': new Date(2019, 9, 1), 'type': 'important', 'title': 'Dia do Idoso/Dia Internacional da Terceira Idade'},
            {'date': new Date(2019, 9, 4), 'type': 'important', 'title': 'Dia Nacional do Agente Comunitário de Saúde'},
            {'date': new Date(2019, 9, 10), 'type': 'important', 'title': 'Dia Mundial da Saúde Mental'},
            {'date': new Date(2019, 9, 11), 'type': 'important', 'title': 'Dia Internacional da Menina'},
            {'date': new Date(2019, 9, 12), 'type': 'holiday', 'title': 'Dia das Crianças'},
            {'date': new Date(2019, 9, 17), 'type': 'important', 'title': 'Dia Nacional da Vacinação'},
            {'date': new Date(2019, 9, 18), 'type': 'important', 'title': 'Dia do Médico'},
            {'date': new Date(2019, 9, 24), 'type': 'important', 'title': 'Dia Mundial de Combate à Poliomielite'},
            
            // Novembro
            {'date': new Date(2019, 10, 12), 'type': 'star', 'title': 'Dia mundial do combate a pneumonia'},
            {'date': new Date(2019, 10, 14), 'type': 'important', 'title': 'Dia mundial do Diabetes'},
            {'date': new Date(2019, 10, 20), 'type': 'important', 'title': 'Dia do Biomédico'},
            {'date': new Date(2019, 10, 23), 'type': 'important', 'title': 'Dia Nacional de Combate ao Câncer Infantil'},
            {'date': new Date(2019, 10, 25), 'type': 'important', 'title': 'Dia Nacional do Doador de Sangue'},
            
            //Dezembro
            {'date': new Date(2019, 11, 1), 'type': 'important', 'title': 'Dia Mundial de Luta Contra a Aids'},
            {'date': new Date(2019, 11, 3), 'type': 'important', 'title': 'Dia Internacional do Portador de Deficiência'},
            {'date': new Date(2019, 11, 9), 'type': 'important', 'title': 'Dia da Criança Especial'},
            {'date': new Date(2019, 11, 21), 'type': 'important', 'title': 'Início do Verão'},
            {'date': new Date(2019, 11, 25), 'type': 'holiday', 'title': 'Natal'},
            {'date': new Date(2019, 11, 31), 'type': 'holiday', 'title': 'Réveillon'},
        ];
        return holidays;
    },
    mountCalendar: function(){
        this.drawGrid();
        this.drawDays('ofToday');
    },
    drawGrid: function(){
        // console.log('%cmounting calendar', 'color:green');
        var x = 0;
        while (x < 6){
            var y = 0;
            while(y < 7){
                this.drawGridDay([x,y]);
                y++;
            }
            x++;
        }
    },
    drawGridDay: function(position){
        var block_days = document.getElementById("cld-days");
        
        var container = document.createElement("li");
        var day = document.createElement("p");
        var caption = document.createElement("span");
        var content = document.createTextNode(position);
        
        //setting classes
        container.classList.add("cld-day");
        day.classList.add("cld-number");
        
        //only for day mode
        var dayweek = document.createElement("p");
        var title = document.createElement("p");
        var type = document.createElement("p");
        
        //setting classes for day mode
        dayweek.classList.add("new-cld-dayweek");
        title.classList.add("new-cld-title");
        type.classList.add("new-cld-type");
        
        container.setAttribute("data-x", position[0]);
        container.setAttribute("data-y", position[1]);
        
        container.appendChild(day);
        day.appendChild(caption);
        day.appendChild(dayweek);
        day.appendChild(title);
        day.appendChild(type);
        caption.appendChild(content);
        block_days.appendChild(container);
    },
    drawDays: function(workingMonth){
        var x=0;
        var y=0;
        var day=0;
        var iday=0;
        var iDate=new Date(2019, workingMonth, iday);
        workingMonth=4;

        while (x < 6){
            while(y < 7){
                this.drawDay(x,y,iDate.getDay(),'prevMonth',new Date(2019, workingMonth, iday));
                y++;
                iday++;
                iDate=new Date(2019, workingMonth, iday);
            }
            var y = 0;
            x++;
        }
    },
    drawHolidays: function(){
        //lookup holidays
        var holidays = this.getHolidays();
        // for (var holiday in holidays) {
        //     // console.log(holidays[holiday].type);
        //     try{
        //         var stringDate = holidays[holiday].date.toDateString();
        //         var obj = document.querySelectorAll('li.cld-day[data-date="'+stringDate+'"]');
                
        //         obj[0].firstChild.classList.add('eventday');
        //         obj[0].firstChild.classList.add(holidays[holiday].type);
                
        //         var blockInfoHoliday = document.querySelectorAll('li.cld-day[data-date="'+stringDate+'"] p.cld-number p');
        //         // console.log(blockInfoHoliday);
                
        //         if(holidays[holiday].type=='holiday'){
        //             type="Feriado Nacional";
        //         }else if(holidays[holiday].type=='important'){
        //             type="Data Importante";
        //         }else if(holidays[holiday].type=='star'){
        //             type="Notificação Habilitada";
        //         }
        //         blockInfoHoliday[1].innerHTML = holidays[holiday].title;
        //         blockInfoHoliday[2].innerHTML = type;
        //     }catch(e){
                
        //     }
            
        // }
        
        // var allDays = document.querySelectorAll('li.cld-day');
        // for (var selectedDay in allDays) {
        //     // ctrl+shift+k (para abrir o console no mozilla firefox)
        //     try{
        //         var stringDate = allDays[selectedDay].getAttribute("data-date");
        //     }catch(e){
        //     }
        //     // console.log(stringDate);
        // }
    },
    drawDay: function(x,y,day,style=null,date=null){
        // console.log(date);
        var obj = document.querySelectorAll('li.cld-day[data-x="'+x+'"][data-y="'+y+'"] p span');
        this.drawElementDay(obj[0],day,style,date.toDateString());
        
        var objCldNumber = document.querySelectorAll('li.cld-day[data-x="'+x+'"][data-y="'+y+'"] p p');
        objCldNumber[0].innerHTML = this.dayWeekName[date.getDay()].substr(0,3);
        console.log(date);
    },
    drawElementDay: function(container, text, style=null, date){
        container.innerHTML = text;
        container.parentElement.parentElement.classList.add(style);
        container.parentElement.parentElement.setAttribute('data-date',date);
        // this.tintHoliday(container.parentElement);
        // console.log();
    },
    changeMonth: function(month){
        this.clearHolidays();
        this.drawDays(month);
    },
    nextMonth: function(){

    },
    clearHolidays: function(){
        var objs = document.querySelectorAll('p.eventday');
        for(var obj in objs){
            try{
                objs[obj].classList.remove('eventday');
                objs[obj].classList.remove('important');
                objs[obj].classList.remove('holiday');
            }catch(e){}
        }
        // console.log(objs);
    },
    buttonsListener: function(){
        document.addEventListener('click', function (event) {
            if (!event.target.matches('.cld-fwd')) return;
            calendar.nextMonth();
        }, false);        
    },
    changeType: function(){},
    mountSideBar: function(){}
}


document.addEventListener("DOMContentLoaded", function() {
    calendar.init();
});