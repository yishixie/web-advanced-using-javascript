window.onload = function () {
    'use strict';
};



//PIE clicking
pieClick.addEventListener('click',pieMove,false);




// watermelon taking out the seeds
// seedElement1.addEventListener('click',seeds,false);
// seedElement2.addEventListener('click',seeds,false);
// seedElement3.addEventListener('click',seeds,false);
// seedElement4.addEventListener('click',seeds,false);
// seedElement5.addEventListener('click',seeds,false);
// seedElement6.addEventListener('click',seeds,false);
// seedElement7.addEventListener('click',seeds,false);
// seedElement8.addEventListener('click',seeds,false);
// seedElement9.addEventListener('click',seeds,false);
// seedElement10.addEventListener('click',seeds,false);
// seedElement11.addEventListener('click',seeds,false);






//BURGUR DRAGGING
// var dragSrcEl = null;

// function handleDragStart() {
//     document.getElementById('burger-body-shape2').style.opacity = '0';

//     dragSrcEl = this;

//     // e.dataTransfer.effectAllowed = 'move';
//     // e.dataTransfer.setData('text/html', this.innerHTML);
// }


// function handleDragOver(e) {
//     if (e.preventDefault) {
//         e.preventDefault(); //Allows us to drop.
//     }

//     e.dataTransfer.dropEffect = 'move'; 

//     return false;
// }

// function handleDragEnter() {
//     this.classList.add('over');
// }

// function handleDragLeave() {
//     this.classList.remove('over');  // this / e.target is previous target element.
// }

// function handleDrop(e) {
//     if (e.stopPropagation) {
//         e.stopPropagation(); // stops the browser from redirecting.
//     }
//     if (dragSrcEl != this) {
//         // Set the source column's HTML to the HTML of the column we dropped on.
//         dragSrcEl.innerHTML = this.innerHTML;
//         this.innerHTML = e.dataTransfer.getData('text/html');
//     }
//     return false;
// }

// function handleDragEnd() {
//     [].forEach.call(drags, function (drag) {
//         drag.classList.remove('over');
//     });
// }


// var drags = document.querySelectorAll('#burger-body .drag');
// [].forEach.call(drags, function(drag) {
//     drag.addEventListener('dragstart', handleDragStart, false);
//     drag.addEventListener('dragenter', handleDragEnter, false);
//     drag.addEventListener('dragover', handleDragOver, false);
//     drag.addEventListener('dragleave', handleDragLeave, false);
//     drag.addEventListener('drop', handleDrop, false);
//     drag.addEventListener('dragend', handleDragEnd, false);
// });



