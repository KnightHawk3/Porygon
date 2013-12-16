function visitObj($container, obj, itterations) {
    var $ul = $('<ul>');

    for (var prop in obj) {
        var $li = $('<li>');
        $li.append('<span class="json-key"><h' + itterations + '>' + prop + ': </h' + itterations + '></span>');
        if (typeof obj[prop] === "object") {
             visitObj($li, obj[prop], itterations + 1);
        } else {
            $li.append('<span class="json-value">'+obj[prop]+'</span>');                   
        }
        $ul.append($li);
    }
    $container.append($ul);
}
$(document).ready(function () {visitObj($("#json-viewer"), pokedex, 1);});
