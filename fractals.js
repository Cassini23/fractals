
document.addEventListener('DOMContentLoaded',function(){
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    context.beginPath();
    var start = canvas.width-25;
    canvas.addEventListener('click',function(e){
        console.log('Hey hey');
        console.log(e);
        fib(e.clientX);
    });

    function drawCurve(x1,y1,x2,y2,x3,y3){


        context.beginPath();
        context.moveTo(x1, y1);
        context.bezierCurveTo(x1, y1, x2, y2, x3, y3);
        context.lineWidth = 1;

        // line color

        context.strokeStyle = 'rgba(0,'+Math.floor(255-100)+','+Math.floor(255-25*x1)+','+(start%2)/100+')';
        context.stroke();
        context.closePath();

    }
    function fib(value){
        if(value===1) return 1;
        else {
            drawCurve(start/value,start/value,canvas.width/value*50,canvas.height,canvas.width,canvas.height/value*50);
            return value*fib(value-1);
        }
    }


});

