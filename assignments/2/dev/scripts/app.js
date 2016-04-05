window.onload = function () {
    'use strict';

    /******************************************************************************/
    //set the variables of modal trigger button
    /*find the 1st li within #js-triggers*/
    var firstModalBtn = document.querySelector ('#js-triggers li:nth-of-type(2)');




    //set the append modal.
    var firstModal = document.createElement ('div');
    firstModal.id = 'first-modal';
    firstModal.setAttribute ('class', 'first-modal');

    var firstModalContent = document.createElement ('P');    
    firstModalContent.setAttribute ('class', 'first-modal-content');

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(firstModal);
    firstModal.appendChild(firstModalContent);
    firstModalContent.textContent = 'I am the modal!!!';

    function openFirstModal() {
        firstModal.style.display ='block';     
    }

    //set the function to close the first modal.
    function xClose() {
        firstModal.style.display ='none';   
    }

    function escClose(event) {
        var x = event.keyCode;
        if (x == 27) {  // 27 is the ESC key
            xClose();
        }
    }


    // call the toggleModal function.
    firstModalBtn.addEventListener ('click', openFirstModal, false);
    body.addEventListener ('keydown', escClose, false);  
    firstModal.addEventListener ('click', xClose, false);    

    /******************************************************************************/
    //set the variables of drop-down menu trigger button
    /*find the 1st li within #js-triggers*/
    // var dropDownBtn = document.querySelector ('#js-triggers li:nth-of-type(1)'); 

    // var dropDown

    //set the click toggle modal function.
    // function toggleModal() {
    //     if (firstModal.style.display != 'block') {
    //         openFirstModal();
    //     } else {
    //         xClose();
    //     }
    // }




};
