// pages/makeup.tsx
import Head from 'next/head';
import ResourcesCard from '../components/cards/ResourcesCard'; // Reuse the same card component
import Map from '../components/Map';

const Makeup = () => {
    const resourceCardsData = [
        {
          imageUrl: "https://yt3.googleusercontent.com/ytc/AIf8zZRagzENcVQP4GO0ZFsvinQTNTLLGq4xOrFWGpCM=s176-c-k-c0x00ffffff-no-rj",
          title: "Dear Peachie",
          description: "Sharing the best East Asian beauty content from different social media platforms with you 🍑",
          learnMoreUrl: "https://www.youtube.com/@dearpeachie",
        },
        {
          imageUrl: "https://yt3.googleusercontent.com/ytc/AIf8zZQ8FcgKMvDXQM1Ds5-6snfvZ07f4w24fgFeCOh6cQ=s900-c-k-c0x00ffffff-no-rj",
          title: "How to do makeup step by step",
          description: "This is perfect for beginners or if you just want to refresh your skills. Youtuber EMAN shares tips and tricks for a full face of an easy everyday makeup look in this makeup video!",
          learnMoreUrl: "https://www.youtube.com/watch?v=CdQiOP_tn1Q&ab_channel=EMAN",
        },
        {
          imageUrl: "https://dy6g3i6a1660s.cloudfront.net/6McfpEbQiWzaaFupL_7KpAPUAoo/orig.jpg",
          title: "WikiHow Makeup",
          description: "Step by Step article with gifs on how to do makeup. For those who do not want to watch a video!",
          learnMoreUrl: "https://www.wikihow.com/Apply-Makeup",
        },
        {
          imageUrl: "https://cdn.shopify.com/s/files/1/0648/1955/files/Main_9d9ff893-5218-471d-a50c-fbff1b5fad27.jpg?v=1608098185",
          title: "How to Sanitize Your Brushes",
          description: "Article on how and why you need to clean your makeup brushes!",
          learnMoreUrl: "https://www.homemadesimple.com/bathroom/how-and-why-to-sanitize-your-makeup-and-brushes/",
        },
        {
          imageUrl: "https://blogscdn.thehut.net/app/uploads/sites/996/2021/04/beginners-makeup_1644501941.png",
          title: "Makeup Essentials",
          description: "An article on what products people need to buy to prepare for the first time they do makeup.",
          learnMoreUrl: "https://www.revolutionbeauty.us/revsays/makeup/what-makeup-to-buy-for-beginners/",
        }
      ];
      
      const makeupProductRecommendations = [
        {
          imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71L2i2B4DIL._SL1500_.jpg",
          title: "CeraVe Moisturizing Lotion",
          productUrl: "https://www.amazon.com/dp/B00365DABC",
        },
        {
          imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61LKHOx1aQL._SL1500_.jpg",
          title: "Cetaphil Night Cream",
          productUrl: "https://www.amazon.com/dp/B01MG4PVTR",
        },
        {
          imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61CLojn1axL._SL1500_.jpg",
          title: "Clinique Moisturizing Lotion",
          productUrl: "https://www.amazon.com/CLINIQUE-Dramatically-Different-Moisturizing-Lotion/dp/B07SPTH5W4",
        },
        {
          imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/71ScUb0VhOL._SL1500_.jpg",
          title: "Thayers Facial Toner",
          productUrl: "https://www.amazon.com/Thayers-Alcohol-Free-Petal-Formula-12-Facial/dp/B007HD570Q",
        },
        {
          imageUrl: "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61JoVxsrlDL._SL1500_.jpg",
          title: "e.l.f Foundation",
          productUrl: "https://www.amazon.com/l-f-Cosmetics-Flawless-Finish-Foundation/dp/B07DFK238H",
        },]

        const centerCoordinates = { lat: 36.14887237548828, lng: -86.8036880493164 };
        const defaultQueries = ["beauty salon", "cosmetics store", "makeup artist"];
        const searchRadius = '10000';
             
  return (
    <>
      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://static.basicinvite.com/media/bi/33858/floral-medallion-wallpaper-l-brown.jpg?q=1698170417')" }}>
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4 category-header">Makeup</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceCardsData.map((card, index) => (
              <ResourcesCard key={index} {...card} />
            ))}
          </div>

          <h2 className="text-2xl font-bold my-4">Items to Buy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {makeupProductRecommendations.map((product, index) => (
              <a key={index} href={product.productUrl} target="_blank" className="block bg-white shadow-md rounded-md overflow-hidden">
                <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.title} />
                <div className="p-4">
                  <p className="text-gray-600">{product.title}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="container mx-auto p-8">
        <Map centerCoordinates={centerCoordinates} defaultQueries={defaultQueries} searchRadius={searchRadius} />
        </div>
        </div>
      </div>
    </>
  );
};

export default Makeup;
