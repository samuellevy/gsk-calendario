var calendar = {
    init: function(){
        console.log('%cstarting app', 'color:green');
        calendar.mountCalendar();
        // this.drawDay();
    },
    getJson: function(){
        var obj = {a:1, b:2, c:3};
        return obj;
    },
    mountCalendar: function(){
        this.drawGrid();
        this.drawDays();
    },
    drawGrid: function(){
        // console.log('%cmounting calendar', 'color:green');
        var obj = this.getJson();
        var x = 0;
        while (x < 6){
            var y = 0;
            while(y < 7){
                this.drawGridDay([x,y]);
                y++;
            }
            x++;
        }
        
        for (var prop in obj) {
            // ctrl+shift+k (para abrir o console no mozilla firefox)
            // console.log("obj." + prop + " = " + obj[prop]);
        }
    },
    drawGridDay: function(position){
        var block_days = document.getElementById("cld-days");
        
        var container = document.createElement("li");
        var day = document.createElement("p");
        var caption = document.createElement("span");
        var content = document.createTextNode(position);
        
        container.classList.add("cld-day");
        day.classList.add("cld-number");
        
        container.setAttribute("data-x", position[0]);
        container.setAttribute("data-y", position[1]);
        
        container.appendChild(day);
        day.appendChild(caption);
        caption.appendChild(content);
        block_days.appendChild(container);
    },
    drawDays: function(){
        var today = new Date("01/01/2019");
        var dayOfWeek = today.getDay();
        console.log("primeiro dia da semana do mês: " + dayOfWeek);
        console.log(today.getMonth());

        var lastday = new Date(2019, 5+1, 0).getDate();
        var lastday_lastmonth = new Date(2019, 0+1, 0).getDate();

        var day_lastmonth = new Date(2019, 4+1, 0).getDate();
        var day_nextmonth = 1;
        console.log(lastday_lastmonth);

        var x = 0;
        var y = 0;
        var day = 1;

        if(dayOfWeek>0){
            day_lastmonth = lastday_lastmonth-dayOfWeek;
            for(y;y<=dayOfWeek;y++){
                this.drawDay(x,y,day_lastmonth,'prevMonth');
                day_lastmonth++;
            }
        }

        while (x < 6){
            while(y < 7){
                if(day <= lastday){
                    this.drawDay(x,y,day);
                }
                else{
                    this.drawDay(x,y,day_nextmonth,'prevMonth');
                    day_nextmonth++;
                }
                y++;
                day++;
            }
            var y = 0;
            x++;
        }
    },
    drawDay: function(x,y,day,style=null){
        var obj = document.querySelectorAll('li.cld-day[data-x="'+x+'"][data-y="'+y+'"] p span');
        this.drawElementDay(obj[0],day,style);
        // obj[0].innerHTML = "Teste";
        // console.log(obj[0]);
    },
    drawElementDay: function(container, text, style=null){
        container.innerHTML = text;
        container.parentElement.parentElement.classList.add(style);
    },
    drawCalendar: function(){},
    changeMonth: function(){},
    changeType: function(){},
    mountSideBar: function(){}
}


document.addEventListener("DOMContentLoaded", function() {
    calendar.init();
});