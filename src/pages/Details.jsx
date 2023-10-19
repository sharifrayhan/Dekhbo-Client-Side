
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Context } from '../context/AllContext';

const Details = () => {
    const {user} = useContext(Context)
    const userEmail = user?.email;

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/allproducts")
        .then(res=> res.json())
        .then(data => setItems(data))
    }, []);

    const [card, setCard] = useState();
  
    const getId = useParams();
    const { _id } = getId;
    console.log(_id)
  
    useEffect(() => {
      const matchingCard = items?.find((item) => item._id == _id);
      setCard(matchingCard);
    }, [_id, items]);

    console.log(card)

    const handleAddToCart = ()=>{

      card.userEmail = userEmail;
      
        fetch('http://localhost:3000/cart', {
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(card)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center rounded-md p-5 bg-[url(https://i.ibb.co/2MYfNMW/white.jpg)] bg-cover'>
                <div className='rounded-md flex gap-3 p-5 bg-[#162028] w-[1000px]'>
                    <img className=' rounded-md h-[500px]' src={card?.image} alt="" />
                    <div>
                        <p className=' font-bold text-2xl text-[#DADC55]'>{card?.name}</p>
                        <p className=' text-white'>Price: {card?.price}</p>
                        <p className='text-white'>{card?.description}</p>
                        <p className='text-white'>{card?.rating}</p>
                        <Link><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600" onClick={handleAddToCart}>Add To Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;