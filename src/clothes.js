//Helper function for importing all images in each folder from assets:
function importAllImages(imageContext) {
    return imageContext.keys().map(imageContext);
  }
  
const images1 = importAllImages(require.context('./assets/alexGShirt/', false, /\.(jpeg)$/));
const images2 = importAllImages(require.context('./assets/dickiesPants/', false, /\.(jpeg)$/));
const images3 = importAllImages(require.context('./assets/harleyShirt/', false, /\.(jpeg)$/));
const images4 = importAllImages(require.context('./assets/oldHat/', false, /\.(jpeg)$/));
const images5 = importAllImages(require.context('./assets/wranglerShirt/', false, /\.(jpeg)$/));
const images6 = importAllImages(require.context('./assets/aphexShirt/', false, /\.(jpeg)$/));
const images7 = importAllImages(require.context('./assets/orangeTabLevis/', false, /\.(jpeg)$/));




const clothes = [
    {
        id: 1,
        name: 'Alex G T-Shirt',
        description: 'Alex G tour merchandise t-shirt. In excellent condition no flaws except missing tag.',
        photos: images1,
        size: 'S',
        color: 'Yellow',
        price: 60,
        slug: 'alex-g-shirt'
    },
    {
        id: 2,
        name: 'Dickies Pants',
        description: 'Dickies double knee work pants. Ends of each leg have been trimmed slightly. Otherwise in great condition.',
        photos: images2,
        size: '30',
        color: 'Navy',
        price: 20,
        slug: 'dickies-pants'
    },
    {
        id: 3,
        name: 'Harley Davidson Shirt',
        description: 'Harley Davidson collared shirt. Slightly worn with some fading throughout.',
        photos: images3,
        size: 'L',
        color: 'Navy',
        price: 30,
        slug: 'harley-shirt'
    },
    {
        id: 4,
        name: 'Vintage 1940s Hat',
        description: 'World War II era military hat. This hat can be worn in a number of different ways as shown in the images. Excellent quality, especially considering its age. ',
        photos: images4,
        size: '7',
        color: 'Green',
        price: 120,
        slug: '1940s-hat'
    },
    {
        id: 5,
        name: 'Wrangler Shirt',
        description: 'Brown/tan Wrangler western-style shirt with pearl snap buttons.',
        photos: images5,
        size: 'L',
        color: 'Brown',
        price: 40,
        slug: 'wrangler-shirt'
    },
    {
        id: 6,
        name: 'Aphex Twin Shirt',
        description: 'Official Aphex Twin merchandise t-shirt. Lightly worn with some minor staining/yellowing around the neck. Please excuse the wrinkles in the photo.',
        photos: images6,
        size: 'XL',
        color: 'White',
        price: 40,
        slug: 'aphex-twin-shirt'
    },
    {
        id: 7,
        name: 'Levi\'s Jeans',
        description: 'Vintage rare orange tab Levi\'s blue jeans. Fading, rips, and distressing throughout as seen in photos.',
        photos: images7,
        size: '34',
        color: 'Blue',
        price: 60,
        slug: 'orange-tab-levis'
    },
]

export default clothes;