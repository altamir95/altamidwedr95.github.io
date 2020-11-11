var div_new = document.getElementsByClassName('droppable')[0];
var rect = div_new.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);

var draggie = new Draggabilly('.draggable');
draggie.on('pointerUp', function (event, pointer) {

    if (pointer.pageX > rect.left && pointer.pageX < rect.right&&pointer.pageY>rect.top&&pointer.pageY<rect.bottom) {
        console.log(pointer.pageX, pointer.pageY);
        var div_new_new =event.target.cloneNode(true);
        div_new_new.removeAttribute('style');
        div_new_new.classList.remove('m-5');
        div_new.append(div_new_new);
        event.target.remove();
    //    .classList.remove('btn-light'); 
    }
});