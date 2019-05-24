// global variables
const liItems = [...document.querySelectorAll('.drop')];
const notficationsOut = document.querySelector('.notfications_out');
const notficati = document.querySelectorAll('.notficati .drop_li').length;
const labels = document.querySelectorAll('.turn_labels');
const onOff = document.querySelectorAll('.on_off');
const burger = document.querySelector('.burger');
const deleteButtons = [...document.querySelectorAll('.X')];

notficationsOut.textContent = notficati;

// funtions
function leftNavClick(item) {
    item.addEventListener('click', (e) => {
        const ul = document.querySelector('.drop_ul')
        const next = e.target.nextElementSibling;
        if (!e.target.lastElementChild.classList.contains('active')) {
            e.target.lastElementChild.classList.add('active');
        } else {
            e.target.lastElementChild.classList.remove('active');
        }
    });
}
$(function () {
    $('#datetimepicker1').datetimepicker({
        format: 'YYYY-MM-DD',
        useCurrent: false
    });
});

function changeLabels(item) {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('off')) {
            e.target.classList.remove('off');
            e.target.previousSibling.previousSibling.classList.remove('off');
        } else {
            e.target.classList.add('off');
            e.target.previousSibling.previousSibling.classList.add('off');
        }
    });
}

function deleteDetailsButton(item) {
    item.addEventListener('click',(e)=>{
        e.target.parentElement.style.display = 'none'; 
    })
}
// eventlisteners 

burger.addEventListener('click', () => {
    const menu = document.querySelector('.fixed');
    const sss = document.querySelector('.burger span');
    sss.classList.toggle('toggler');
    menu.classList.toggle('open');
})
deleteButtons.forEach(item=>{
    deleteDetailsButton(item);
})
labels.forEach(item => {
    changeLabels(item);
})
liItems.forEach(item => {
    leftNavClick(item);
});