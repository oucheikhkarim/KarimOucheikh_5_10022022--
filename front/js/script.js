let products;
fetch ('http://localhost:3000/api/products')
.then (function (res){
    if (res.ok){
        return res.json ();
    }
})
.then (data => products = data)
.then (function (value){
    
for (let canape of products){
    document
        .getElementById('items')
        .appendChild(document.createElement("a"))
        .innerHTML = '<article><img src=" ' + canape.imageUrl + '" alt="' + canape.altTxt + '"><h3 class="productName">'+ canape.name + '</h3> <p class="productDescription">' + canape.description + '</p></article>'
}
})
.catch (function (err){

});