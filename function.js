var proximo = document.getElementById('skip');
var pontucacao = document.getElementById('score');
var totpontucao = document.getElementById('totalscore');
var countdown = document.getElementById('countdown');
var count = 0
var scoreCount = 0
var duration = 0
var qaset = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

proximo.addEventListener('click', function () {
    step();
    duration = 10;
})

qaAnsRow.forEach(function(qaAnsRowSingle){
    qaAnsRowSingle.addEventListener('click', function(){
        setTimeout(function(){
            step();
            duration = 10;
        },500)

        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount += 10
            pontucacao.innerHTML = scoreCount;
            totpontucao.innerHTML = scoreCount;
        }
    })
})


function step() {
    count += 1;
    for (var i = 0; i < qaset.length; i++) {
        qaset[i].className = 'qa_set';
    }
    qaset[count].className = 'qa_set active';
    if (count == 10) {
        proximo.style.display = 'none';
        clearInterval(duracao);
        countdown.innerHTML = 0;
    }
}

var duracao = setInterval(function(){
    if(duration == 10){
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if(countdown.innerHTML == '10'){
        step()
    }
},1000);