// function seeds() {
//     this.style.display ='none';
// }


//pie moving
function pieMove() {
    pieStripe1.setAttribute('id', 'pie-body-shape1-transition');
    pieStripe2.setAttribute('id', 'pie-body-shape2-transition');
    pieStripe3.setAttribute('id', 'pie-body-shape3-transition');
    pieStripe4.setAttribute('id', 'pie-body-shape4-transition');
    pieStripe5.setAttribute('id', 'pie-body-shape5-transition');
    pieStripe6.setAttribute('id', 'pie-body-shape6-transition');
    pieStripe7.setAttribute('id', 'pie-body-shape7-transition');
    pieStripe8.setAttribute('id', 'pie-body-shape8-transition');
    pieStripe9.setAttribute('id', 'pie-body-shape9-transition');
    pieStripe10.setAttribute('id', 'pie-body-shape10-transition');
    pieStripe11.setAttribute('id', 'pie-body-shape11-transition');
    pieStripe12.setAttribute('id', 'pie-body-shape12-transition');
    setTimeout(function(){
        pieStripe1.setAttribute('id', 'pie-body-shape1');
        pieStripe2.setAttribute('id', 'pie-body-shape2');
        pieStripe3.setAttribute('id', 'pie-body-shape3');
        pieStripe4.setAttribute('id', 'pie-body-shape4');
        pieStripe5.setAttribute('id', 'pie-body-shape5');
        pieStripe6.setAttribute('id', 'pie-body-shape6');
        pieStripe7.setAttribute('id', 'pie-body-shape7');
        pieStripe8.setAttribute('id', 'pie-body-shape8');
        pieStripe9.setAttribute('id', 'pie-body-shape9');
        pieStripe10.setAttribute('id', 'pie-body-shape10');
        pieStripe11.setAttribute('id', 'pie-body-shape11');
        pieStripe12.setAttribute('id', 'pie-body-shape12');
    }, 1000);
    var interval = window.setInterval(function(){
        timesRun += 1;
        pieStripe1.setAttribute('id', 'pie-body-shape1-transition');
        pieStripe2.setAttribute('id', 'pie-body-shape2-transition');
        pieStripe3.setAttribute('id', 'pie-body-shape3-transition');
        pieStripe4.setAttribute('id', 'pie-body-shape4-transition');
        pieStripe5.setAttribute('id', 'pie-body-shape5-transition');
        pieStripe6.setAttribute('id', 'pie-body-shape6-transition');
        pieStripe7.setAttribute('id', 'pie-body-shape7-transition');
        pieStripe8.setAttribute('id', 'pie-body-shape8-transition');
        pieStripe9.setAttribute('id', 'pie-body-shape9-transition');
        pieStripe10.setAttribute('id', 'pie-body-shape10-transition');
        pieStripe11.setAttribute('id', 'pie-body-shape11-transition');
        pieStripe12.setAttribute('id', 'pie-body-shape12-transition');
        setTimeout(function(){
            pieStripe1.setAttribute('id', 'pie-body-shape1');
            pieStripe2.setAttribute('id', 'pie-body-shape2');
            pieStripe3.setAttribute('id', 'pie-body-shape3');
            pieStripe4.setAttribute('id', 'pie-body-shape4');
            pieStripe5.setAttribute('id', 'pie-body-shape5');
            pieStripe6.setAttribute('id', 'pie-body-shape6');
            pieStripe7.setAttribute('id', 'pie-body-shape7');
            pieStripe8.setAttribute('id', 'pie-body-shape8');
            pieStripe9.setAttribute('id', 'pie-body-shape9');
            pieStripe10.setAttribute('id', 'pie-body-shape10');
            pieStripe11.setAttribute('id', 'pie-body-shape11');
            pieStripe12.setAttribute('id', 'pie-body-shape12');
        }, 1000);
    }, 2000);
    if(timesRun === 1){
        clearInterval(interval);
    }
}