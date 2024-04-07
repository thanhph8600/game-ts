
var pokemonSelected: JQuery[] = []
let index = Number($('input[name="index"]').val())
let sum = index * 2

$(document).on('click','.choosed',async function(){
    onFlipper($(this))
    $(this).removeClass('choosed')
    if (pokemonSelected.length < 2) {
        pokemonSelected.push($(this))
    }
    if(pokemonSelected.length == 2){
        if(pokemonSelected[0].attr('data') == pokemonSelected[1].attr('data')){
            chooseTrue(pokemonSelected)
            sum -=2
            if (sum==0) {
                window.location.href = `/pokemon?index=${index + 1}`;
            }
        }else{
            chooseFalse(pokemonSelected)
        }
        pokemonSelected = []
    }
    console.log(pokemonSelected);
})

function onFlipper (element:JQuery) {
    let flipper = element.find('.flipper');
    flipper.css('transform', 'rotateY(180deg)');
};
  
function offFlipper(element:JQuery) {
    let flipper = element.find('.flipper');
    flipper.css('transform', 'rotateY(0deg)');
}

function chooseTrue(list:JQuery[]) {
    list[0].children('.flipper').css('border','1px solid green')
    list[1].children('.flipper').css('border','1px solid green')
    setTimeout(() => {
        list[0].remove()
        list[1].remove()
    }, 1000);
}

function chooseFalse(list:JQuery[]) {
    list[0].addClass('choosed')
    list[1].addClass('choosed')
    list[0].children('.flipper').addClass('border border-red-400')
    list[1].children('.flipper').addClass('border border-red-400')

    setTimeout(() => {
        offFlipper(list[0])
        offFlipper(list[1])
        list[0].children('.flipper').removeClass('border border-red-400')
        list[1].children('.flipper').removeClass('border border-red-400')
    }, 1000);
}







let outTime = index * 10;
var time = outTime;

    // Lấy đối tượng canvas và context
    const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement;
    const context: CanvasRenderingContext2D | null = canvas.getContext("2d");

    const intervalId = setInterval(renderTime, 1000);

    // Dừng vẽ sau 60 giây
    setTimeout(function () {
      clearInterval(intervalId);
    }, outTime * 1000); // Chuyển đổi giây thành mili giây


    
    function renderTime() {
      time -= 1;
      if(context){
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Vẽ hình tròn
        var centerX = canvas.width / 2 - 2;
        var centerY = canvas.height / 2 - 2;
        var radius = Math.min(canvas.width, canvas.height) / 2 - 4;

            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            context.lineWidth = 5; // Độ rộng đường vẽ
            context.strokeStyle = 'gray'; // Màu đường vẽ
            context.stroke();

        // Vẽ 1/3 hình tròn
        var startAngle = 0;
        var endAngle = (time / (outTime)) * 2 * Math.PI;

        context.beginPath();
        context.arc(centerX, centerY, radius, startAngle, endAngle);
        context.lineWidth = 5; // Độ rộng đường vẽ
        context.strokeStyle = 'red'; // Màu đường vẽ
        context.stroke();

        // Thêm số vào giữa
        var minute = Math.floor(time / 60);
        var second = time % 60;

        var number = `${minute} : ${second}`;
        context.font = "20px Arial";
        context.fillStyle = "black";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(number, centerX, centerY);
      }

      // Log giá trị của time
      console.log(time);

      // Kiểm tra nếu hết thời gian thì dừng interval
      if (time <= 0) {
        $('.choosed').removeClass('choosed');
        $('.popup').removeClass('hidden')
        clearInterval(intervalId);
      }
    }

$(document).on('click','.close-popup',function(){
    $('.popup').addClass('hidden')
})