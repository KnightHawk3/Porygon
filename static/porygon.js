var types = ["bug", "electric", "fire", "grass", "normal", "rock", "dark", "dragon", "fairy", "fighting", "flying", "ghost", "ground", "ice", "poison", "psychc", "steel", "water"];
// I am so sorry for writing this
function parsePokedex($container, pokedex) {
    // Begin the unordered list
    var $ul = $('<ul class="list list-inline">');

    // Loop over this for every pokemon
    for (var pokemon in pokedex) {
        var $li = $('<li class="pokemon-card">'); // Start the item for the pokemon
        // Print the name of the pokemon as a H1 class name
        $li.append('<h3 class="name"><span class="name">' + pokemon + '</span><small class="id"> #' + pokedex[pokemon]["num"] + '</small></h3>');
        // -- Abilities -- 
        $li.append('<div class="ability-container"><h4>Abilities</h4>' + (function(pokedex, pokemon) {
            var abilities = [];
            for (var ability in pokedex[pokemon]["abilities"]) {
                if (ability == "0") {
                    abilities.push('<span class="abilitiy"> '+ pokedex[pokemon]["abilities"][ability] +'</span>');
                }
                if (ability == "1") {
                    abilities.push('<span class="abilitiy"> '+ pokedex[pokemon]["abilities"][ability] +'</span>');
                }
                if (ability == "h") {
                    abilities.push('<span class="hidden-ability abilitiy"> '+ pokedex[pokemon]["abilities"][ability] +'</span>');
                }
            }
            return abilities;})(pokedex, pokemon) + '</div>');
        // -- Abilities --
        
        // Print the types of the pokemon
        $li.append('<div class="types-container"><h4>Type(s)</h4> <span class="types">' + pokedex[pokemon]["types"].join(", ") + "</span></div>");

        // -- Weaknesses --
        var superEffective = [];
        var ultraEffective = [];
        var kindaResistant = [];
        var ultraResistant = [];
        var immune = [];
        var content = '<h4>Effectivness</h4><div class="weakness-container"><table class="table-bordered weakness-table">';
        for (var i = 0; i < types.length; i++) {
            if (pokedex[pokemon]["types"][1]) {
                if (weaknesschart[pokedex[pokemon]["types"][0]][types[i]] == 3|| weaknesschart[pokedex[pokemon]["types"][1]][types[i]] == 3) {
                    immune.push(types[i]);
                } else {
                    var typeSum = weaknesschart[pokedex[pokemon]["types"][0]] [types[i]] + weaknesschart[pokedex[pokemon]["types"][1]][types[i]];
                }
            } else {
                if (weaknesschart[pokedex[pokemon]["types"][0]][types[i]] == 3) {
                    immune.push(types[i]);
                } else {
                    var typeSum = weaknesschart[pokedex[pokemon]["types"][0]][types[i]];
                }
            }
            if (typeSum == 1) {
                superEffective.push(types[i]);
            } else if (typeSum == -1) {
                kindaResistant.push(types[i]);
            } else if (typeSum == -2) {
                ultraResistant.push(types[i]);
            } else if (typeSum == 2) {
                ultraEffective.push(types[i]);
            }
        }
        content += '<tr><td> Super Weak </td> <td>' + ultraEffective.join(", ") + "</td></tr>";
        content += '<tr><td> Weak </td> <td>' + superEffective.join(", ") + "</td></tr>";
        content += '<tr><td> Resistant </td> <td>' + kindaResistant.join(", ") + "</td></tr>";
        content += '<tr><td> Super Resistant </td> <td>' + ultraResistant.join(", ") + "</tr>";
        content += '<tr><td> Immune </td> <td>' + immune.join(", ") + "</tr>";
        content += "</table></div>";
        $li.append(content);
        // -- Weaknesses --

        // Egg groups
        $li.append('<div class="egg-container"><h4> Egg Group(s)</h4> <span class="egg-groups">' + pokedex[pokemon]["egg groups"].join(", ") + "</span>");
        // Create some base stat bars
        $li.append('<table class="stat-container"><tr><td>HP: </td><td style="width:20">' + makeStatBar(pokedex[pokemon]["base stats"]["hp"], "#FF5050") + "</td></tr>"
       + '<tr><td>Attack: </td><td>' +  makeStatBar(pokedex[pokemon]["base stats"]["atk"], "#FF9933") + "</td></tr>"
       + '<tr><td>Defence: </td><td>' + makeStatBar(pokedex[pokemon]["base stats"]["def"], "#FFFF94") + "</td></tr>"
       + '<tr><td>Sp. Atk: </td><td>' + makeStatBar(pokedex[pokemon]["base stats"]["spa"], "#0099FF") + "</td></tr>"
       + '<tr><td>Sp. Def: </td><td>' + makeStatBar(pokedex[pokemon]["base stats"]["spd"], "#0033CC") + "</td></tr>"
       + '<tr><td>Speed: </td><td>' +   makeStatBar(pokedex[pokemon]["base stats"]["spe"], "#00CC00") + "</td></tr></table>");
        // Create some Gender Ratio Bars
        if (pokedex[pokemon]["gender ratio"]){
            // if they have a gender ratio value, create a bar filled with blue to the percent male, therefore leaving the rest pink
            $li.append('<div class="gender-container"><h4>Gender</h4>' + makeGenderBar(pokedex[pokemon]["gender ratio"]["m"]*100, '#3399FF', '#FF99CC'));
        // If the pokemon has a gender value (and therefore is all one gender)
        } else if (pokedex[pokemon]["gender"]) {
            // If they are all male, make an all male bar
            if (pokedex[pokemon]["gender"] == "m") {
                $li.append('<div class="gender-container"><h4>Gender</h4>' + makeGenderBar(100, '#3399FF', '#FF99CC')+ '</div>');
            // If they are all female, make an all female bar
            } else if (pokedex[pokemon]["gender"] == "f"){
                $li.append('<div class="gender-container"><h4>Gender</h4>' + makeGenderBar(0, '#3399FF', '#FF99CC')+ '</div>');
            // If they dont have either then make a genderless bar
            } else {
                $li.append('<div class="gender-container"><h4>Gender</h4>' + makeGenderBar()+ '</div>');
            }
        // If they dont have a gender or a gender ratio then they are 50/50, make a 50% male bar
        } else {
                $li.append('<div class="gender-container"><h4>Gender</h4>' + makeGenderBar(50, '#3399FF', '#FF99CC')+ '</div>');
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

function toggleGenderBars(box) {
    if (box.checked) {
        $(".gender-container").css("display", "block");
        localStorage.setItem('genderbox', "true");
    } else {
        $(".gender-container").css("display", "none");
        localStorage.setItem('genderbox', 'false')
    }
}
if (localStorage.getItem('genderbox') == "false") {
    document.getElementById('genderbox').checked = false;
}

function toggleStatBars(box) {
    if (box.checked) {
        $(".stat-container").css("display", "block");
        localStorage.setItem('statbox', "true");
    } else {
        $(".stat-container").css("display", "none");
        localStorage.setItem('statbox', 'false')
    }
}
if (localStorage.getItem('statbox') == "false") {
    document.getElementById('statbox').checked = false;
}

parsePokedex($("#pokemon"), pokedex_dictionary);

var options = {
  valueNames: ['name', 'id', 'egg-groups']
};

var userList = new List('pokemon', options);
userList.sort('id', {asc:true});

statboxStatus = document.getElementById('statbox');
