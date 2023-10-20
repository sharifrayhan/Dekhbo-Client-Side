import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Context } from "../context/AllContext";
import Swal from 'sweetalert2'
import Navbar from "../components/Navbar";


const MyCart = () => {

    const {user} = useContext(Context)
    const userMail = user?.email;
    const items = useLoaderData()
    // const [items, setItems] = useState([])
    // useEffect(()=>{
    //     fetch("http://localhost:3000/cart")
    //     .then(res => res.json)
    //     .then(data => setItems(data))
    // },[items])

    console.log(items)

    const [userItems, setUserItems] = useState([]);

    useEffect(() => {
        if (items) {
            setUserItems("")
            const itemsBasedOnEmail = items?.filter((item) => item?.userEmail === userMail);
            setUserItems(itemsBasedOnEmail);
        }
    }, [items, userMail]);

    console.log(userItems)

    const handleDeleteItem = _id =>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`http://localhost:3000/cart/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount>0){
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
                }
                else{
                    Swal.fire(
                        'Failed to Delete!',
                      )
                }
            })
            }
          })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col h-max items-center justify-center  p-5 bg-[url(https://i.ibb.co/2MYfNMW/white.jpg)] bg-cover ">
            {
                userItems.length > 0 ? (
                    userItems.map((userItem) => (
                        <div key={userItem?._id} className='flex items-center justify-center rounded-md p-5 '>
                            <div className='rounded-md flex gap-3 p-5 bg-[#162028] w-[1000px]'>
                                <img className='rounded-md h-[200px]' src={userItem?.image} alt="" />
                                <div>
                                    <p className='font-bold text-2xl text-[#DADC55]'>{userItem?.name}</p>
                                    <p className='text-white'>Price: {userItem?.price}</p>
                                    <p className='text-white'>{userItem?.description}</p>
                                    <p className='text-white'>{userItem?.rating}</p>
                                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600" onClick={() => handleDeleteItem(userItem?._id)}>
                                        <img className="h-[100px]" src="https://i.ibb.co/n3qq1pk/delete-1.png" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1>No items here</h1>
                )
}

            </div>
        </div>
    );
};

export default MyCart;