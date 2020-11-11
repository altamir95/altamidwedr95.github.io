var div_new = document.getElementsByClassName('droppable')[0];
var rect = div_new.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

var draggie = new Draggabilly('.draggable');
draggie.on('pointerUp', function (event, pointer) {

    if (pointer.pageX > rect.left && pointer.pageX < rect.right&&pointer.pageY>rect.top&&pointer.pageY<rect.bottom) {
        console.log(pointer.pageX, pointer.pageY);
    }
});