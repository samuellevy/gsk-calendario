var calendar = {
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    dayWeekName: ["DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"],
    actualMonth: null,
    actualDate: null,
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
            {'date': new Date(2019, 4, 1), 'type': 'holiday', 'title': 'Dia do Trabalho/ Campanha Gripe', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 8), 'type': 'important', 'title': 'Dia Internacional da Cruz Vermelha', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 12), 'type': 'holiday', 'title': 'Dia da Enfermagem/ Dia das Mães', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 13), 'type': 'important', 'title': 'Dia do Combate Mundial a Influenza', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 15), 'type': 'important', 'title': 'Dia Internacional da Família', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 31), 'type': 'important', 'title': 'Dia Mundial sem Tabaco/ Término Campanha Gripe', 'url': 'arquivo.pdf'},
            
            // Janeiro
            {'date': new Date(2019, 0, 1), 'type': 'holiday', 'title': 'Dia mundial da paz', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 0, 20), 'type': 'important', 'title': 'Dia do farmacêutico', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 0, 28), 'type': 'important', 'title': 'Dia Nacional de Combate e Prevenção da Hanseníase', 'url': 'arquivo.pdf'},
            
            // Fevereiro
            {'date': new Date(2019, 1, 1), 'type': 'star', 'title': 'Campanha de Gripe', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 1, 4), 'type': 'important', 'title': 'Dia Mundial do Câncer', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 1, 11), 'type': 'important', 'title': 'Dia Mundial do Enfermo', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 1, 15), 'type': 'important', 'title': 'Dia Internacional de Luta contra o Câncer na Infância', 'url': 'arquivo.pdf'},
            
            // Março
            {'date': new Date(2019, 2, 5), 'type': 'holiday', 'title': 'Carnaval', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 2, 8), 'type': 'important', 'title': 'Dia Internacional da Mulher', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 2, 20), 'type': 'important', 'title': 'Início do Outono', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 2, 21), 'type': 'important', 'title': 'Dia Internacional da Síndrome de Down', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 2, 22), 'type': 'important', 'title': 'Dia Mundial da Água', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 2, 31), 'type': 'important', 'title': 'Dia da Saúde e Nutrição', 'url': 'arquivo.pdf'},
            
            // Abril
            {'date': new Date(2019, 3, 1), 'type': 'important', 'title': 'Início Campanha Gripe', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 3, 2), 'type': 'important', 'title': 'Dia Mundial de Conscientização do Autismo', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 3, 4), 'type': 'important', 'title': 'Dia Nacional do Parkinsoniano', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 3, 7), 'type': 'important', 'title': 'Dia Mundial da Saúde', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 3, 11), 'type': 'important', 'title': 'Dia do Infectologista', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 3, 13), 'type': 'important', 'title': 'Dia do Jovem', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 3, 21), 'type': 'holiday', 'title': 'Páscoa', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 3, 24), 'type': 'star', 'title': 'Dia mundial da meningite', 'url': 'arquivo.pdf'},
            
            //Maio
            {'date': new Date(2019, 4, 1), 'type': 'holiday', 'title': 'Dia do Trabalho/ Campanha Gripe', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 8), 'type': 'important', 'title': 'Dia Internacional da Cruz Vermelha', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 12), 'type': 'holiday', 'title': 'Dia da Enfermagem/ Dia das Mães', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 13), 'type': 'important', 'title': 'Dia do Combate Mundial a Influenza', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 15), 'type': 'important', 'title': 'Dia Internacional da Família', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 4, 31), 'type': 'important', 'title': 'Dia Mundial sem Tabaco/ Término Campanha Gripe', 'url': 'arquivo.pdf'},
            
            // Junho
            {'date': new Date(2019, 5, 5), 'type': 'important', 'title': 'Dia Mundial do Meio Ambiente/ Início da Campanha de catapora', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 5, 9), 'type': 'star', 'title': 'Dia mundial da imunização', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 5, 12), 'type': 'important', 'title': 'Dia dos Namorados', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 5, 21), 'type': 'important', 'title': 'Início do Inverno', 'url': 'arquivo.pdf'},
            
            // Julho
            {'date': new Date(2019, 6, 1), 'type': 'important', 'title': 'Dia da Vacina BCG/ Campanha de catapora', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 6, 2), 'type': 'important', 'title': 'Dia do Hospital', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 6, 20), 'type': 'important', 'title': 'Dia do Amigo', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 6, 26), 'type': 'important', 'title': 'Dia dos Avós', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 6, 27), 'type': 'important', 'title': ' Dia do Pediatra', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 6, 28), 'type': 'star', 'title': 'Dia Mundial de Luta Contra as Hepatites Virais', 'url': 'arquivo.pdf'},
            
            // Agosto
            {'date': new Date(2019, 7, 5), 'type': 'important', 'title': 'Dia da Farmácia', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 7, 11), 'type': 'important', 'title': 'Dias dos Pais', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 7, 24), 'type': 'important', 'title': 'Dia da Infância', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 7, 29), 'type': 'important', 'title': 'Dia Nacional de Combate ao Fumo/ Fim da Campanha de catapora', 'url': 'arquivo.pdf'},
            
            // Setembro
            {'date': new Date(2019, 8, 5), 'type': 'important', 'title': 'Dia do Oficial de Farmácia', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 8, 8), 'type': 'important', 'title': 'Dia Nacional de Luta por Medicamento', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 8, 21), 'type': 'important', 'title': 'Dia da Luta Nacional das Pessoas com Deficiências', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 8, 23), 'type': 'star', 'title': 'Início da Campanha de Catapora', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 8, 27), 'type': 'important', 'title': 'Dia Nacional de Doação de Órgãos', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 8, 29), 'type': 'important', 'title': 'Dia Mundial do Coração', 'url': 'arquivo.pdf'},
            
            // Outubro
            {'date': new Date(2019, 9, 1), 'type': 'important', 'title': 'Dia do Idoso/Dia Internacional da Terceira Idade', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 9, 4), 'type': 'important', 'title': 'Dia Nacional do Agente Comunitário de Saúde', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 9, 10), 'type': 'important', 'title': 'Dia Mundial da Saúde Mental', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 9, 11), 'type': 'important', 'title': 'Dia Internacional da Menina', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 9, 12), 'type': 'holiday', 'title': 'Dia das Crianças', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 9, 17), 'type': 'important', 'title': 'Dia Nacional da Vacinação', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 9, 18), 'type': 'important', 'title': 'Dia do Médico', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 9, 24), 'type': 'important', 'title': 'Dia Mundial de Combate à Poliomielite', 'url': 'arquivo.pdf'},
            
            // Novembro
            {'date': new Date(2019, 10, 12), 'type': 'star', 'title': 'Dia mundial do combate a pneumonia', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 10, 14), 'type': 'important', 'title': 'Dia mundial do Diabetes', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 10, 20), 'type': 'important', 'title': 'Dia do Biomédico', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 10, 23), 'type': 'important', 'title': 'Dia Nacional de Combate ao Câncer Infantil', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 10, 25), 'type': 'important', 'title': 'Dia Nacional do Doador de Sangue', 'url': 'arquivo.pdf'},
            
            //Dezembro
            {'date': new Date(2019, 11, 1), 'type': 'important', 'title': 'Dia Mundial de Luta Contra a Aids', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 11, 3), 'type': 'important', 'title': 'Dia Internacional do Portador de Deficiência', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 11, 9), 'type': 'important', 'title': 'Dia da Criança Especial', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 11, 21), 'type': 'important', 'title': 'Início do Verão', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 11, 25), 'type': 'holiday', 'title': 'Natal', 'url': 'arquivo.pdf'},
            {'date': new Date(2019, 11, 31), 'type': 'holiday', 'title': 'Réveillon', 'url': 'arquivo.pdf'},
        ];
        return holidays;
    },
    mountCalendar: function(){
        this.drawGrid();
        this.drawDays(new Date());
    },
    drawGrid: function(){
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
    drawDays: function(date){
        var x=0;
        var y=0;
        var day=null;
        var i=0;
        var style='currMonth';
        
        var month = {
            firstDay: new Date(date.getFullYear(), date.getMonth(), 1),
            firstDayWeek: new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
            lastDay: new Date(date.getFullYear(), date.getMonth()+1, 0)
        }
        var lastMonth = {
            lastDay: new Date(date.getFullYear(), date.getMonth(), 0)
        }
        
        i-=month.firstDayWeek;
        this.actualDate = month.firstDay;
        
        // console.log(month.firstDay);
        // console.log(month.firstDayWeek);
        // console.log(month.lastDay);
        
        while (x < 6){
            while(y < 7){
                if(month.firstDayWeek>0){
                    if(i>=0 && i<month.lastDay.getDate()){
                        style='currMonth';
                    }
                    else{
                        style='prevMonth';
                    }
                }
                day = new Date(month.firstDay.getFullYear(),month.firstDay.getMonth(),month.firstDay.getDate()+i);
                this.drawDay(x,y,style,day);
                y++;
                i++;
            }
            var y = 0;
            x++;
        }

        var box_month = document.getElementById('month_name');
        var box_year = document.getElementById('month_year');
        
        box_month.innerHTML = this.months[month.firstDay.getMonth()];
        box_year.innerHTML = month.firstDay.getFullYear();
        
        var box_month_mobile = document.getElementById('month_name_mobile');

        console.log(month.firstDay.getFullYear());

        box_month_mobile.innerHTML = this.months[month.firstDay.getMonth()] + ", " + month.firstDay.getFullYear();
        this.drawHolidays();
    },
    drawHolidays: function(){
        //lookup holidays
        var holidays = this.getHolidays();
        var style = null;
        for (var holiday in holidays) {
            try{
                var stringDate = holidays[holiday].date.toDateString();
                var obj = document.querySelectorAll('li.cld-day[data-date="'+stringDate+'"]');
        
                obj[0].firstChild.classList.add('eventday');
                obj[0].firstChild.classList.add(holidays[holiday].type);
        
                var blockInfoHoliday = document.querySelectorAll('li.cld-day[data-date="'+stringDate+'"] p.cld-number p');
        
                if(holidays[holiday].type=='holiday'){
                    type="Feriado Nacional";
                }else if(holidays[holiday].type=='important'){
                    type="Data Importante";
                }else if(holidays[holiday].type=='star'){
                    type="Notificação Habilitada";
                }
                blockInfoHoliday[1].innerHTML = holidays[holiday].title;
                blockInfoHoliday[2].innerHTML = type;
                blockInfoHoliday[2].classList.add(holidays[holiday].type);

                this.drawSideHoliday(holidays[holiday], type);
            }catch(e){
        
            }
        
        }
        
        var allDays = document.querySelectorAll('li.cld-day');
        for (var selectedDay in allDays) {
            try{
                var stringDate = allDays[selectedDay].getAttribute("data-date");
            }catch(e){
            }
        }
    },
    drawDay: function(x,y,style=null,date=null){
        var obj = document.querySelectorAll('li.cld-day[data-x="'+x+'"][data-y="'+y+'"] p span');
        var day = date.getDate();
        this.drawElementDay(obj[0],day,style,date.toDateString());
        
        var objCldNumber = document.querySelectorAll('li.cld-day[data-x="'+x+'"][data-y="'+y+'"] p p');
        objCldNumber[0].innerHTML = this.dayWeekName[date.getDay()].substr(0,3);

        // console.log(date);
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
        var date = this.actualDate;
        date = new Date(date.getFullYear(),date.getMonth()+1,1);
        this.actualDate = date;
        this.clearDays();
        this.clearHolidays();
        this.drawDays(date);
    },
    previousMonth: function(){
        var date = this.actualDate;
        date = new Date(date.getFullYear(),date.getMonth()-1,1);
        this.actualDate = date;
        this.clearDays();
        this.clearHolidays();
        this.drawDays(date);
    },
    clearDays: function(){
        var objs = document.querySelectorAll('li.cld-day');
        for(var obj in objs){
            try{
                // objs[obj].classList.remove('currMonth');
                objs[obj].classList.remove('prevMonth');
            }catch(e){}
        }
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
            if (event.target.matches('.cld-fwd')){
                calendar.nextMonth();
            }
            if (event.target.matches('.cld-rwd')){
                calendar.previousMonth();
            }
        }, false);        
    },
    drawSideHoliday: function(holiday, type){
        var block_side_holidays = document.getElementById("block_side_holidays");
        var side_holiday = document.createElement("li");
        var media = document.createElement("div");
        media.classList.add("media");
        media.setAttribute("data-target","image");
        media.innerHTML = "<img src='images/imuni.jpg' alt=''/>"

        // console.log(holiday);
        var info = document.createElement("div");
        info.innerHTML = "<div class=info>";
        info.innerHTML += "<p class=date>"+holiday.date.getDate()+" de "+this.months[holiday.date.getMonth()]+"</p>";
        info.innerHTML += "<p class=type><small>"+type+"</small><span>"+holiday.title+"</span></p>";
        info.innerHTML += "<a class='button_dnw' href='#' data-target='dnw'>DOWNLOAD</a>";
        info.innerHTML += "</div>"

        block_side_holidays.appendChild(side_holiday);
        side_holiday.appendChild(media);
        side_holiday.appendChild(info);
    },
    clearSideHolidays: function(){
        var objs = document.querySelectorAll('ul.side_bar_holidays');
        for(var obj in objs){
            try{
                objs[obj].innerHTML = "";
            }catch(e){}
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    calendar.init();
});