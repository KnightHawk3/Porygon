var starting_itter = 3;
function parsePokedex($container, pokedex, itterations) {
    var $ul = $('<ul class="list list-inline">');

    for (var pokemon in pokedex) {
        var $li = $('<li>'); // Start the item for the pokemon
        $li.append('<h'+itterations+' class="name">' + pokemon + '</h'+itterations+'>'); // Print the pokemon
        //parsePokedex($li, pokedex[pokemon], itterations + 1, 'json-value');
        $li.append('</br><span class="id">Pokedex Number: ' + pokedex[pokemon]["num"] +"</span>")
        $li.append('</br><span class="types">Types: ' + pokedex[pokemon]["types"] +"</span>")
        if (pokedex[pokemon]["gender ratio"]){
            $li.append('</br>Gender: ' + makebar(pokedex[pokemon]["gender ratio"]["M"]*100, '#3399FF', '#FF99CC'));
        } else if (pokedex[pokemon]["gender"]){
            $li.append('</br>Gender: ' + makebar(100));
        } else {
            $li.append('</br>Gender: ' + makebar(50, '#3399FF', '#FF99CC'));
        }
        $ul.append($li); // Add the item to the list
    }
    $container.append($ul); // Add the list to the div
}

function makebar(percent, color1, color2) {
    if (color1 && color2) {
        var background = '<div class="progress gender" style="background: -o-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: -moz-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: -webkit-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: -ms-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%);"></div>';
    } else {
        var background = '<div class="progress gender"><center>Genderless</center></div>';
    }
    return background;
}

parsePokedex($("#pokemon"), pokedex_dictionary, starting_itter);

var options = {
  valueNames: ['name', 'id', 'types', 'gender']
};

var userList = new List('pokemon', options);
