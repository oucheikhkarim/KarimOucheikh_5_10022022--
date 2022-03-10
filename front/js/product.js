const str = window.location.search;
const id = str.slice(4);

fetch ("http://localhost:3000/api/products")
.then ((res) => res.json())
.then ((products) => {
    for (let canape of products){
        if (id == canape._id){
            document
                .querySelector(".item__img")
                .innerHTML = '<img src="' + canape.imageUrl+ '" alt="' + canape.altTxt + '">'

            document
                .getElementById ("title")
                .innerHTML = canape.name

            document
                .getElementById ("price")
                .innerHTML = canape.price
            
            document
                .getElementById ("description")
                .innerHTML = canape.description

            for (let color of canape.colors){
                let choiceColors = document
                                    .getElementById ("colors")
                                    .appendChild (document.createElement('option'))
                choiceColors.setAttribute ('value', color);
                choiceColors.innerHTML = color;
            }
        }
    }
})
.catch ((err) => alert ('erreur'))
;