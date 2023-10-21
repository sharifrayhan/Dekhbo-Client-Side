import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2'

const UpdateProducts = () => {

    const updateModal=()=>{
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Product Updated',
            showConfirmButton: false,
            timer: 1500,
        });
    }

    const getId = useParams();
    const { _id } = getId;
    console.log(_id)

    const items = useLoaderData()
    // const [items, setItems] = useState([])
    
    // useEffect(() => {
    //     fetch("https://assignment-10-server-287lva8z0-sharif-rayhan-nafis-projects.vercel.app/allproducts")
    //     .then(res=> res.json())
    //     .then(data => setItems(data))
    // }, []);

    console.log(items)

    const [card, setCard] = useState([]);
  

  
    useEffect(() => {
      const matchingCard = items?.find(item => item._id == _id);
      setCard(matchingCard);
    }, [_id, items]);

    console.log(card)

    const {selectedBrand} = card;

    console.log(selectedBrand)


    const handleUpdateProduct = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const brandName = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const image = form.image.value;
        const selectedBrand = form.selectedBrand.value;

        const newProduct = {name, brandName, type, price, rating, details, image, selectedBrand}
        console.log(newProduct)

        if (selectedBrand == "netflix"){
            fetch('https://assignment-10-server-287lva8z0-sharif-rayhan-nafis-projects.vercel.app/netflix', {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newProduct)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data?.acknowledged){
                    updateModal()
                }
              })
        }

        if (selectedBrand == "hulu"){
            fetch('https://assignment-10-server-287lva8z0-sharif-rayhan-nafis-projects.vercel.app/hulu', {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newProduct)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data?.acknowledged){
                    updateModal()
                }
              })
        }

        if (selectedBrand == "hbo"){
            fetch('https://assignment-10-server-287lva8z0-sharif-rayhan-nafis-projects.vercel.app/hbo', {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newProduct)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data?.acknowledged){
                    updateModal()
                }
              })
        }

        if (selectedBrand == "chorki"){
            fetch('https://assignment-10-server-287lva8z0-sharif-rayhan-nafis-projects.vercel.app/chorki', {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newProduct)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data?.acknowledged){
                    updateModal()
                }
              })
        }

        if (selectedBrand == "amazon"){
            fetch('https://assignment-10-server-287lva8z0-sharif-rayhan-nafis-projects.vercel.app/amazon', {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newProduct)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data?.acknowledged){
                    updateModal()
                }
              })
        }

        if (selectedBrand == "disney"){
            fetch('https://assignment-10-server-287lva8z0-sharif-rayhan-nafis-projects.vercel.app/disney', {
                method: 'POST',
                headers: {
                  'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newProduct)
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data?.acknowledged){
                    updateModal()
                }
              })
        }


    }


    return (
        <div>
<Navbar></Navbar>
<div className=" bg-[url(https://i.ibb.co/gvq2whv/black.jpg)] bg-no-repeat p-1">
            <div className=" mx-2 md:mx-10 lg:mx-24 mt-5 mb-10">

                {/* Form */}
                <div className=" py-10 px-14  bg-[#162028] rounded-md">
                    <div className=" text-center my-5">
                        <h1 className=" my-3 text-4xl font-medium text-gray-200 font-rancho">Update a Product</h1>
                        <p className="text-gray-200">Welcome to the Update Product form! You're just a few steps away from updating your product to one of our six popular brands. Fill up the below form to update your product</p>
                    </div>

                    <form onSubmit={handleUpdateProduct} className="">

                            <div>
                                <center><h1 className="text-gray-200 font-bold text-lg">Where To Update?</h1></center>
                                <div className="flex flex-wrap items-center justify-center gap-8 my-3">
                                   
                                        <div className="flex gap-2">
                                            <input type="radio" required name="selectedBrand" id="netflix" value="netflix" checked={selectedBrand=="netflix"} />
                                            <img className=" h-[25px] w-[25px] rounded-lg" src="https://i.ibb.co/z23kHvc/netflix-icon.png" alt="" />
                                            <h1 className="text-gray-200">Netflix</h1>
                                        </div>

                                        <div className="flex gap-2">
                                            <input type="radio" name="selectedBrand" id="amazon" value="amazon" checked={selectedBrand=="amazon"} />
                                            <img className=" h-[25px] w-[25px] rounded-lg" src="https://i.ibb.co/Jk2h6yF/amazon-prime-icon.png" alt="" />
                                            <h1 className="text-gray-200">Amazon Prime Video</h1>
                                        </div>

                                        <div className="flex gap-2">
                                            <input type="radio" name="selectedBrand" id="hulu" value="hulu" checked={selectedBrand=="hulu"}/>
                                            <img className=" h-[25px] w-[25px] rounded-lg" src="https://i.ibb.co/nRWDMVY/hulu-icon.png" alt="" />
                                            <h1 className="text-gray-200">Hulu</h1>
                                        </div>

                                        <div className="flex gap-2">
                                            <input type="radio" name="selectedBrand" id="hbo" value="hbo" checked={selectedBrand=="hbo"}/>
                                            <img className=" h-[25px] w-[25px] rounded-lg" src="https://i.ibb.co/HqjRR8W/hbo-max-icon.png" alt="" />
                                            <h1 className="text-gray-200">HBO Max</h1>
                                        </div>

                                        <div className="flex gap-2">
                                            <input type="radio" name="selectedBrand" id="disney" value="disney" checked={selectedBrand=="disney"}/>
                                            <img className=" h-[25px] w-[25px] rounded-lg" src="https://i.ibb.co/Gt0SvdZ/disney-icon.png" alt="" />
                                            <h1 className="text-gray-200">Disney Plus</h1>
                                        </div>

                                        <div className="flex gap-2">
                                            <input type="radio" name="selectedBrand" id="chorki" value="chorki" checked={selectedBrand=="chorki"}/>
                                            <img className=" h-[25px] w-[25px] rounded-lg" src="https://i.ibb.co/3kNH6BK/chorki-icon.png" alt="" />
                                            <h1 className="text-gray-200">Chorki</h1>
                                        </div>
                                        
                                 
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="name">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    // value={coffeeData.name}
                                    // onChange={handleInputChange}
                                    placeholder="Enter Name"
                                    defaultValue={card?.name}
                                    className="w-full border rounded px-3 py-2"
                                />
                                </div>
                                <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="chef">
                                    Brand Name:
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    // value={coffeeData.chef}
                                    // onChange={handleInputChange}
                                    placeholder="Enter Chef"
                                    defaultValue={card?.brandName}
                                    className="w-full border rounded px-3 py-2 "
                                />
                                </div>
                            </div>


                            <div className="flex gap-2">
                                <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="supplier">
                                    Type:
                                </label>
                                <input
                                    type="text"
                                    name="type"
                                    // value={coffeeData.supplier}
                                    // onChange={handleInputChange}
                                    placeholder="Enter Supplier"
                                    defaultValue={card?.type}
                                    className="w-full border rounded px-3 py-2 "
                                />
                                </div>
                                <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="taste text-gray-200">
                                    Price:
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    // value={coffeeData.taste}
                                    // onChange={handleInputChange}
                                    placeholder="Enter Taste"
                                    defaultValue={card?.price}
                                    className="w-full border rounded px-3 py-2"
                                />
                                </div>
                            </div>


                            <div className="flex gap-2">
                                <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="category">
                                    Rating:
                                </label>
                                <input
                                    type="text"
                                    name="rating"
                                    // value={coffeeData.category}
                                    // onChange={handleInputChange}
                                    placeholder="Enter Category"
                                    defaultValue={card?.rating}
                                    className="w-full border rounded px-3 py-2"
                                />
                                </div>
                                <div className="mb-4 w-2/4">
                                <label className="block font-semibold text-gray-200" htmlFor="details">
                                    Details:
                                </label>
                                <textarea
                                    name="details"
                                    // value={coffeeData.details}
                                    // onChange={handleInputChange}
                                    placeholder="Enter Details"
                                    defaultValue={card?.details}
                                    className="w-full h-[42px] border rounded px-3 py-2"
                                />
                                </div>
                            </div>


                            <div className="mb-4">
                            <label className="block font-semibold text-gray-200" htmlFor="photo">
                                Image:
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Enter Photo URL"
                                defaultValue={card?.image}
                                // onChange={handleInputChange}
                                className="w-full border rounded px-3 py-2"
                            />
                            </div>
                          <center>  <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                            >
                            Update Product
                            </button></center>
      </form>
                </div>

            </div>
            <Footer></Footer>
        </div>


        </div>
    );
};

export default UpdateProducts;