var starting_itter = 3;
function visitObj($container, obj, itterations, ulclass) {
    if (ulclass) {
        var $ul = $('<ul class='+ulclass+'>');
    } else {
        var $ul = $('<ul>');
    }

    for (var prop in obj) {
        var $li = $('<li>');
        $li.append('<h2 class="name">' + prop + '</h2>');
        if (typeof obj[prop] === "object") {
             visitObj($li, obj[prop], itterations + 1, 'json-value');
        } else {
            $li.append('<span class="json-object">'+obj[prop]+'</span>');                   
        }
        $ul.append($li);
    }
    $container.append($ul);
}

visitObj($("#pokemon"), pokedex, starting_itter, 'list');

var options = {
  valueNames: ['name', 'id']
};

var userList = new List('pokemon', options);
