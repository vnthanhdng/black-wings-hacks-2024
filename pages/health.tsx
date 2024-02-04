// pages/health.tsx
import React from 'react';
import Head from 'next/head';
import ResourcesCard from '../components/cards/ResourcesCard';
import Map from '@/components/Map';

const Health = () => {
  // Define your resource cards data here
  const resourceCardsData = [
    {
      imageUrl: "https://media1.popsugar-assets.com/files/thumbor/n_Fb_hyhVBl8T5n_T2V2WdMO5sU=/0x6:640x646/fit-in/640x646/filters:format_auto():upscale()/2021/02/12/026/n/1922729/5c371abb6027118c4a1f38.75538813_.jpg",
      title: "The Fitness Wiki",
      description: "A high quality hub for information and advice about achieving physical fitness goals – compiled and organized from the best threads and advice from both communities of r/Fitness and r/weightroom on Reddit.",
      learnMoreUrl: "https://thefitness.wiki/",
    },
    {
      imageUrl: "https://yt3.googleusercontent.com/PdD9w7tPItqol4wyv3xW7jp0K7srKYwwH0Dc84ycvHuCamOQuliwhsui31bKnTMChblmTcdy=s900-c-k-c0x00ffffff-no-rj",
      title: "Nutrition by Kylie",
      description: "Kylie is a registered dietitian and lover of all foods. She features tips, tricks, and general health and wellness information mixed with her favorite recipes, day-in-the-life vlogs, personal journey, and more!",
      learnMoreUrl: "https://www.youtube.com/@NutritionByKylie",
    },
    {
      imageUrl: "https://www.shape.com/thmb/mtjmZj9C1Md3PUjMx5l_Cju0t5g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/no-food-rules-e7824e2c72fd4472bc8d8bd7a25f44ec.png",
      title: "Intuitive Eating with Colleen",
      description: "Colleen Christensen is an intuitive eating dietitian here to free you from diet culture once and for all! Because you deserve peace with food, eating, and your body.",
      learnMoreUrl: "https://www.youtube.com/@ColleenChristensen",
    },
    {
      imageUrl: "https://yt3.googleusercontent.com/ytc/AIf8zZT0ysw1z7he4wpan9sLej2l3n1ld-t4cA_sg_WCNA=s176-c-k-c0x00ffffff-no-rj",
      title: "Science and Fitness",
      description: "Youtuber Stephanie Buttermore focuses on workouts as well as the academic side to fitness, offering a blend of practical guidance and scientific insights.",
      learnMoreUrl: "https://www.youtube.com/@StephanieButtermore",
    },
    {
      imageUrl: "https://t4.ftcdn.net/jpg/01/79/81/77/360_F_179817756_QzTocli57q9G6a1Oe7kJtoMS5dNMU8cl.jpg",
      title: "Workout Basics",
      description: "This Healthline article teaches beginners how to start working out and is perfect for those looking to kickstart their fitness journey.",
      learnMoreUrl: "https://www.healthline.com/nutrition/how-to-start-exercising#A-few-tips-for-beginners",
    },
  ];

  const centerCoordinates = { lat: 36.14887237548828, lng: -86.8036880493164 };
  const defaultQueries = ["health clinic", "hospital", "pharmacy"];
  const searchRadius = '10000';
  

  return (
    <>

      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://static.basicinvite.com/media/bi/33858/floral-medallion-wallpaper-l-brown.jpg?q=1698170417')" }}>
        {/* Map and other sections here */}

        <div className="container mx-auto p-8">
          <h2 className="text-2xl font-bold mb-4">Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceCardsData.map((card, index) => (
              <ResourcesCard key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="container mx-auto p-8">
        <Map centerCoordinates={centerCoordinates} defaultQueries={defaultQueries} searchRadius={searchRadius} />
        </div>
      </div>
      </>

  );
};

export default Health;
