var array_arab = ['جَمِيلٌ', 'جَدِيدٌ', 'قَدِيم', 'كَبِيرٌ', 'صَغِيرٌ', 'يَسْكُنُ', 'نَشِيطٌ'];

var array_noun = ['نَشِيطٌ', 'صَغِيرٌ', 'كَبِيرٌ', 'قَدِيم', 'جَدِيدٌ', 'جَمِيلٌ'];
var array_verb = ['يَسْكُنُ'];
var array_particle = [];


for (var i = 0; i < array_arab.length; i++) {
    create_Element({
        tagName: 'div',
        internals: array_arab[i],
        class: ['btn','btn-sm','btn-outline-dark','border-dotted','draggable','m-1'],
        appendPlace: document.querySelector('.draggables-place')
    });
}


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
document.getElementById('checking-transfer-correctly').onclick = function(){
    var nounPlace = document.getElementById('noun');
    var verbPlace = document.getElementById('verb');
    var particlePlace = document.getElementById('particle');

    var nounPlaceElem = nounPlace.getElementsByClassName('draggable');
    var verbPlaceElem = verbPlace.getElementsByClassName('draggable');
    var particlePlaceElem = particlePlace.getElementsByClassName('draggable');

    for(var i = 0;i < nounPlaceElem.length;i++){
        if(array_noun.indexOf( nounPlaceElem[i].innerHTML ) == -1){
            // document.getElementById('noun').classList.remove('bg-success');
            document.getElementById('noun').style.background = 'black';
        }
    }
    for(var i = 0;i < verbPlaceElem.length;i++){
        if(array_verb.indexOf( verbPlaceElem[i].innerHTML ) == -1){
            // document.getElementById('verb').classList.remove('bg-success');
            document.getElementById('verb').style.background = 'black';
        }
    }
    for(var i = 0;i < particlePlaceElem.length;i++){
        if(array_rus.indexOf( particlePlaceElem[i].innerHTML ) == -1){
            // document.getElementById('particle').classList.remove('bg-success');
            document.getElementById('particle').style.background = 'black';
        }
    }
};







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