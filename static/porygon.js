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
        $li.append('</br><span class="id">Pokedex Number: ' + pokedex[pokemon]["num"] +"</span>")
        $li.append('</br><span class="types">Types: ' + pokedex[pokemon]["types"] +"</span>")
        if (pokedex[pokemon]["gender ratio"]){
            $li.append("</br>Gender: " + makebar(pokedex[pokemon]["gender ratio"]["M"]*100));
        } else if (pokedex[pokemon]["gender"]){
            $li.append("</br>Gender: Genderless");
        } else {
            $li.append('<span class="gender"></br>Gender: ' + makebar(50)+ "</span>");
        }
        $ul.append($li); // Add the item to the list
    }
    $container.append($ul); // Add the list to the div
}

function makebar(percent) {
    var percentFemale = 100 - percent;
    var background = '<div class="progress gender" style="background: -o-linear-gradient(left, #3399FF '+percent+'%, #FF99CC ' + percentFemale+'%); background: -moz-linear-gradient(left, #3399FF '+percent+'%, #FF99CC '+ percentFemale+'%); background: -webkit-linear-gradient(left, #3399FF '+percent+'%, #FF99CC '+ percentFemale+'%); background: linear-gradient(left, #3399FF '+percent+'%, #FF99CC '+ parseInt(percentFemale)+'%); background: -ms-linear-gradient(left, #3399FF '+percent+'%, #FF99CC '+ percentFemale+'%);"></div>';
    return background;
}

parsePokedex($("#pokemon"), pokedex_dictionary, starting_itter, 'list-und');

var options = {
  valueNames: ['name', 'id', 'types']
};

var userList = new List('pokemon', options);
