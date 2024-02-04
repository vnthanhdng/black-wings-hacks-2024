// pages/sexEd.tsx
import Head from 'next/head';
import ResourcesCard from '../components/cards/ResourcesCard'; // Reuse the same card component
import Map from '@/components/Map';

const SexEd = () => {
  const resourceCardsData = [
    {
      imageUrl: "https://media-cdn.socastsrm.com/wordpress/wp-content/blogs.dir/2499/files/2022/06/pp-logo.jpg",
      title: "Five Things to Keep in Mind Before Your “First Time”",
      description: "Planned Parenthood article in case you are nervous for your first time!",
      learnMoreUrl: "https://www.plannedparenthood.org/blog/five-things-to-keep-in-mind-before-your-first-time",
    },
    {
      imageUrl: "https://production-tcf.imgix.net/app/uploads/2023/03/15135311/contraception-e1678902821559.png",
      title: "Miss Contraceptive",
      description: "Funny short video explaining contraceptives",
      learnMoreUrl: "https://www.youtube.com/watch?v=thWp1SWi52s&ab_channel=Lildh09",
    },
    {
      imageUrl: "https://helios-i.mashable.com/imagery/articles/03cjwTTlLSe96rzbBeIfATy/hero-image.fill.size_1200x675.v1623372463.jpg",
      title: "10 Period Hacks All Girls NEED To Know!",
      description: "Youtuber explains some period hacks!",
      learnMoreUrl: "https://www.youtube.com/watch?v=PUSugc6mKpE&ab_channel=Wengie",
    },
    {
      imageUrl: "https://www.pratisandhi.com/wp-content/uploads/2021/05/M1-1024x512.png",
      title: "The First Period",
      description: "YouTube video explaining what to do when you get your first period!",
      learnMoreUrl: "https://www.youtube.com/watch?v=LBwJ3oPdUfc&ab_channel=ALWAYSUK",
    },
    {
      imageUrl: "https://libraries.mvcc.vic.gov.au/wp-content/uploads/2021/04/research-betterhealth-e1626253058859.png",
      title: "Safe Sex",
      description: "Article explaining how to have safe sex",
      learnMoreUrl: "https://www.betterhealth.vic.gov.au/health/healthyliving/safe-sex",
    },
  ];
  const centerCoordinates = { lat: 36.14887237548828, lng: -86.8036880493164 };
  const defaultQueries = ["planned parenthood", "sex education", "contraceptives"];
  const searchRadius = '10000';

  return (
    <>
  
      <div className="bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://static.basicinvite.com/media/bi/33858/floral-medallion-wallpaper-l-brown.jpg?q=1698170417')" }}>
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4 category-header">Sex Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceCardsData.map((card, index) => (
              <ResourcesCard key={index} {...card} />
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

export default SexEd;
