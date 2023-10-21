
import { useState, useEffect, useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Context } from '../context/AllContext';
import Swal from 'sweetalert2'

const Details = () => {
    const {user} = useContext(Context)
    const userEmail = user?.email;

    const items = useLoaderData()
    // const [items, setItems] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:3000/allproducts")
    //     .then(res=> res.json())
    //     .then(data => setItems(data))
    // }, []);

const showError =()=>{
    Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Failed To Add To The Cart',
        showConfirmButton: false,
        timer: 1500,
    });
}

    const [card, setCard] = useState();
  
    const getId = useParams();
    const { _id } = getId;
    console.log(_id)
  
    useEffect(() => {
      const matchingCard = items?.find((item) => item._id == _id);
      setCard(matchingCard);
    }, [_id, items]);

    console.log(card)

    const handleAddToCart = async () => {
        card.userEmail = userEmail;
    
        try {
            const response = await fetch('http://localhost:3000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(card),
            });
    
            if (response.ok) {
                const data = await response.json();
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Successfully Added To The Cart',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    showError()
                }
            } else {
                showError()
            }
        } catch (error) {
            showError()
        }
    };
    


    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center rounded-md p-5 bg-[url(https://i.ibb.co/2MYfNMW/white.jpg)] bg-cover'>
                <div className='rounded-md flex flex-col gap-3 p-5 w-[500px]  bg-[#162028] '>
                    <img className=' rounded-md h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]'  src={card?.image} alt="" />
                    <div className=' text-center'>
                        <p className='mb-2 font-bold text-2xl text-[#DADC55]'>{card?.name}</p>
                        <p className='mb-2 text-white'>Price: {card?.price}</p>
                        <p className='mb-2 text-white'>{card?.details}</p>
                        <p className='mb-2 text-white'>Rating: {card?.rating}</p>
                        <Link><button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600" onClick={handleAddToCart}>Add To Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;