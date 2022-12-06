var products = [
    {
        id: 1,
        name: "Bộ ghế sofa góc da cao cấp – SF10",
        oldPrice: "80.000.000",
        newPrice: "60.000.000",
        price: 60000000,
        image: "../images/sofa_1.jpg",
        quantity: 0
    },
    {
        id: 2,
        name: "Ghế sofa văng nhiều màu hiện đại – SF213",
        oldPrice: "50.000.000",
        newPrice: "46.000.000",
        price: 46000000,
        image: "../images/sofa_2.jpg",
        quantity: 0
    },
    {
        id: 3,
        name: "Bộ sofa da thông minh – SFDK87",
        oldPrice: "200.000.000",
        newPrice: "180.000.000",
        price: 180000000,
        image: "../images/sofa_3.jpg",
        quantity: 0
    },
    {
        id: 4,
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "120.000.000",
        newPrice: "110.000.000",
        price: 110000000,
        image: "../images/sofa_4.jpg",
        quantity: 0
    },
    {
        id: 5,
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "20.000.000",
        newPrice: "16.000.000",
        price: "16.000.000",
        image: "../images/giuong_1.jpg",
        quantity: 0
    },
    {
        id: 6,
        name: "Giường ngủ viền vàng tinh tế Pula PB05",
        oldPrice: "10.000.000",
        newPrice: "8.000.000",
        price: 8000000,
        image: "../images/giuong_2.jpg",
        quantity: 0
    },
    {
        id: 7,
        name: "Giường ngủ tròn gỗ thịt Pula PB26",
        oldPrice: "50.000.000",
        newPrice: "45.000.000",
        price: 45000000,
        image: "../images/giuong_3.jpg",
        quantity: 0
    },
    {
        id: 8,
        name: "Bộ ghế sofa da nhập khẩu tân cổ điển – SF13",
        oldPrice: "120.000.000",
        newPrice: "110.000.000",
        price: 110000000,
        image: "../images/giuong_4.jpg",
        quantity: 0
    },
    {
        id: 9,
        name: "Bàn ăn mặt đá chân mạ PVD",
        oldPrice: "13.000.000",
        newPrice: "115.000.000",
        price: 11500000,
        image: "../images/ban_1.jpg",
        quantity: 0
    },
    {
        id: 10,
        name: "Bàn ăn Concorde",
        oldPrice: "7.000.000",
        newPrice: "5.000.000",
        price: 5000000,
        image: "../images/ban_2.jpg",
        quantity: 0
    },
    {
        id: 11,
        name: "Bàn ăn Pula BA32",
        oldPrice: "17.000.000",
        newPrice: "15.000.000",
        price: 15000000,
        image: "../images/ban_3.jpg",
        quantity: 0
    },
]
// localStorage.setItem("listProducts", JSON.stringify(products));

function onLoadProducts() {
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));
    for (let i = 0; i < listProducts.length; i++) {
        // console.log(listProducts[i]);
        let product = `
        <div class="card">
            <img src="${listProducts[i].image}" alt="" width="100%">
            <div class="card-body">
                <h2>${listProducts[i].name}</h2>
                <br>
                <div style="display:flex; justify-content:space-evenly">
                    <p class="old-price">${listProducts[i].oldPrice}</p>
                    <p class="new-price">${listProducts[i].newPrice}</p>
                </div>
            </div>
            <button class="btn-addCard" onclick="addCard(${listProducts[i].id})"> <span>Thêm vào giỏ hàng</span>
            </button>
        </div>
        `
        document.getElementById("furniture").innerHTML += product;
    }
}
onLoadProducts();


function addCard(productID) {
    // console.log("click");
    let listProducts = JSON.parse(localStorage.getItem("listProducts"));

    //Lấy danh sách sản phẩm khi thêm vào giỏ hàng
    let listProductCart = localStorage.getItem("listProductCart");

    if (listProductCart == null) {
        listProductCart = [];
        //Lấy thông tin sản phẩm được chọn
        for (let i = 0; i < listProducts.length; i++) {
            if (listProducts[i].id == productID) {
                listProductCart.push(listProducts[i]);
                localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
                swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                    .then(() => {
                        window.location.reload();
                    });
                break;
            }
        }
    }

    else {
        listProductCart = JSON.parse(listProductCart);

        for (let i = 0; i < listProducts.length; i++) {
            let check = false;
            if (listProducts[i].id == productID) {
                for (let i = 0; i < listProductCart.length; i++) {
                    if (listProductCart[i].id == productID) {
                        check = false;
                        let count = Number((listProductCart[i].quantity));
                        let price = Number(listProductCart[i].price);
                        listProductCart[i].quantity = ++count;
                        listProductCart[i].price = price + price;
                        localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
                        swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                            .then(() => {
                                window.location.reload();
                            })
                        break;
                    } else {
                        check = true;
                    }
                }
            }

            if (check == true) {
                listProductCart.push(listProducts[i]);
                localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
                swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                    .then(() => {
                        window.location.reload();
                    })
            }
            else if (listProductCart.length == '') {     // sau khi xóa hết card
                listProductCart.push(listProducts[i]);
                localStorage.setItem("listProductCart", JSON.stringify(listProductCart));
                console.log("đã có sản phẩm này rồi");
                swal("Sản phẩm đã được thêm vào giỏ hàng!", "chúc bạn 1 ngày tốt lành", "success")
                    .then(() => {
                        window.location.reload();
                    });
            }
            else {
                console.log("đã có sản phẩm này rồi");
            }
        }
    }
}

