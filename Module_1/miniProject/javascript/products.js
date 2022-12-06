var furniture = {
    products: [
        {
            name: "Bộ ghế sofa góc da cao cấp – SF10",
            oldPrice: "80.000.000",
            newPrice: "60.000.000",
            image: "../images/sofa_1.jpg"
        },
        {
            name: "Ghế sofa văng nhiều màu hiện đại – SF213",
            oldPrice: "50.000.000",
            newPrice: "46.000.000",
            image: "../images/sofa_2.jpg"
        },
        {
            name: "Bộ sofa da thông minh – SFDK87",
            oldPrice: "200.000.000",
            newPrice: "180.000.000",
            image: "../images/sofa_3.jpg"
        },
        {
            name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
            oldPrice: "120.000.000",
            newPrice: "110.000.000",
            image: "../images/sofa_4.jpg"
        },
        {
            name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
            oldPrice: "20.000.000",
            newPrice: "16.000.000",
            image: "../images/giuong_1.jpg"
        },
        {
            name: "Giường ngủ viền vàng tinh tế Pula PB05",
            oldPrice: "10.000.000",
            newPrice: "8.000.000",
            image: "../images/giuong_2.jpg"
        },
        {
            name: "Giường ngủ tròn gỗ thịt Pula PB26",
            oldPrice: "50.000.000",
            newPrice: "45.000.000",
            image: "../images/giuong_3.jpg"
        },
        {
            name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
            oldPrice: "120.000.000",
            newPrice: "110.000.000",
            image: "../images/giuong_4.jpg"
        },
        {
            name: "Bàn ăn mặt đá chân mạ PVD",
            oldPrice: "13.000.000",
            newPrice: "11.500.000",
            image: "../images/ban_1.jpg"
        },
        {
            name: "Bàn ăn Concorde",
            oldPrice: "7.000.000",
            newPrice: "5.000.000",
            image: "../images/ban_2.jpg"
        },
        {
            name: "Bàn ăn Pula BA32",
            oldPrice: "17.000.000",
            newPrice: "15.000.000",
            image: "../images/ban_3.jpg"
        },
    ]
}

function onLoadProducts() {
    let renderFurniture = document.getElementById("furniture");
    let allProducts = furniture.products;
    for (let i = 0; i < allProducts.length; i++) {
        // console.log(allProducts[i]);

        let product = `
        <div class="card">
            <img src="${allProducts[i].image}" alt="" width="100%">
            <div class="card-body">
                <h2>${allProducts[i].name}</h2>
                <br>
                <div style="display:flex; justify-content:space-evenly">
                    <p class="old-price">${allProducts[i].oldPrice}</p>
                    <p class="new-price">${allProducts[i].newPrice}</p>
                </div>
            </div>
            <button class="btn-addCard" data-image="${allProducts[i].image}" data-name="${allProducts[i].name}"
             data-price="${allProducts[i].newPrice}" onclick="addCard(this)">
                    <span>Thêm vào giỏ hàng</span>
             </button>
        </div>
        `
        renderFurniture.innerHTML += product
    }
}
onLoadProducts();


function addCard(product) {
    // console.log("click");
    // console.log(product.dataset.image);
    // console.log(product.dataset.name);
    // console.log(product.dataset.price);

    let objectProduct = {
        image: product.dataset.image,
        name: product.dataset.name,
        price: product.dataset.price
    }
    let listProduct = localStorage.getItem("selectedProduct");

    if (listProduct == null) {
        listProduct = [];
        listProduct.push(objectProduct);
        localStorage.setItem("selectedProduct", JSON.stringify(listProduct));
        swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
            .then(() => {
                window.location.reload();
            })
    } else {
        listProduct = JSON.parse(listProduct)
        listProduct.push(objectProduct);
        localStorage.setItem("selectedProduct", JSON.stringify(listProduct));
        // console.log(JSON.stringify(selectedProduct));
        swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
            .then(() => {
                window.location.reload();
            })
    }


}


// function addCard(product) {
//     console.log("click");
//     console.log(product.dataset.image);
//     console.log(product.dataset.name);
//     console.log(product.dataset.price);

//     let productList = {
//         image: product.dataset.image,
//         name: product.dataset.name,
//         price: product.dataset.price,
//         quantity: product.dataset.quantity
//     }
//     let selectedProduct = JSON.parse(localStorage.getItem("selectedProduct")) || [];

//     if (selectedProduct.length >= 1) {
//         const productSelected = selectedProduct.find(item => item.name == productList.name);
//         if (Boolean(productSelected)) {
//            productSelected.quantity += productList.quantity
//         } else {
//             selectedProduct.push(productList);
//         }
//     } else {
//         selectedProduct.push(productList);
//     }
//     console.log(selectedProduct);
//     localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
//     console.log(JSON.stringify(selectedProduct));
// }
