// pages/fashion.tsx
import Head from 'next/head';

import ResourcesCard from '../components/cards/ResourcesCard'; // Reuse the same card component
import Map from '@/components/Map';

const Fashion = () => {
  const resourceCardsData = [
    {
      imageUrl: "https://yt3.googleusercontent.com/o_coplM42AbkeKYJMw7_Kg1GNpsLuHTvsqXJb05SUjwPuAM-8xaKbDRLNIv2rEFzyinmFFDokg=s176-c-k-c0x00ffffff-no-rj",
      title: "Kaiti Yoo",
      description: "Youtuber who documents how to dress to impress!",
      learnMoreUrl: "https://www.youtube.com/@KaitiYoo/featured",
    },
    {
      imageUrl: "https://yt3.googleusercontent.com/ytc/AIf8zZSJpF_9SzGj0afAVO-AdbzeokiXgaeBWIGxQZXhew=s176-c-k-c0x00ffffff-no-rj",
      title: "Bestdressed",
      description: "Fashion, thrifting, and other misadventures of a 20-something living in NYC.",
      learnMoreUrl: "https://www.youtube.com/@bestdressed/featured",
    },
    {
      imageUrl: "https://st.depositphotos.com/2209782/2544/i/450/depositphotos_25447851-stock-photo-clothes-on-a-rack.jpg",
      title: "r/Female Fashion Advice",
      description: "Subreddit where people can ask for advice!",
      learnMoreUrl: "https://www.reddit.com/r/femalefashionadvice/",
    },
    {
      imageUrl: "https://www.essence.com/wp-content/uploads/2020/07/20.-@simply.cie_.jpg",
      title: "Where to Find Style Inspiration",
      description: "Reddit post with helpful tips on where to get fashion inspiration.",
      learnMoreUrl: "https://www.reddit.com/r/femalefashionadvice/comments/vg82lg/how_do_you_guys_find_style_inspiration/",
    },
    {
      imageUrl: "https://i0.wp.com/emilyelizabethmay.com/wp-content/uploads/2023/10/emily-elizabeth-may-about-me-2.png?w=1100&ssl=1",
      title: "7 Simple Ways to Dress Better",
      description: "Useful article on how to improve your style!",
      learnMoreUrl: "https://emilyelizabethmay.com/styling-tips-dress-better/",
    },
  ];

  const centerCoordinates = { lat: 36.14887237548828, lng: -86.8036880493164 };
  const defaultQueries = ["clothing store", "boutique", "fashion"];
  const searchRadius = '10000';

  return (
    <>

      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://static.basicinvite.com/media/bi/33858/floral-medallion-wallpaper-l-brown.jpg?q=1698170417')" }}>
        <div className="container mx-auto p-8">
          <h2 className="text-2xl font-bold mb-4">Fashion</h2>
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

export default Fashion;
