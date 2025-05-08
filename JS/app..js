
// Lista de produtos (em JSON)
const productList = 
[
    {
       "id":1,
       "image": "https://cdn.pixabay.com/photo/2020/04/19/02/20/control-5061603_1280.jpg",
       "name": "Xbox Series S",
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae voluptas excepturi mollitia deleniti, cum delectus error fugiat rem, dolor minus perspiciatis, impedit nulla aliquam doloremque! Voluptas qui tenetur laboriosam",
       "price": "R$ 23.99",
       "createdAt": "07/05/2025",
       "updateAt": "07/05/2025"
    },

    {
        "id":2,
        "image": "https://cdn.pixabay.com/photo/2021/10/07/20/46/playstation-6689793_1280.jpg", //"https://cdn.pixabay.com/photo/2022/01/07/10/38/playstation-controller-6921619_1280.jpg", //"https://cdn.pixabay.com/photo/2023/01/12/16/05/controller-7714412_1280.jpg",
        "name": "Playstation 5",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae voluptas excepturi mollitia deleniti, cum delectus error fugiat rem, dolor minus perspiciatis, impedit nulla aliquam doloremque! Voluptas qui tenetur laboriosam",
        "price": "R$ 55.99",
        "createdAt": "07/05/2025",
        "updateAt": "07/05/2025"
     },

     {
        "id":3,
        "image": "https://cdn.pixabay.com/photo/2022/06/08/00/55/gaming-console-7249447_1280.jpg",
        "name": "Nitendo Switch",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae voluptas excepturi mollitia deleniti, cum delectus error fugiat rem, dolor minus perspiciatis, impedit nulla aliquam doloremque! Voluptas qui tenetur laboriosam",
        "price": "R$ 55.99",
        "createdAt": "07/05/2025",
        "updateAt": "07/05/2025"
     }
 ];









 function listProducts() {
    const sectionProducts = document.querySelector("#sectionProducts");
    productList.forEach((product) => {

        // Cria o article (card)
        const card = document.createElement('article');
        card.setAttribute('class', 'product-card');
        card.setAttribute('id', product.id);
        sectionProducts.appendChild(card);


        // Adiciona os elementos do card
        const productImg = document.createElement('div');
        productImg.setAttribute('class', 'product-img');
        card.appendChild(productImg);
            const img = document.createElement('img');
            img.setAttribute('src', product.image);
            img.setAttribute('alt', product.name);
            productImg.appendChild(img);


    
        const productInfo = document.createElement('div');
        productInfo.setAttribute('class', 'product-info');
        card.appendChild(productInfo);

            const h2 = document.createElement('h2');
            h2.textContent = product.name;
            productInfo.appendChild(h2);

            const p = document.createElement('p');
            p.textContent = product.description;
            productInfo.appendChild(p);
        


        const productAction = document.createElement('div');
        productAction.setAttribute('class', 'product-action');
        card.appendChild(productAction);

        const h3 = document.createElement('h3');
        h3.textContent = product.price;
        productAction.appendChild(h3);

        const btnAddCart = document.createElement('button');
        btnAddCart.setAttribute('onclick', `addCart(${product.id})`);
        btnAddCart.textContent = "Comprar";
        productAction.appendChild(btnAddCart);
        
    })
 }

 listProducts();





//  <article class="product-card" id="1">
//  <div class="product-img">
//      <img src="https://cdn.pixabay.com/photo/2020/04/19/02/20/control-5061603_1280.jpg" alt="Controle de Video Game">
//  </div>

//  <div class="product-info">
//      <h2>Xbox Series S</h2>
//      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae voluptas excepturi mollitia deleniti, cum delectus error fugiat rem, dolor minus perspiciatis, impedit nulla aliquam doloremque! Voluptas qui tenetur laboriosam</p>
//  </div>

//  <div class="product-action">
//      <h3>R$ 23.99</h3>
//      <button id="btnAddCart">Comprar</button>
//  </div>
// </article>