import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HoverEffect from "@/components/HoverEffect";
export default function Home() {
	return (
		<main className="scrollbar-thin  relative pb-2 bg-white overflow-x-clip bg-white">
			<img
				src="/ellipse1.png"
				alt=""
				className="absolute top-[-50px] right-[-12rem] sm:top-[-5%] sm:right-[-20%] lg:right-[-15rem] sm:w-[30rem] sm:h-[30rem] 2xl:w-[50rem] 2xl:h-[50rem]  w-[20rem] h-[20rem]  rounded-full"
			/>

			<HeroSection></HeroSection>

			<ApproachSection></ApproachSection>

			<AboutSection></AboutSection>
			<ContactSection></ContactSection>

			<FooterSection></FooterSection>
			<img
				src="/ellipse3.png"
				alt=""
				className=" absolute bottom-[-1rem] right-[-10rem] sm:right-[-30rem]  md:right-[-70rem] 2xl:right-[-70rem] bottom-0  "
			/>
			<div className="bg-gradient-to-r from-[#565ec1] to-[#9ebbd2] py-1.5"></div>
		</main>
	);
}
