'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import me_pixar from '../assets/images/me_pixar.webp';
import { CodeXml, Server, TabletSmartphone } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
  ];

  const skills = [
    { 
      id: 'mobile', 
      title: 'Mobile Development', 
      icon: TabletSmartphone, 
      items: [
        'React Native', 
        'Expo'
      ] 
    },
    { 
      id: 'web', 
      title: 'Web Development', 
      icon: CodeXml, 
      items: [
        'React', 
        'Next.js', 
        'Tailwind CSS', 
        'JavaServer Faces', 
        'HTML/CSS'
      ] 
    },
    { 
      id: 'backend', 
      title: 'Backend Development', 
      icon: Server, 
      items: [
        'Node.js',
        'TypeScript',
        'Prisma',
        'NestJS',
        'Express',
        'Java',
        'Criteria',
        'Hibernate',
        'JPA',
        'PostgreSQL',
        'MySQL',
        'Oracle',
        'Redis'
      ] 
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-32 right-8 z-40 bg-black/80 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-[#181818]">
        <div className="relative flex flex-col items-start">
          <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-gray-600 to-gray-700 z-0" style={{ right: 'auto' }} />
          {sections.map((section, index) => (
            <div key={section.id} className="relative z-10 flex items-center min-h-[40px]">
              <button
                onClick={() => scrollToSection(section.id)}
                className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105 p-2 rounded-lg hover:bg-gray-800/50"
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-gray-800 box-content ${activeSection === section.id
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-400/50 scale-125'
                    : 'bg-gray-600 group-hover:bg-green-400/70'
                    }`}
                  style={{ zIndex: 2 }}
                />
                <span
                  className={`text-sm font-medium transition-all duration-300 ${activeSection === section.id
                    ? 'text-green-400'
                    : 'text-gray-300 group-hover:text-white'
                    }`}
                >
                  {section.title}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <main className="bg-black">
        <section id="about" className="w-full max-w-4xl mx-auto pb-16 pt-32 px-8 min-h-screen flex flex-col justify-center">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-2">Cassio Figueiredo</h1>
            <p className="text-xl text-green-400 font-medium">Full Stack Developer</p>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mr-4 rounded-full"></div>
            <h2 className="text-4xl font-bold text-white">About me</h2>
          </div>
          <p className="text-white text-lg leading-relaxed mb-8">
            Bachelor of Computer Science with approximately four years of professional experience in full-stack development, specializing in backend solutions. Possesses a strong background in leading projects, optimizing workflows, and mentoring teams, utilizing agile methodologies. Skilled in code review processes to ensure high-quality, maintainable code. Passionate about delivering impactful solutions and continuously enhancing expertise.
          </p>
          <div className="flex justify-center">
            <Image
              alt="Cassio Figueiredo"
              src={me_pixar}
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-gradient-to-r from-green-400 to-emerald-500 shadow-green-400/30"
            />
          </div>
        </section>

        <section id="skills" className="w-full max-w-4xl mx-auto py-16 px-8 min-h-screen flex flex-col justify-center">
          <div className="flex items-center mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mr-4 rounded-full"></div>
            <h2 className="text-4xl font-bold text-white">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.id} className="border-[#181818] border-2 rounded-lg px-6 py-6">
                  <div className='flex items-center gap-4'>
                    <Icon color='#10b981' />
                    <h3 className="text-2xl font-semibold text-white">{skill.title}</h3>
                  </div>
                  <ul className="flex flex-wrap mt-4 gap-2">
                    {skill.items.map(item => (
                      <li key={item} className="bg-[#181818] px-4 py-2 rounded-lg">{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
