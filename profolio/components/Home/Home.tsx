'use client';
import { useEffect } from 'react'
import Hero from './Hero/Hero'
import Service from './Service/Service'
import Resume from './Resume/Resume'
import Project from './Project/Project'
import Skill from './Skill/Skill'
import Client from './Client/Client'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import ScrollToTopButton from './Helper/Scrolltoptodown'
// @ts-ignore
import 'aos/dist/aos.css';
import Aos from 'aos'

const Home = () => {
  useEffect(() => {
    const aos = async () => {
      await import('aos');
      Aos.init({
        duration: 1000,
        once: true,
        easing: 'ease',
        anchorPlacement: 'top-bottom',
      });
    };
    aos();
  }, []);

  return (
    <div>
      <section id="about"><Hero /></section>
      <section id="services"><Service /></section>
      <section id="resume"><Resume /></section>
      <section id="project"><Project /></section>
      <section id="skill"><Skill /></section>
      <section id="testimonials"><Client /></section>
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
      <ScrollToTopButton />
    </div>
  );
}

export default Home
