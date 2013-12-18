var starting_itter = 3;
function parsePokedex($container, pokedex, itterations) {
    var $ul = $('<ul class="list list-inline">');

    for (var pokemon in pokedex) {
        var $li = $('<li class="pokemon-card">'); // Start the item for the pokemon
        $li.append('<h'+itterations+' class="name">' + pokemon + '</h'+itterations+'>'); // Print the pokemon
        //parsePokedex($li, pokedex[pokemon], itterations + 1, 'json-value');
        $li.append('<div class="id">Pokedex Number: ' + pokedex[pokemon]["num"] +"</div>")
        if (pokedex[pokemon]["types"][1]) {
            $li.append('<div class="types">Types: ' + pokedex[pokemon]["types"][0] + ", " + pokedex[pokemon]["types"][1] + "</div>");
        } else {
            $li.append('<div class="types">Types: ' + pokedex[pokemon]["types"][0] + "</div>");
        }
        if (pokedex[pokemon]["gender ratio"]){
            $li.append('Gender:<div class="gender-container">' + makebar(pokedex[pokemon]["gender ratio"]["M"]*100, '#3399FF', '#FF99CC'));
        } else if (pokedex[pokemon]["gender"]) {
            if (pokedex[pokemon]["gender"] == "M") {
                $li.append('Gender:<div class="gender-container">' + makebar(100, '#3399FF', '#FF99CC')+ '</div>');
            } else if (pokedex[pokemon]["gender"] == "F"){
                $li.append('Gender:<div class="gender-container">' + makebar(0, '#3399FF', '#FF99CC')+ '</div>');
            } else {
                $li.append('Gender:<div class="gender-container">' + makebar()+ '</div>');
            }
        } else {
                $li.append('Gender:<div class="gender-container">' + makebar(50, '#3399FF', '#FF99CC')+ '</div>');
        }
        $ul.append($li); // Add the item to the list
    }
    $container.append($ul); // Add the list to the div
}

function makebar(percent, color1, color2) {
    if (color1 && color2) {
        var background = percent + '% <div class="progress gender" style="background: -o-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: -moz-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: -webkit-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: -ms-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%);"></div>'+(100-percent)+'%';
    } else {
        var background = '<div class="progress gender genderless">Genderless</div>';
    }
    return background;
}

parsePokedex($("#pokemon"), pokedex_dictionary, starting_itter);

var options = {
  valueNames: ['name', 'id', 'types']
};

var userList = new List('pokemon', options);
userList.sort('id', {asc:true});
