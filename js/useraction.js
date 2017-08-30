var timeTag;
var timeNum=0;
function pageStopTime(tname,isStart,userStr)
{
     if(isStart==true)
     {
       timeTag=setInterval(CountTime,1000);
     }
     else
     {
         var c_time=timeNum;
         timeNum=0;
         clearInterval(timeTag);
         $.ajax({
                type: "POST",
                url: 'AddTimeInfo.aspx',
                async: true,
                data: {"c_time": c_time,"tname":tname,"userStr":userStr},
                beforeSend: function(xmlHttpRequest) { },
                success: function(data, textStatus) {
                    
                },
                complete: function(xmlHttpRequest, textStatus) { },
                error: function() {

                }
         });
     }
}

function CountTime()
{
  timeNum++;
}

function setReadNum(tid,source,userStr)
{
   $.ajax({
                type: "POST",
                url: 'SetNumInfo.aspx',
                async: true,
                data: {"tid": tid,"source":source,"userStr":userStr},
                beforeSend: function(xmlHttpRequest) { },
                success: function(data, textStatus) {
                    
                },
                complete: function(xmlHttpRequest, textStatus) { },
                error: function() {

                }
       });
}