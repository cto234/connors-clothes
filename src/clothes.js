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
const images8 = importAllImages(require.context('./assets/searsSweater/', false, /\.(jpeg)$/));
const images9 = importAllImages(require.context('./assets/boreRegardShirt/', false, /\.(jpeg)$/));
const images10 = importAllImages(require.context('./assets/westernJacket/', false, /\.(jpeg)$/));
const images11 = importAllImages(require.context('./assets/blueHat/', false, /\.(jpeg)$/));
const images12 = importAllImages(require.context('./assets/blackCarharttPants/', false, /\.(jpeg)$/));
const images13 = importAllImages(require.context('./assets/LLBeanShirt/', false, /\.(jpeg)$/));
const images14 = importAllImages(require.context('./assets/cutoffShirt/', false, /\.(jpeg)$/));
const images15 = importAllImages(require.context('./assets/brownCarharttPants/', false, /\.(jpeg)$/));
const images16 = importAllImages(require.context('./assets/alexGSweatshirt/', false, /\.(jpeg)$/));
const images17 = importAllImages(require.context('./assets/carharttJacket/', false, /\.(jpeg)$/));
const images18 = importAllImages(require.context('./assets/greyJeans/', false, /\.(jpeg)$/));
const images19 = importAllImages(require.context('./assets/pumaJersey/', false, /\.(jpeg)$/));
const images20 = importAllImages(require.context('./assets/yellowShirt/', false, /\.(jpeg)$/));
const images21 = importAllImages(require.context('./assets/hanesThermal/', false, /\.(jpeg)$/));





const clothes = [
    {
        id: 1,
        name: 'Alex G T-Shirt',
        description: 'Alex G tour merchandise t-shirt. In excellent condition no flaws except missing tag.',
        photos: images1,
        size: 'S',
        price: 60,
        slug: 'alex-g-shirt'
    },
    {
        id: 2,
        name: 'Dickies Pants',
        description: 'Dickies double knee work pants. Ends of each leg have been trimmed slightly. Otherwise in great condition.',
        photos: images2,
        size: '30',
        price: 20,
        slug: 'dickies-pants'
    },
    {
        id: 3,
        name: 'Harley Davidson Shirt',
        description: 'Harley Davidson short sleeve collared shirt. Slightly worn with some fading throughout.',
        photos: images3,
        size: 'L',
        price: 30,
        slug: 'harley-shirt'
    },
    {
        id: 4,
        name: 'Vintage 1940s Hat',
        description: 'World War II era military hat. This hat can be worn in a number of different ways as shown in the images. Excellent quality, especially considering its age. ',
        photos: images4,
        size: '7',
        price: 120,
        slug: '1940s-hat'
    },
    {
        id: 5,
        name: 'Wrangler Shirt',
        description: 'Brown/tan Wrangler western-style shirt with pearl snap buttons.',
        photos: images5,
        size: 'L',
        price: 40,
        slug: 'wrangler-shirt'
    },
    {
        id: 6,
        name: 'Aphex Twin Shirt',
        description: 'Official Aphex Twin merchandise t-shirt. Lightly worn with some minor staining/yellowing around the neck. Please excuse the wrinkles in the photo.',
        photos: images6,
        size: 'XL',
        price: 40,
        slug: 'aphex-twin-shirt'
    },
    {
        id: 7,
        name: 'Levi\'s Jeans',
        description: 'Vintage rare orange tab Levi\'s blue jeans. Fading, rips, and distressing throughout as seen in photos.',
        photos: images7,
        size: '34',
        price: 60,
        slug: 'orange-tab-levis'
    },
    {
        id: 8,
        name: 'Vintage Sears Sweater',
        description: 'Vintage 1960\'s or 1970\'s (best guess) white and blue sweater. A few minor holes.',
        photos: images8,
        size: 'L',
        price: 35,
        slug: 'sears-sweater'
    },
    {
        id: 9,
        name: 'Vintage Portland T-shirt',
        description: 'Commemorative t-shirt for "Bore-Regard," a tunnel-boring machine used to dig the westside MAX tunnel in my hometown, Portland, Oregon. ',
        photos: images9,
        size: 'L',
        price: 25,
        slug: 'bore-regard-shirt'
    },
    {
        id: 10,
        name: 'Cow Print Western Jacket',
        description: 'Interesting vintage western-style jacket with faux-cow hide fur. Brand is Tripp NYC.',
        photos: images10,
        size: 'L',
        price: 35,
        slug: 'western-jacket'
    },
    {
        id: 11,
        name: 'Blue Hat',
        description: 'Y2K patterned blue hat. Reversible with green inside.',
        photos: images11,
        size: 'S',
        price: 10,
        slug: 'blue-hat'
    },
    {
        id: 12,
        name: 'Black Carhartt Double Knee Pants',
        description: 'Distressed black Carhartt double knee work pants. Paint stains on knees and small holes in crotch and heel.',
        photos: images12,
        size: '34',
        price: 35,
        slug: 'black-carhartt-pants'
    },
    {
        id: 13,
        name: 'Plaid L.L. Bean Shirt',
        description: 'Green Plaid button down shirt. Very warm and in great condition.',
        photos: images13,
        size: 'L',
        price: 40,
        slug: 'LLBean-Shirt'
    },
    {
        id: 14,
        name: 'NYC Coroner Shirt',
        description: 'Vintage cutoff shirt with NYC Coroner graphic',
        photos: images14,
        size: 'XL',
        price: 35,
        slug: 'cutoff-shirt'
    },
    {
        id: 15,
        name: 'Brown Carhartt Double Knee Pants',
        description: 'Brown Carhartt work pants. In excellent condition.',
        photos: images15,
        size: '30',
        price: 40,
        slug: 'brown-carhartt-pants'
    },
    {
        id: 16,
        name: 'Alex G Sweatshirt',
        description: 'Black Alex G official merchandise hooded sweatshirt. Tagged L but runs slightly smaller. True size is M/L',
        photos: images16,
        size: 'L',
        price: 80,
        slug: 'alex-g-sweatshirt'
    },
    {
        id: 17,
        name: 'Carhartt Work Jacket',
        description: 'Black, blanket-lined Carhartt work jacket. Barely worn and in near perfect condition. Very warm and great for the winter.',
        photos: images17,
        size: 'L',
        price: 80,
        slug: 'carhartt-jacket'
    },
    {
        id: 18,
        name: 'Grey Levi\'s Jeans',
        description: 'Grey Levi\'s 501 straight-leg jeans. In good condition, only slightly worn and with a small hole on the right leg as pictured.',
        photos: images18,
        size: '34',
        price: 40,
        slug: 'grey-jeans'
    },
    {
        id: 19,
        name: 'Puma Jersey',
        description: '2000\'s Puma brand, white and green soccer jersey. Really cool design. Slightly worn, but generally in good condition except for some stains on the left sleeve as pictured.',
        photos: images19,
        size: 'M',
        price: 20,
        slug: 'puma-jersey'
    },
    {
        id: 20,
        name: 'Vintage Graphic T-Shirt',
        description: 'Cool vintage yellow t-shirt from around the 1990\'s. Light and thin material. From some kind of summer program for kids.',
        photos: images20,
        size: 'M',
        price: 30,
        slug: 'yellow-shirt'
    },
    {
        id: 21,
        name: 'Hanes Thermal Shirt',
        description: 'Hanes brand waffle knit, long sleeve thermal shirt from around the 1990\'s. Nice and warm, great for layering in cold weather.',
        photos: images21,
        size: 'M',
        price: 25,
        slug: 'hanes-thermal'
    },
]

export default clothes;