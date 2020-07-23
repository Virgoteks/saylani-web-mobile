// Assignment # 7 | Chapters 43 - 48 
//  Task 01
function clickMe() {
    alert('Link Clicked');
}
//  Task 02
function mobilePurchase() {
    alert('Thanks for purchasing mobile from us');
}
// Task 03
function deleteRow(e) {
    e.parentNode.parentNode.remove();
}
// Task 04
function changeImage(e) {
    e.src = 'mobile-2.png';
}
function revertImage(e) {
    e.src = 'mobile-1.png';
}
// Task 05
var increaseBtn = document.getElementById('increase');
var decreaseBtn = document.getElementById('decrease');
var display_value = document.getElementById('display');
var value_count = 0;
increaseBtn.addEventListener('click', () => {
    value_count++;
    display_value.innerText = value_count;
});
decreaseBtn.addEventListener('click', () => {
    value_count--;
    display_value.innerText = value_count;
});
