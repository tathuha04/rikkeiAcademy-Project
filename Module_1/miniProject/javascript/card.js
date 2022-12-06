var renderCard = document.getElementById("renderCard");
var selectedProduct = localStorage.getItem("selectedProduct");
var listProduct = JSON.parse(selectedProduct);


function onLoadProducts() {
    var selectedProduct = localStorage.getItem("selectedProduct");
    var listProduct = JSON.parse(selectedProduct);
    for (const index in listProduct) {
        console.log(listProduct[index]);
        let product = `
        <div class="card">
            <img src="${listProduct[index].image}" alt="">
            <div class="card-body">
                <h3>${listProduct[index].name}</h3>
                <br>
                <div>
                    <h4 class="quantity">Số lượng:&ensp; ${listProduct[index].quantity}</h4><br>
                    <h4>Giá ưu đãi:&ensp; ${listProduct[index].newPrice}</h4>
                    <br/><hr><br/>
                    <h3 class="price">Thành tiền:&ensp; ${listProduct[index].price}</h3>
                </div> <br>
                <button class="btn-buyNow" onclick="buyNow()">Đặt hàng</button>
                <button class="btn-delete" data-name="${listProduct[index].name}" onclick="deleteProduct(this)">Xóa sản phẩm</button>
            </div>
        </div>
        `
        renderCard.innerHTML += product
    }
}
onLoadProducts();

function deleteProduct(value) {
    console.log("click");
    var selectedProduct = localStorage.getItem("selectedProduct");
    if (selectedProduct == null) {
        selectedProduct = []
        localStorage.setItem("selectedProduct", JSON.stringify(listProduct));
    } else {
        var listProduct = JSON.parse(selectedProduct);
        for (let index = 0; index < listProduct.length; index++) {
            if (listProduct[index].name === value.dataset.name) {
                listProduct.splice(index, 1);
            }
        }
        localStorage.setItem("selectedProduct", JSON.stringify(listProduct));
        console.log(JSON.stringify(listProduct));
        window.location.reload();
    }

}

function buyNow() {
    let listUser = localStorage.getItem("user");
    if (listUser == null) {
        window.location.href = "../pages/loginForm.html"
    } else {
        window.location.href = "../pages/thanhToan.html";
    }

}
