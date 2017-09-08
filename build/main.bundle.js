'use strict';

var toSearch = function toSearch(Beerja, Yeastja) {
    console.log(Beerja, Yeastja);
    var moss = '?';

    if (Beerja && Yeastja) {
        moss += 'beer_name=' + Beerja + '&yeast=' + Yeastja;
    } else if (Beerja) {
        moss += 'beer_name=' + Beerja;
    } else if (Yeastja) {
        moss += '&yeast=' + Yeastja;
    }

    fetch('https://api.punkapi.com/v2/beers/' + moss).then(function (Response) {
        return Response.json();
    }).then(function (Beers) {
        console.log(Beers);
        var showbeer = "";
        for (var i = 0; i < Beers.length; i++) {
            var beer = Beers[i];

            showbeer += '<div class="' + beer + '"> <b>Name : </b>' + beer.name + '<br> \n             <b>Tagline : </b>' + beer.tagline + '<br> \n             <b>PH : </b>' + beer.ph + '<br>\n             <b>Yeast : </b>' + beer.ingredients.yeast + '<br>\n             <b>First Brewed : </b>' + beer.first_brewed + '<br> \n             <b>Description : </b>' + beer.description + '<br>\n             <img src="' + beer.image_url + '" style = "max-width:30px" ><hr></div>';
        }

        document.getElementById('result').innerHTML = showbeer;
    });
};
