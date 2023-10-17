import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "./Footer";





const Home = () => {
    return (
        <div className='max-w-8xl mx-auto '>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;