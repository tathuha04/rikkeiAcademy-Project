var products = [
    {
        name: "Bộ ghế sofa góc da cao cấp – SF10",
        oldPrice: "80.000.000",
        newPrice: "60.000.000",
        price: 60000000,
        image: "../images/sofa_1.jpg",
        quantity: 1
    },
    {
        name: "Ghế sofa văng nhiều màu hiện đại – SF213",
        oldPrice: "50.000.000",
        newPrice: "46.000.000",
        price: 46000000,
        image: "../images/sofa_2.jpg",
        quantity: 1
    },
    {
        name: "Bộ sofa da thông minh – SFDK87",
        oldPrice: "200.000.000",
        newPrice: "180.000.000",
        price: 180000000,
        image: "../images/sofa_3.jpg",
        quantity: 1
    },
    {
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "120.000.000",
        newPrice: "110.000.000",
        price: 110000000,
        image: "../images/sofa_4.jpg",
        quantity: 1
    },
    {
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "20.000.000",
        newPrice: "16.000.000",
        price: "16.000.000",
        image: "../images/giuong_1.jpg",
        quantity: 1
    },
    {
        name: "Giường ngủ viền vàng tinh tế Pula PB05",
        oldPrice: "10.000.000",
        newPrice: "8.000.000",
        price: 8000000,
        image: "../images/giuong_2.jpg",
        quantity: 1
    },
    {
        name: "Giường ngủ tròn gỗ thịt Pula PB26",
        oldPrice: "50.000.000",
        newPrice: "45.000.000",
        price: 45000000,
        image: "../images/giuong_3.jpg",
        quantity: 1
    },
    {
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "120.000.000",
        newPrice: "110.000.000",
        price: 110000000,
        image: "../images/giuong_4.jpg",
        quantity: 1
    },
    {
        name: "Bàn ăn mặt đá chân mạ PVD",
        oldPrice: "13.000.000",
        newPrice: "115.000.000",
        price: 11500000,
        image: "../images/ban_1.jpg",
        quantity: 1
    },
    {
        name: "Bàn ăn Concorde",
        oldPrice: "7.000.000",
        newPrice: "5.000.000",
        price: 5000000,
        image: "../images/ban_2.jpg",
        quantity: 1
    },
    {
        name: "Bàn ăn Pula BA32",
        oldPrice: "17.000.000",
        newPrice: "15.000.000",
        price: 15000000,
        image: "../images/ban_3.jpg",
        quantity: 1
    },
]


function onLoadProducts() {
    let renderFurniture = document.getElementById("furniture");
    let allProducts = products;
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
                data-newprice="${allProducts[i].newPrice}" data-price="${allProducts[i].price}" data-quantity="${allProducts[i].quantity}"
                onclick="addCard(this)"> <span>Thêm vào giỏ hàng</span>
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
        newPrice: product.dataset.newprice,
        price: product.dataset.price,
        quantity: product.dataset.quantity,
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
    } else if (JSON.parse(listProduct).length == '') {
        listProduct = JSON.parse(listProduct);
        listProduct.push(objectProduct);
        localStorage.setItem("selectedProduct", JSON.stringify(listProduct));
        console.log("đã có sản phẩm này rồi");
        swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
            .then(() => {
                window.location.reload();
            })
    } else {
        listProduct = JSON.parse(listProduct);
        let check = false;
        for (let i = 0; i < listProduct.length; i++) {
            if (listProduct[i].name == objectProduct.name) {
                check = false;
                let count = Number(listProduct[i].quantity);
                let price = Number(listProduct[i].price);
                listProduct[i].quantity = ++count;
                listProduct[i].price = price + price;
                localStorage.setItem("selectedProduct", JSON.stringify(listProduct));
                swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                    .then(() => {
                        window.location.reload();
                    })
                break;
            } else {
                check = true;
            }
        }
        if (check == true) {
            listProduct.push(objectProduct);
            localStorage.setItem("selectedProduct", JSON.stringify(listProduct));
            swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                .then(() => {
                    window.location.reload();
                })
        } else {
            console.log("đã có sản phẩm này rồi");
        }
    }
}

