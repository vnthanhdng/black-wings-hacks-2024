// LandingPage.tsx
import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
    <div className="bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://static.basicinvite.com/media/bi/33858/floral-medallion-wallpaper-l-brown.jpg?q=1698170417')" }}>
      <header className="hero-section" >
        <h1 className='text-6xl'>Welcome to SquirrelMentor</h1>
        <p className='text-xl'>Nurturing Skills. Empowering Girls.</p>
      
      </header>

      <section className="about-us">
        <h2 className='text-5xl'>Who We Are</h2>
        <p className='text-xl'>We are a team of college students, majoring in Computer Science, dedicated to spreading social good.</p>
      </section>

      <section className="our-mission">
        <h2 className='text-5xl'>The Problem We Tackle</h2>
        <p className='text-xl'>In a world where single parents are common, we provide knowledge that helps girls who may not have a motherly figure.</p>
        {/* Add animation or interactive display here */}
        <div className="problem-solution-animation">
          {/* Content goes here */}
        </div>
      </section>

      <section className="subsections-intro">
        <h2 className='text-5xl'>Explore Our Sections</h2>
        <div className="subsection" onClick={() => navigateToSubsection('health')}>
          <h3  className='text-xl'>Health & Wellness</h3>
          <p className='text-lg'>Empower your health with trusted advice and support.</p>
        </div>
        <div className="subsection" onClick={() => navigateToSubsection('makeup')}>
          <h3  className='text-xl'>Beauty & Care</h3>
          <p className='text-lg'>Discover beauty tips and secrets for all people.</p>
        </div>
        <div className="subsection" onClick={() => navigateToSubsection('sexEd')}>
          <h3  className='text-xl'>Education & Learning</h3>
          <p className='text-lg'>Resources that make learning engaging and fun.</p>
        </div>
      
      </section>
      </div>
      
    </>
  );
};

// Functions to navigate to subsections (can be replaced with Link from 'next/link' or router.push from 'next/router')
const navigateToSubsection = (section: string) => {
  window.location.href = section + '.html';
};


export default LandingPage;
