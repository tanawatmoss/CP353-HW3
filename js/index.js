const toSearch = (Beerja,Yeastja) => {
    console.log(Beerja,Yeastja)
    let moss = '?' 

    if (Beerja && Yeastja) {
        moss += `beer_name=${Beerja}&yeast=${Yeastja}`
    } else if(Beerja) {
        moss += `beer_name=${Beerja}`
    } else if (Yeastja) {
        moss += `&yeast=${Yeastja}`
    }


    fetch(`https://api.punkapi.com/v2/beers/${moss}`).then(Response=>Response.json())
    .then(Beers=>{
        console.log(Beers)
        let showbeer = ""
        for (let i = 0 ; i<Beers.length ; i++){
            const beer = Beers[i]
           
            showbeer += `<div class="${beer}"> <b>Name : </b>${beer.name}<br> 
             <b>Tagline : </b>${beer.tagline}<br> 
             <b>PH : </b>${beer.ph}<br>
             <b>Yeast : </b>${beer.ingredients.yeast}<br>
             <b>First Brewed : </b>${beer.first_brewed}<br> 
             <b>Description : </b>${beer.description}<br>
             <img src="${beer.image_url}" style = "max-width:30px" ><hr></div>`
        }
        
        document.getElementById('result').innerHTML=showbeer
    }) 
}

