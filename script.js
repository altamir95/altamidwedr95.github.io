// var elem = document.querySelector('.draggable');
// var draggie = new Draggabilly( elem, {
//   // options...
// });

// // or pass in selector string as first argument
// var draggie = new Draggabilly( '.draggable', {
//   // options...
// });

// if you have multiple .draggable elements
// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for (var i = 0; i < draggableElems.length; i++) {
    var draggableElem = draggableElems[i];
    var draggie = new Draggabilly(draggableElem, {
        // options...
    });
    draggies.push(draggie);
}
draggie.on('pointerUp', function () {
    var droppableElem = document.querySelectorAll('.droppable');
    var rect = droppableElem[0].getBoundingClientRect();
    console.log(rect.top, this.position.y)
    if (rect.top > this.position.y) {
        droppableElem[0].classList.remove('bg-success')
        // document.getElementById('ff').classList.remove('')
    }
});