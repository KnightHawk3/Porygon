function parsePokedex($container, pokedex) {
    var $ul = $('<ul class="list list-inline">');

    for (var pokemon in pokedex) {
        var $li = $('<li class="pokemon-card">'); // Start the item for the pokemon
        // Print the name of the pokemon as a H1 class name
        $li.append('<h3 class="name">' + pokemon + '</h3>');
        // Print the ID of the pokemon div class id-container span class id
        $li.append('<div class="id-container">Pokedex Number: <span class="id">' + pokedex[pokemon]["num"] + "</span></div>");
        
        // Print the types of the pokemon
        $li.append('<div class="types-container">Type(s): <span class="types">' + pokedex[pokemon]["types"].join(", ") + "</span></div>");

        $li.append('<div class="egg-container"> Egg Group(s): <span class="egg-groups">' + pokedex[pokemon]["egg groups"].join(", ") + "</span>");
        // Create some base stat bars
        $li.append('<table style="width:100%">');
        $li.append('<tr><td>HP: </td><td style="width:20">' + makeStatBar(pokedex[pokemon]["base stats"]["hp"], "#FF5050") + "</td></tr>");
        $li.append('<tr><td>Attack: </td><td>' +  makeStatBar(pokedex[pokemon]["base stats"]["atk"], "#FF9933") + "</td></tr>");
        $li.append('<tr><td>Defence: </td><td>' + makeStatBar(pokedex[pokemon]["base stats"]["def"], "#FFFF94") + "</td></tr>");
        $li.append('<tr><td>Sp. Atk: </td><td>' + makeStatBar(pokedex[pokemon]["base stats"]["spa"], "#0099FF") + "</td></tr>");
        $li.append('<tr><td>Sp. Def: </td><td>' + makeStatBar(pokedex[pokemon]["base stats"]["spd"], "#0033CC") + "</td></tr>");
        $li.append('<tr><td>Speed: </td><td>' +   makeStatBar(pokedex[pokemon]["base stats"]["spe"], "#00CC00") + "</td></tr>");
        $li.append('</table>');

        // Create some Gender Ratio Bars
        if (pokedex[pokemon]["gender ratio"]){
            // if they have a gender ratio value, create a bar filled with blue to the percent male, therefore leaving the rest pink
            $li.append('Gender:<div class="gender-container">' + makeGenderBar(pokedex[pokemon]["gender ratio"]["M"]*100, '#3399FF', '#FF99CC'));
        // If the pokemon has a gender value (and therefore is all one gender)
        } else if (pokedex[pokemon]["gender"]) {
            // If they are all male, make an all male bar
            if (pokedex[pokemon]["gender"] == "M") {
                $li.append('Gender:<div class="gender-container">' + makeGenderBar(100, '#3399FF', '#FF99CC')+ '</div>');
            // If they are all female, make an all female bar
            } else if (pokedex[pokemon]["gender"] == "F"){
                $li.append('Gender:<div class="gender-container">' + makeGenderBar(0, '#3399FF', '#FF99CC')+ '</div>');
            // If they dont have either then make a genderless bar
            } else {
                $li.append('Gender:<div class="gender-container">' + makeGenderBar()+ '</div>');
            }
        // If they dont have a gender or a gender ratio then they are 50/50, make a 50% male bar
        } else {
                $li.append('Gender:<div class="gender-container">' + makeGenderBar(50, '#3399FF', '#FF99CC')+ '</div>');
        }


        $ul.append($li); // Add the item to the list
    }
    $container.append($ul); // Add the list to the div
}

function makeStatBar(stat, color1) {
    var scaledStat = (stat / 200) * 100;
    return stat + '</td><td class="statbar-td"> <div class="progress bar statbar" style="background: -o-linear-gradient(left, '+ color1 +' '+scaledStat+'%, rgba(0,0,0,0) 0%); background: -moz-linear-gradient(left, '+ color1 +' '+scaledStat+'%, rgba(0,0,0,0) 0%); background: -webkit-linear-gradient(left, '+ color1 +' '+scaledStat+'%, rgba(0,0,0,0) 0%); background: linear-gradient(left, '+ color1 +' '+scaledStat+'%, rgba(0,0,0,0) 0%); background: -ms-linear-gradient(left, '+ color1 +' '+scaledStat+'%, rgba(0,0,0,0) 0%);"></div>';
}

function makeGenderBar(percent, color1, color2) {
    if (color1 && color2) {
        var background = percent + '% <div class="progress bar genderbar" style="background: -o-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: -moz-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: -webkit-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%); background: -ms-linear-gradient(left, '+ color1 +' '+percent+'%, '+ color2 +' 0%);"></div>'+(100-percent)+'%';
    } else {
        var background = '<div class="progress bar genderbar genderless">Genderless</div>';
    }
    return background;
}

parsePokedex($("#pokemon"), pokedex_dictionary);

var options = {
  valueNames: ['name', 'id', 'types', 'egg-groups']
};

var userList = new List('pokemon', options);
userList.sort('id', {asc:true});
