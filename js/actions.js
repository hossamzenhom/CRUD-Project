let pName = document.getElementById("ProductName");
let pPrice = document.getElementById("ProductPrice");
let pCategory = document.getElementById("ProductCategory");
let pDesc = document.getElementById("ProductDescription");
let mainBtn = document.getElementById("mainBtn");
let globalIdex = 0;
let allProducts;

/*
let productNameAlert = document.getElementById("productNameAlert");
pName.addEventListener("keyup", validateProductName);
*/

if (localStorage.getItem("allProducts") == null) {
    allProducts = [];
}
else {
    allProducts = JSON.parse(localStorage.getItem("allProducts"));
    display();
}

function addProduct() {

    if (mainBtn.innerHTML == "Update") {

        allProducts[globalIdex].name = pName.value;
        allProducts[globalIdex].price = pPrice.value;
        allProducts[globalIdex].category = pCategory.value;
        allProducts[globalIdex].desc = pDesc.value;

        mainBtn.innerHTML = "Add Product";
    }
    else {
        let product = {
            name: pName.value,
            price: pPrice.value,
            category: pCategory.value,
            desc: pDesc.value
        }
        allProducts.push(product);
    }

    localStorage.setItem("allProducts", JSON.stringify(allProducts));

    display();
    clear();
}

function display() {
    let cartona = ``;
    for (let i = 0; i < allProducts.length; i++) {
        cartona += `<tr>
        <td>${i}</td>
        <td>${allProducts[i].name}</td>
        <td>${allProducts[i].price}</td>
        <td>${allProducts[i].category}</td>
        <td>${allProducts[i].desc}</td>
        <td><button onclick="update(${i});" class="btn btn-outline-info">Update</button></td>
        <td><button onclick="deleteProduct(${i});" class="btn btn-outline-danger">Delete</button></td>
    </tr>`;
    }
    document.getElementById("display").innerHTML = cartona;
}

function clear() {
    pName.value = "";
    pPrice.value = "";
    pCategory.value = "";
    pDesc.value = "";
}

function deleteProduct(index) {
    allProducts.splice(index, 1);
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
    display();
}

function update(index) {
    pName.value = allProducts[index].name;
    pPrice.value = allProducts[index].price;
    pCategory.value = allProducts[index].category;
    pDesc.value = allProducts[index].desc;

    mainBtn.innerHTML = "Update";
    globalIdex = index;

}

function search(searchTerm) {
    let cartona = ``;
    for (let i = 0; i < allProducts.length; i++) {

        if (allProducts[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true) {
            cartona += `<tr>
                    <td>${i}</td>
                    <td>${allProducts[i].name}</td>
                    <td>${allProducts[i].price}</td>
                    <td>${allProducts[i].category}</td>
                    <td>${allProducts[i].desc}</td>
                    <td><button onclick="update(${i});" class="btn btn-outline-info">Update</button></td>
                    <td><button onclick="deleteProduct(${i});" class="btn btn-outline-danger">Delete</button></td>
                </tr>`;
        }
        else {
        }
    }
    document.getElementById("display").innerHTML = cartona;

}
/*
function validateProductName() {

    var regex = /^[A-Z]{5}$/;
    if (regex.test(pName.value) == true) {
        productNameAlert.classList.replace("d-block", "d-none");
        pName.classList.remove("is-invalid");
        pName.classList.add("is-valid");
    }
    else {
        productNameAlert.classList.replace("d-none", "d-block");
        pName.classList.remove("is-valid");
        pName.classList.add("is-invalid");
    }

}
*/