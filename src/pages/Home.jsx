import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import NowPlaying from "./NowPlaying";





const Home = () => {
    return (
        <div className='max-w-8xl mx-auto '>
            <Navbar></Navbar>
            <Banner></Banner>
            <Brands></Brands>
            <NowPlaying></NowPlaying>
            <Footer></Footer>
        </div>
    );
};

export default Home;