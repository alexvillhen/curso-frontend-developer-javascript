const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileBtn = document.querySelector("#mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu");

const cartBtn = document.querySelector(".navbar-shopping-cart");
const cart = document.querySelector(".product-detail");

const productContainer = document.querySelector(".cards-container");



function toggleDesktopMenu(){
    let otherMenusClosed = cart.classList.contains("inactive") && mobileMenu.classList.contains("inactive");
    if(otherMenusClosed){
        desktopMenu.classList.toggle("inactive");
    }
    else{
        cart.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.toggle("inactive");
    }
}

function toggleMobileMenu(){
    let otherMenusClosed = cart.classList.contains("inactive") && desktopMenu.classList.contains("inactive");
    if(otherMenusClosed){
        mobileMenu.classList.toggle("inactive");
    }
    else{
        cart.classList.add("inactive");
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
}

function toggleCart(){
    let otherMenusClosed = mobileMenu.classList.contains("inactive") && desktopMenu.classList.contains("inactive");
    if(otherMenusClosed){
        cart.classList.toggle("inactive");
    }
    else{
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        cart.classList.toggle("inactive");
    }
}

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileBtn.addEventListener('click', toggleMobileMenu);
cartBtn.addEventListener('click', toggleCart);

const productList = [];
productList.push({
    name: 'Ray Ban glasses',
    price: 2950,
    img: "https://images.ray-ban.com/is/image/RayBan/805289115694_0001.png?impolicy=SEO_1x1"
},
{
    name: 'Macbook air',
    price: 37999,
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000" 
},
{
    name: 'Stratocaster guitar',
    price: 4970,
    img: "https://m.media-amazon.com/images/I/71XBvZJ8t1L._AC_SX425_.jpg" 
},
{
    name: 'logitech mouse',
    price: 365,
    img: "https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SY450_.jpg" 
},
{
    name: 'Indian FTR 1200',
    price: 334900,
    img: "https://www.indianmotorcycle.mx/fileadmin/templates/model_21/ftr-family/FTR_R_CARBON_FIBER_Front_3Q.jpg" 
},
{
    name: 'Chelsea boots',
    price: 2452,
    img: "https://cdn.shopify.com/s/files/1/0419/1525/products/1024x1024-Men-Cavalier-Sandstone-012422-3.4.jpg?v=1646426165" 
},
{
    name: 'combi',
    price: 80000,
    img: 'https://www.coolkombi.com/wp-content/uploads/2017/04/vokswagen_en4.png'
},
{
    name:'eloquent JS',
    price:600,
    img:'https://image.cdn0.buscalibre.com/5d290e1f4ef0b5ea1e8b4567.__RSF640x640__.jpg'
},
{
    name:'keyboard',
    price:2366,
    img:'https://m.media-amazon.com/images/I/61YICk5lrTL._AC_SS450_.jpg'
},
{
    name:'backpack',
    price:449,
    img:'https://m.media-amazon.com/images/I/71OboCuNnAL._AC_AA220_.jpg'
});

function renderProducts(arr){
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");
    
        productContainer.appendChild(productCard);
        
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");
    
        const infoDiv = document.createElement("div");
    
        const pPrice = document.createElement('p');
        pPrice.innerText = `$ ${product.price}`;
    
        const pNmae = document.createElement("p");
        pNmae.innerText = product.name;
        const infoFigure = document.createElement("figure");
    
        const figureImg = document.createElement("img");
        figureImg.setAttribute('src', "./icons/bt_add_to_cart.svg" );
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        productInfo.appendChild(infoDiv);
        productInfo.appendChild(infoFigure);
    
        infoDiv.appendChild(pPrice);
        infoDiv.appendChild(pNmae);
    
        infoFigure.appendChild(figureImg);
    
    }
}

renderProducts(productList);