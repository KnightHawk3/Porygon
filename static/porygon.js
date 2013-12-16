var starting_itter = 3;
function visitObj($container, obj, itterations, ulclass) {
    if (ulclass) {
        var $ul = $('<ul class='+ulclass+'>');
    } else {
        var $ul = $('<ul>');
    }

    for (var prop in obj) {
        var $li = $('<li>');
        if (itterations != starting_itter) {
            var colon = ": ";
        } else {
            var colon = "";
        }
        if (prop != 0) {
            $li.append('<h'+itterations+' class="name">' + prop + '</h'+itterations+'>'+colon);
        }
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
