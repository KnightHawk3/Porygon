var starting_itter = 3;
function parsePokedex($container, pokedex, itterations, ulclass) {
    if (ulclass) {
        var $ul = $('<ul class='+ulclass+'>');
    } else {
        var $ul = $('<ul>');
    }

    for (var pokemon in pokedex) {
        var $li = $('<li>'); // Start the item for the pokemon
        $li.append('<h'+itterations+' class="name">' + pokemon + '</h'+itterations+'>'); // Print the pokemon
        //parsePokedex($li, pokedex[pokemon], itterations + 1, 'json-value');
        $ul.append($li); // Add the item to the list
    }
    $container.append($ul); // Add the list to the div
}

parsePokedex($("#pokemon"), pokedex_dictionary, starting_itter, 'list');

var options = {
  valueNames: ['name', 'id']
};

var userList = new List('pokemon', options);
