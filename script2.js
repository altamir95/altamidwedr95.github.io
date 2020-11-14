var draggie = new Draggabilly('.draggable', {
  axis: 'x'
});
draggie.on('pointerMove', function (event, pointer, moveVector) {
  console.log(this.position.x);
  if (this.position.x > 0) {
    document.getElementsByClassName("droppable")[0].style.height = '50px';
    document.getElementsByClassName("droppable")[1].style.height = '300px';
  }
  if (this.position.x < 0) {
    document.getElementsByClassName("droppable")[1].style.height = '50px';
    document.getElementsByClassName("droppable")[0].style.height = '300px';
  }

})