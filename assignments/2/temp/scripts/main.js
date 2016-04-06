window.onload = function () {
	'use strict';

};

//toggle the show menu click
function toggleNavPanel(x){
	var panel = document.getElementById(x),
	navarrow = document.getElementById('navarrow'), maxH='160px';
	if(panel.style.height == maxH){
		panel.style.height = '0px';
		navarrow.innerHTML = '&#9662;';
	} else {
		panel.style.height = maxH;
		navarrow.innerHTML = '&#9652;';
	}
}

//create a modal
var modalBtn = document.querySelector ('#js-triggers li:nth-of-type(2)');

    //set the append modal.
    var modal = document.createElement ('div');
    modal.id = 'modal';
    modal.setAttribute ('class', 'modal');

    var modalContent = document.createElement ('P');
    modalContent.id = 'modalContent';    
    modalContent.setAttribute ('class', 'modalContent');

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(modal);
    body.appendChild(modalContent);
    modalContent.textContent = 'Curious?';
    
    //for slecting area outside of the modalContent
    var modalWindow = document.getElementsByClassName('modal')[0];

    function openModal() {
    	modal.style.display ='block';
        modalContent.style.display ='block';     
    }

    function closeModal() {
    	modal.style.display ='none';   
        modalContent.style.display ='none';
    }

    function keyCloseModal(event) {
    	var key = event.keyCode;
    	if (key == 27) { 
    		closeModal();
    	}
    }

// call toggle the modal function
modalBtn.addEventListener('click',openModal,false);
body.addEventListener('keydown',keyCloseModal,false);
modalWindow.addEventListener('click',closeModal,false);
