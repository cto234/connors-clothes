import image1_1 from './assets/alexGShirt/image1.jpeg';
import image1_2 from './assets/alexGShirt/image2.jpeg';

import image2_1 from './assets/dickiesPants/image1.jpeg';
import image2_2 from './assets/dickiesPants/image2.jpeg';
import image2_3 from './assets/dickiesPants/image3.jpeg';


const clothes = [
    {
        id: 1,
        name: 'Alex G T-Shirt',
        description: 'Alex G tour merchandise t-shirt. In excellent condition no flaws except missing tag.',
        photos: [image1_1, image1_2],
        size: 'S',
        color: 'Yellow',
        price: 60,
        slug: 'alex-g-shirt'
    },
    {
        id: 2,
        name: 'Dickies Pants',
        description: 'Dickies double knee work pants. Ends of each leg have been trimmed slightly. Otherwise in great condition.',
        photos: [image2_1, image2_2, image2_3],
        size: '30',
        color: 'Navy',
        price: 20,
        slug: 'dickies-pants'
    },
]

export default clothes;