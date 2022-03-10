fetch ('http://localhost:3000/api/products')
.then((res) => res.json())
.then ((products) => {

for (let canape of products){
    let link = document
                .getElementById('items')
                .appendChild(document.createElement("a"))
    link.setAttribute ('href', './product.html?id='+ canape._id)
    link.innerHTML = '<article><img src=" ' + canape.imageUrl + '" alt="' + canape.altTxt + '"><h3 class="productName">'+ canape.name + '</h3> <p class="productDescription">' + canape.description + '</p></article>'
}
})
.catch (function (err){
    console.log(err)
});