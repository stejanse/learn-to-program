function load() {
  $.get('/api/todo_items', function (data) {
    var todos = JSON.parse(data);
    var todosHtml = '';
    for (var i = 0; i< todos.length; i++) {
      todosHtml += '<li><b>[X]</b> ' + todos[i].message + '</li>';
    }
    $("ul").html(todosHtml);
  });
}

$('body').on('click', 'b', function () {
  console.log("Trying to delete element.");
});

$('#new_item').submit(function (e) {
  e.preventDefault();
  console.log("Trying to add element with text: " + $('#message').val());
});

load();
