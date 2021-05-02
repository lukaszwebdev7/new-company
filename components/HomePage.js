import Presection from './home_page/Presection';
import SectionOne from './home_page/SectionOne';
import SectionTwo from './home_page/SectionTwo';
import SectionThree from './home_page/SectionThree';
import SliderText from './home_page/Slider_text';
import AfterSlider from './home_page/AfterSlider';

function HomePage() {
	return (
		<div className="flex justify-center overflow-hidden">
			<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet" />
			<div style={{ fontFamily: 'Roboto Condensed' }} className="w-full">
				<Presection />
				<SectionOne />
				<SectionTwo />
				<SliderText />
				<AfterSlider />
				<SectionThree />
			</div>
		</div>
	);
}

export default HomePage;
