// pages/hygiene.tsx
import Head from 'next/head';

import ResourcesCard from '../components/cards/ResourcesCard'; // Reuse the same card component
import Map from '@/components/Map';

const Hygiene = () => {
  const resourceCardsData = [
    {
      imageUrl: "https://yt3.googleusercontent.com/ytc/AIf8zZQvfpvo-0-g2nWPMtGM0fVwB5ThJKXVqhlVkPdUBA=s176-c-k-c0x00ffffff-no-rj",
      title: "Skincare specialist Youtuber",
      description: "Youtuber Hyram has videos weekly on skincare",
      learnMoreUrl: "https://www.youtube.com/@Hyram",
    },
    {
      imageUrl: "https://i.etsystatic.com/isla/0ebcbe/51968135/isla_fullxfull.51968135_bdmmmn9p.jpg?version=0",
      title: "Skincaregem",
      description: "Are you an avid user of Instagram? This account contains all things fun with illustrative skin care guides!",
      learnMoreUrl: "https://www.instagram.com/skincaregem/",
    },
    {
      imageUrl: "https://t3.ftcdn.net/jpg/04/22/50/10/360_F_422501065_iKBL7qoOhaXqjxONodvSnGmuuwkt7pbf.jpg",
      title: "r/SkincareAddiction",
      description: "Subreddit that contains posts, forums, and links to all things skincare!",
      learnMoreUrl: "https://www.reddit.com/r/SkincareAddiction/wiki/index/",
    },
    {
      imageUrl: "https://t4.ftcdn.net/jpg/03/39/31/89/360_F_339318993_n0M7XvM4VUCNbU5vbkFwKDBLpfVZitvM.jpg",
      title: "Hygiene/Selfcare tips",
      description: "Reddit forum with tips",
      learnMoreUrl: "https://www.reddit.com/r/selfimprovement/comments/10i384j/ladies_what_are_your_hygieneself_care_tips/",
    },
    {
      imageUrl: "https://www.southavewomensservices.com/wp-content/uploads/2020/08/Feminine-Hygiene-Tips-1200x900.jpg",
      title: "20 Feminine Hygiene Tips",
      description: "Healthline article on how to take care of your body!",
      learnMoreUrl: "https://www.healthline.com/health/feminine-hygiene#when-to-start",
    },
  ];

  const centerCoordinates = { lat: 36.14887237548828, lng: -86.8036880493164 };
  const defaultQueries = ["beauty salon", "spa", "bath products"];
  const searchRadius = '10000';

  return (
    <>

      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://static.basicinvite.com/media/bi/33858/floral-medallion-wallpaper-l-brown.jpg?q=1698170417')" }}>
        <div className="container mx-auto p-8">
          <h2 className="text-2xl font-bold mb-4">Hygiene</h2>
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

export default Hygiene;
