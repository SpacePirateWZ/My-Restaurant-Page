import image4 from './images/contact.png';

const contactInfo = {
    'info-type': 'intro',
    'intro-text': 'Enjoyed our thought-provoking dishes? \nStill pondering the mysteries of flavor? \nFeel like you can handle more? \n\nFantastic! Feel free to connect with us below for more life-questioning experiences.',
    image: image4,
    email: 'info@ponderingpalate.com',
    contact: '+1300 88-2525',
    'ending-text': "We're always here to satisfy your appetite for enlightenment!"
}

const createContactPage = () => {
    const mainContent = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // adding all contents from here which will all fall under the 'page-content' div

    // add first sub-div for contact intro
    const container1 = document.createElement('div');
    container1.classList.add('container1');
    const contactIntro = document.createElement('h1');   
    contactIntro.classList.add('contact-intro');
    contactIntro.innerText = contactInfo['intro-text'];
    const image = document.createElement('img');
    image.classList.add('contact-image');
    image.src = contactInfo.image;
    image.height = '400';
    const email = document.createElement('a');
    email.setAttribute('href','mailto:info@ponderingpalate.com');
    email.classList.add('email');
    email.innerHTML = `<b>Email:</b> ${contactInfo.email}`;
    const contact = document.createElement('p');
    contact.classList.add('contact');
    contact.innerHTML = `<b>Contact:</b> ${contactInfo.contact}`;
    const endingText = document.createElement('p');
    endingText.classList.add('ending-text');
    endingText.innerText = contactInfo['ending-text'];
    container1.appendChild(contactIntro);
    container1.appendChild(image);
    container1.appendChild(email);
    container1.appendChild(contact);
    container1.appendChild(endingText);
    pageContent.appendChild(container1);

    // finally append pageContent to mainContent
    mainContent.appendChild(pageContent);   

}

export {createContactPage}