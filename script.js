var array_arab = ['جَمِيلٌ', 'جَدِيدٌ', 'قَدِيم', 'كَبِيرٌ', 'صَغِيرٌ', 'يَسْكُنُ', 'نَشِيطٌ'];
var array_rus = ['активный', 'жимет', 'маленький', 'большой', 'старый', 'новый', 'красивый'];

// for (var i = 0; i < array_arab.length; i++) {
//     create_Element({
//         tagName: 'div',
//         internals: array_arab[i],
//         class: ['btn', 'btn-light', 'btn-lg', 'm-1', 'draggable'],
//         appendPlace: document.body
//     });
//     create_Element({
//         tagName: 'div',
//         internals: array_rus[i],
//         class: ['btn', 'btn-light', 'btn-lg', 'm-1', 'draggable'],
//         appendPlace: document.body
//     });
// }


var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
var draggie;
// init Draggabillies
for (var i = 0; i < draggableElems.length; i++) {
    var my_index = i;
    var draggableElem = draggableElems[i];
     draggie = new Draggabilly(draggableElem, {
        containment: '#transfer-correctly'
    });
    draggie.rect = draggableElem.getBoundingClientRect();
    draggies.push(draggie);
    draggie.on('pointerUp', function (event, pointer) {
        var div_new = document.getElementsByClassName('droppable');
        for (var i = 0; i < div_new.length; i++) {
            var rect = div_new[i].getBoundingClientRect();
            console.log(rect.top, rect.right, rect.bottom, rect.left);
            if (pointer.pageX > rect.left && pointer.pageX < rect.right && pointer.pageY > rect.top && pointer.pageY < rect.bottom) {
                console.log(pointer.pageX, pointer.pageY);
                var div_new_new = event.target.cloneNode(true);
                div_new_new.removeAttribute('style');
                div_new[i].append(div_new_new);
                event.target.remove();
            } else {
                event.target.removeAttribute('style');
            }
        }
    });
}
// document.getElementById('bts').onclick = function(){
//     var itogarab = document.getElementById('arab');
//     var allitogarab = itogarab.getElementsByClassName('draggable');
//     for(var i = 0;i < allitogarab.length;i++){
//         if(array_rus.indexOf( allitogarab[i].innerHTML ) != -1){
//             document.getElementById('arab').classList.remove('bg-success');
//             document.getElementById('arab').classList.add('btn-danger');
//         }
//     }
// };







// СОЗДАТЬ КНОПКУ
function create_Element(option) {
    // ЧТО ЗА ЭЛЕМЕНТ
    var p = document.createElement(option.tagName);
    // НАБЬЕМ ЭЛЕМЕНТ КЛАССОМ
    for (var i = 0; i < option.class.length; i++) {
        p.classList.add(option.class[i]);
    }
    // ЧТО ВНУТРИ ЭЛЕМЕНТА
    p.append(option.internals);
    // КУДА ВОЙДЕТ ЭЛЕМЕНТ
    option.appendPlace.append(p);
}