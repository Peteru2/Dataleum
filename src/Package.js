import About from "./About.png"
import { useState } from "react";

const Package = () => {
const [buyMtn, setBuyMtn] = useState(false)
console.log(buyMtn)
const handleMtnBuy = () =>{
    setBuyMtn(true)
}
    const dataMtnPackage = 
    [
        {
            name: "1g",
            amount: 200,
        },
        {
            name: "2g",
            amount: 350,
        },
        {
            name: "3g",
            amount: 450,
        },
        
        
    ]
       
    
    return (  
            <>
                <section>
                    <h5 className="text-6xl text-center my-16">Our Data Package</h5>    

                    <div>
                        <div className="motherPlan mt-44">
                                    <div className="allPlan">
                                    <div className="grid grid-cols-3 gap-20 plan">

                                        <div className="w-44">
                                            <div className="py-4 shadow-lg  border-2 border-blue-400 text-center rounded-lg w-40 mx-6 font-bold">MTN</div>
                                            
                                        <div className="bg-white mt-4 p-10 w-52 text-center shadow-lg rounded-lg">
                                            {
                                                dataMtnPackage.map((item, index) =>{
                                                        return(
                                                            <div key={index}>
                                                             <p className="text-blue-500 font-bold ">{item.name} = N{item.amount}</p>
                                      
                                                            </div>
                                                        )
                                                })
                                            }
                                       

                                            <button className="bg-blue-500 py-2 px-6 rounded-lg mt-4 font-bold text-white" onClick={handleMtnBuy}>Buy Now</button>
                                            <div className="flex justify-center">
                                                    <div className=" justify-center rounded-lg bg-white mtnModal">
                                                        <div className="ml-auto">
                                                            <span>x</span>
                                                        </div>
                                                            <p className="text-blue-500">Custom offer</p>
                                                            <p>MTN</p>
                                                            <input type = "text" placeholder= "Amount" className="border-2 border-blue-500 rounded-lg mx-4 text-center"/>
                                                            <p>Total Cost = N300</p>

                                                            <button className="bg-blue-500 text-white text-center">Make Payment</button>
                                                    </div>
                                            </div>
                                            <div id="overlay" class="overlay"></div>
                                        </div>

                                        </div>


                                        <div className="w-44">
                                            <div className="py-4 shadow-lg  border-2 border-blue-400 text-center rounded-lg w-40 mx-6 font-bold">MTN</div>
                                            
                                        <div className="bg-white mt-4 p-10 w-52 text-center shadow-lg rounded-lg">
                                        <p className="text-blue-500 font-bold ">N300 = 1 gig</p>
                                        <p className="text-blue-500 font-bold ">N300 = 1 gig</p>
                                        <p className="text-blue-500 font-bold ">N300 = 1 gig</p>

                                            <button className="bg-blue-500 py-2 px-6 rounded-lg mt-4 font-bold text-white">Buy Now</button>
                                        </div>
                                        </div>

                                         <div className="w-44">
                                            <div className="py-4 shadow-lg  border-2 border-blue-400 text-center rounded-lg w-40 mx-6 font-bold">MTN</div>
                                            
                                        <div className="bg-white mt-4 p-10 w-52 text-center shadow-lg rounded-lg">
                                        <p className="text-blue-500 font-bold ">N300 = 1 gig</p>
                                        <p className="text-blue-500 font-bold ">N300 = 1 gig</p>
                                        <p className="text-blue-500 font-bold ">N300 = 1 gig</p>

                                            <button className="bg-blue-500 py-2 px-6 rounded-lg mt-4 font-bold text-white">Buy Now</button>
                                        </div>

                                        
                                        
                                        </div>

                                        </div>
                                    </div>
                                    <div className="mt-10 bg-blue-500 bigAbout    text-center  py-20 px-32   ml-auto">
                                            <div className="text-center flex items-center justify-center   ">
                                                <p className=" text-white text-2xl">
                                                        "Just loremjsdj asijas asdoajdiajdfafa sdfaisjfdiafasfdnaf asfijafiasfd asfas afiajdfaisjfiasf asf asdfiasjfdiasfd asd" 
                                                </p>
                                            </div>
                                            <button className="bg-white rounded-lg px-4 py-2 mt-12 text-blue-500">Read More</button>
                                            <div className="aboutImg">
                                    <img src={About} alt="about" />

                                    <div className="aboutDataleum bg-blue-500 text-left border-2 border-white px-2 py-6 font-bold text-white">
                                            <p>About <br />Dataleum</p>    
                                    </div>

                                    </div>
                                    </div>
                        </div>
                    </div>
                </section>        
            </>
    );
}
 
export default Package;