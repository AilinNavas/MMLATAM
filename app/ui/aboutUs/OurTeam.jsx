import React from 'react';
import CardTeam from './CardTeam';
import ailin from '../../../public/ailin.png';
import joel from '../../../public/joel.jpg';
import analitics from '@/public/logos-joel/analitics.svg';
import bright from '@/public/logos-joel/bright.svg';
import google from '@/public/logos-joel/google.svg';
import localfalcon from '@/public/logos-joel/localfalcon.svg';
import screamin from '@/public/logos-joel/screamin.svg';
import search from '@/public/logos-joel/search.svg';
import semrush from '@/public/logos-joel/semrush.svg';
import html from '@/public/logos-ailin/html.svg';
import css from '@/public/logos-ailin/css.svg';
import js from '@/public/logos-ailin/js.svg';
import react from '@/public/logos-ailin/react.svg';
import next from '@/public/logos-ailin/next.svg';
import tailwind from '@/public/logos-ailin/tailwind.svg';
import motion from '@/public/logos-ailin/motion2.svg';
import gsap from '@/public/logos-ailin/gsap.svg';


const OurTeam = () => {
    const team = [
        { title:'SEO Specialist',
        name: 'Joel Chavez',
        imageUrl: joel ,
        description :'He will take charge of elevating your search rankings. With expertise in SEO strategies, he ensures your dental clinic is easily found by potential patients. Expect more site visits and, importantly, more patients coming through your doors.',
        borderColor :'border-[#04ADEE]',
        techIcons: [
            { src: analitics, alt: 'Google Analytics' },
            { src: bright, alt: 'SEO' },
            { src: google, alt: 'Keyword Research' },
            { src: localfalcon, alt: 'Google Analytics' },
            { src: screamin, alt: 'SEO' },
            { src: search, alt: 'Keyword Research' },
            { src: semrush, alt: 'Keyword Research' }
        ] 
     

         },
        {title :'Web Designer',
        name :'Ailin Navas',
        imageUrl : ailin,
        description : 'She not only creates visually appealing websites but also ensures that each design is functional and user-friendly for your patients. Trust in her ability to transform your online presence and attract more patients to your practice.',
        borderColor :'border-[#B365E1]',
        techIcons: [
            { src: html , alt: 'HTML5' },
            { src: css, alt: 'CSS3' },
            { src: js, alt: 'JavaScript' },
            { src: react, alt: 'React.js' },
            { src: next, alt: 'Next.js' },
            { src: tailwind, alt: 'Tailwind css' },
            { src: motion, alt: 'Framer Motion' },
            { src: gsap, alt: 'GSAP' },
       
        ]



        }
    ]
    return (
        <section className='bg-[#09090A]'>
        
           <div className='mx-auto p-8 max-w-7xl border-2 border-red-500'>
          
                <div className='grid space-y-4 mx-auto md:grid-cols-2 md:space-y-0 md:max-w-4xl md:space-x-4'>
                {team.map((member, index) => (
                <CardTeam 
                    key={index}
                    imageUrl={member.imageUrl}
                    title={member.title}
                    name={member.name}
                    description={member.description}
                    borderColor={member.borderColor}
                    techIcons={member.techIcons}
                />
            ))}
                </div>

            </div>
        </section>
    )
}

export default OurTeam