import image6 from './images/Restaurant.jpg';

const restaurantInfo = [
    {
        'info-type': 'intro',
        'restaurant-name': 'The Pondering Palate',
        image: image6,
        'welcome-line': 'Willkommen à mi Restaurante - El Paladar Reflexivo!',
        'intro-text': `Welcome to <b>The Pondering Palate</b>, where every bite is a philosophical journey into the depths of your existence.<br>Our culinary creations are <b>more than mere dishes</b>, they're existential enigmas designed to challenge your perceptions.<br>Explore a menu that defies convention and leaves you <b>pondering life's mysteries</b> with each exquisite bite.<br>Savor flavors that dance on the edge of reality, and let your taste buds embark on an odyssey of self-discovery.<br>At The Pondering Palate, we serve food for thought – <b>one dish at a time</b>.`
    },
    {
        'info-type': 'working-hours',
        'working-line': 'Our business operation hours:',
        day: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
        Mon: ['Reflective Breakfast: 8:00 AM - 11:00 AM', 'Philosophical Lunch: 12:30 PM - 3:30 PM', 'Enigmatic Dinner: 6:00 PM - 9:00 PM'],
        Tues: ['Meditative Brunch: 9:30 AM - 1:30 PM', 'Surreal Supper: 5:00 PM - 10:00 PM'],
        Wed: ['Existential Escapade: 11:00 AM - 2:00 PM', 'Conundrum Suppers: 4:30 PM - 8:30 PM'],
        Thurs: ['Deep Thought Dining: 12:00 PM - 3:00 PM', 'Question Everything Supper Club: 6:30 PM - 9:30 PM'],
        Fri: ['Curious Cuisine Brunch: 10:00 AM - 1:00 PM', 'Mindful Dinner Delights: 5:30 PM - 10:30 PM'],
        'working-line2': 'Closed on every Saturday & Sunday.'
    },
    {
        'info-type': 'address',
        'address-intro': 'Come find us at:',
        address: `The Pondering Palate\n123 ReflectionRoad\nSereneville, Culinary County\nGourmetville, Culinaryland, 54321`
    }
]

const createHomePage = () => {
    const mainContent = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // adding all contents from here which will all fall under the 'page-content' div

    // add first sub-div for restaurant intro
    const container1 = document.createElement('div');
    container1.classList.add('container1');
    const resName = document.createElement('h1');
    resName.classList.add('res-name');
    resName.innerText = restaurantInfo[0]["restaurant-name"];
    const welcomeLine = document.createElement('p');
    welcomeLine.classList.add('welcome-line');
    welcomeLine.innerText = restaurantInfo[0]['welcome-line'];
    const image = document.createElement('img');
    image.classList.add('restaurant-image');
    image.src = restaurantInfo[0].image;
    image.height = '700';
    image.width = '550';
    const resIntroText = document.createElement('p');
    resIntroText.classList.add('res-intro');
    resIntroText.innerHTML = restaurantInfo[0]['intro-text'];
    container1.appendChild(resName);
    container1.appendChild(welcomeLine);
    container1.appendChild(image);
    container1.appendChild(resIntroText);
    pageContent.appendChild(container1);

    // add second sub-div for restaurant working hours
    const container2 = document.createElement('div');
    container2.classList.add('container2');
    const workingLine = document.createElement('h2');
    workingLine.classList.add('working-line');
    workingLine.innerText = restaurantInfo[1]['working-line'];
    container2.appendChild(workingLine);
    
    // Loop through the 'Mon', 'Tues', 'Wed', 'Thurs', and 'Fri' keys
    ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'].forEach(day => {
        const dayInfo = restaurantInfo[1][day];
        const ul = createDayList(day, dayInfo);
        container2.appendChild(ul);
    })

    const workingLine2 = document.createElement('p');
    workingLine2.classList.add('working-line2');
    workingLine2.innerText = restaurantInfo[1]['working-line2'];
    container2.appendChild(workingLine2);
    pageContent.appendChild(container2);

    // add third sub-div for restaurant address
    const container3 = document.createElement('div');
    container3.classList.add('container3');
    const addressIntro = document.createElement('h3');
    addressIntro.classList.add('address-intro');
    addressIntro.innerText = restaurantInfo[2]['address-intro'];
    const address = document.createElement('p');
    address.classList.add('address');
    address.innerText = restaurantInfo[2].address;
    container3.appendChild(addressIntro);
    container3.appendChild(address);
    pageContent.appendChild(container3);

    // finally append pageContent to mainContent
    mainContent.appendChild(pageContent);

}

function createDayList(day, dayInfo) {
    const ul = document.createElement('ul');
    ul.classList.add('day');
    const dayText = document.createTextNode(day + ': ');
    ul.appendChild(dayText);
    
    dayInfo.forEach(info => {
      const li = document.createElement('li');
      li.classList.add('day-info');
      const liText = document.createTextNode(info);
      li.appendChild(liText);
      ul.appendChild(li);
    });
    
    return ul;
}
  
export {createHomePage}