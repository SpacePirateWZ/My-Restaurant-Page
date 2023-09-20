import image1 from './images/Anything but Raw.jpg';
import image3 from './images/Bobba Tea.jpg';
import image5 from './images/Pancake Deluxe.jpg';
import image7 from './images/Something Fabulous.jpg';

const menuInfo = [
    {
        'info-type': 'intro',
        'intro-text': `Indulge in our extraordinary menu, featuring: <br><br>The delectable <b>'Pancake Deluxe'</b> <br>The enigmatic <b>'Something Fabulous'</b> <br>The refreshing <b>'Bobba Tea'</b> <br>andddd <br>The unforgettable <b>'Anything but Raw</b>'<br><br>Each dish is a culinary journey that will challenge your senses and leave you craving for more.`
    },
    {
        'info-type': 'product1-info',
        name: 'Pancake Deluxe',
        image: image5,
        intro: "Behold, the Pancake Deluxe - a stack of pancakes so tall, it's practically a Jenga game waiting to happen.",
        price: 'RM13',
        remark: 'Mild. Just a bunch of pancakes.'
    },
    {
        'info-type': 'product2-info',
        name: 'Something Fabulous',
        image: image7,
        intro: "It's like a mystery wrapped in deliciousness, and even we can't figure it out!",
        price: 'RM22',
        remark: 'For some reason, we never had any recollection of what we added to this dish, so each bite itself is like playing Russian Roulette.'
    },
    {
        'info-type': 'product3-info',
        name: 'Bobba Tea',
        image: image3,
        intro: `The drink that leaves you wondering, "Is it tea, or is it... not tea?" We'll let you decide.`,
        price: 'RM15',
        remark: 'High only if you decided to go for a drive right after drinking it otherwise Mild-Mid.'
    },
    {
        'info-type': 'product4-info',
        name: 'Anything but Raw',
        image: image1,
        intro: `Because why serve plain old sushi when you can present two pieces of seemingly 'raw' fish as haute cuisine?`,
        price: 'RM2 - special promo price! no takeaway! must finish on the spot!',
        remark: "This dish will leave you questioning your entire life from birth while you are on your way to the hospital just down the road from our place <3"
    }
]

const createMenuPage = () => {
    const mainContent = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // adding all contents from here which will all fall under the 'page-content' div

    // add first sub-div for menu intro
    const container1 = document.createElement('div');
    container1.classList.add('container1');
    const menuIntro = document.createElement('h1');   
    menuIntro.classList.add('menu-intro');
    menuIntro.innerHTML = menuInfo[0]['intro-text'];
    container1.appendChild(menuIntro);
    pageContent.appendChild(container1);
    
    // add second sub-div for product info
    const container2 = document.createElement('div');
    container2.classList.add('container2');

    // generate info for each product except for the first object in the array
    for(let i = 1; i < menuInfo.length; i++) {
        const item = menuInfo[i];
        const pName = createProductName(item.name)
        const pImage = createProductImage(item.image)
        const pIntro = createProductIntro(item.intro)
        const pList = createProductList(item)
        container2.appendChild(pName);
        container2.appendChild(pImage);
        container2.appendChild(pIntro);
        container2.appendChild(pList);
    }
    pageContent.appendChild(container2)

    // finally append pageContent to mainContent
    mainContent.appendChild(pageContent);    

}

function createProductName(name) {
    const productName = document.createElement('p');
    productName.classList.add('product-name');
    productName.innerText = name;
    return productName;
}

function createProductImage(image) {
    const productImage = document.createElement('img');
    productImage.src = image;
    productImage.classList.add('product-image');
    productImage.height = '400';
    productImage.width = '400';
    return productImage;
}

function createProductIntro(intro) {
    const productIntro = document.createElement('p');
    productIntro.classList.add('product-intro');
    productIntro.innerText = intro;
    return productIntro;
}

function createProductList(item) {
    const ul = document.createElement('ul');
  
    if (item.price) {
      const liPrice = document.createElement('li');
      liPrice.classList.add('product-price');
      liPrice.innerHTML = `<b>Price:</b> ${item.price}`;
      ul.appendChild(liPrice);
    }
  
    if (item.remark) {
      const liRemark = document.createElement('li');
      liRemark.classList.add('product-remark');
      liRemark.innerHTML = `<b>Live-questioning level:</b> ${item.remark}`;
      ul.appendChild(liRemark);
    }
  
    return ul;
}

export {createMenuPage}
