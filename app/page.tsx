import Expertise from './_components/Expertise';
import Hero from './_components/Hero';
import Project from './_components/Project';
import Footer from './_components/Footer';

export default function HomePage() {
   return (
      <div className="flex flex-col w-full relative">
         <Hero />

         <Expertise />

         <Project />

         <Footer />
      </div>
   );
}
