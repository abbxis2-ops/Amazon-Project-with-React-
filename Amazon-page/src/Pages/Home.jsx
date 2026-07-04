import Hero from '../HomeSections/Hero'
import ProductSlider from '../HomeSections/ProductSlider'
import sliderData from '../HomeSections/sliderData'
import SecondProductSlider from '../HomeSections/SecondProductSlider'
import imagesData from "../HomeSections/SecondSliderData";
import SecondCard from '../HomeSections/SecondCard'
import ThirdSlider from '../HomeSections/ThirdSlider'
import FourthSlider from '../HomeSections/FourthSlider'
import ThirdCard from '../HomeSections/ThirdCard'
import FifthSlider from '../HomeSections/FifthSlider'
import SixthSlider from '../HomeSections/SixthSlider'
import FourthCard from '../HomeSections/FourthCard'
import SeventhSlider from '../HomeSections/SeventhSlider'
import HistoryUpdate from '../HomeSections/HistoryUpdata'
import SignInButton from '../HomeSections/SignInButton'
import FooterUpdate from '../Components/Layout/FooterUpdate'

const Home = ({ setUser }) => {

   const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
    <Hero />
    <ProductSlider data={sliderData} />
    <SecondProductSlider data={imagesData} />
    <SecondCard />
    <ThirdSlider />
    <FourthSlider />
    <ThirdCard />
    <FifthSlider />
    <SixthSlider />
    <FourthCard />
    <SeventhSlider />
    <HistoryUpdate />
    <SignInButton user={user} setUser={setUser} />
    <FooterUpdate />
    </>
  )
}

export default Home