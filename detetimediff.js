    var res=this.today_date+' '+this.today_time;
          // var diff_sec =this.checkIn_date_time - res;



var date_future = (new Date(this.checkIn_date_time))-(new Date(res));
            var delta = Math.abs(date_future) / 1000;

          // calculate (and subtract) whole days
          var days = Math.floor(delta / 86400);
          delta -= days * 86400;

          // calculate (and subtract) whole hours
          var hours = Math.floor(delta / 3600) % 24;
          var hrs;
          delta -= hours * 3600;
          if(hours<10)
          {
            hrs="0"+hours;
          }else{
            hrs=hours;
          }
          // calculate (and subtract) whole minutes
          var minutes = Math.floor(delta / 60) % 60;
          var minits;
          if(minutes<10)
          {
            minits="0"+minutes;
          }else{
            minits=minutes;
          }
          delta -= minutes * 60;
          // what's left is seconds
          var seconds = delta % 60;  // in theory the modulus is not required
          // alert(hrs+':'+minits+':00');
          this.duration_in_meeting=hrs+':'+minits+':00';
