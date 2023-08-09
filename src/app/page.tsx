import './home.css'
import Carousel from "@/components/Carousel";
import Counter from "@/components/Counter";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Intro from "@/components/Intro";
import Placements from "@/components/Placements";
import Projects from '@/components/Projects';
import RoadMap from "@/components/RoadMap";
import Testimonial from '@/components/Testimonial';


import Category from "@/components/CourseCategory"
export default function Home() {
  return (
   <div style={{background:'#f3f4f6'}} >
   <Carousel/>
   <Intro/>
   <Placements/>
   <Courses/>
   <Counter/>
   <Features/>
   <RoadMap/>
   <Projects/>
   <Testimonial/>
   </div>
  )
}
