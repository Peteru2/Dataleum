import About from "./About.png"
import { useState } from "react";

import { Bounce, Fade } from "react-awesome-reveal"
// import { Slide } from "react-awesome-reveal"
// import fadeIn  from "react-awesome-reveal"

const Package = () => {
const [buyMtn, setBuyMtn] = useState(false)
console.log(buyMtn)
const handleMtnBuy = () =>{
    setBuyMtn(!buyMtn)
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
            <Fade triggerOnce direction="left"  >
                <section>
                    <h5 className="text-6xl text-center my-16">Our Data Package</h5>    

                    <div>
                        <div className="motherPlan mt-44">
                                    <div className="allPlan">
                                    <div className="grid grid-cols-3 gap-20 plan">

                                    <Bounce triggerOnce cascade direction="">

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
                                        
                                        </Bounce>

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
                </Fade>  
                   
                
                       
                                                <div className=" justify-center rounded-lg text-center">
                                                    
                                                    <div className={buyMtn ? `mtnModal modal-show`: `mtnModal `}>
                                                    <div className="w-full">
                                                            <span className="closeButton" onClick={handleMtnBuy}>x</span>
                                                        </div>
                                                            <p className="text-blue-500 mb-3 mt-2">Custom Offer</p>
                                                            <p className="mb-8">MTN</p>
                                                            <input type = "text" placeholder= "Amount" className="border-2 border-blue-500 rounded-md mx-4 py-2 text-center"/>
                                                            <p className="font-bold mb-6">Total Cost = N300</p>
                                                            <button className="bg-blue-500 text-white text-center py-2 px-14 rounded-md">Make Payment</button>
                                                    </div>
                                            </div>
                                            
                                           
                                                    <div id="overlay" class={buyMtn? "overlay" : "hidden"} onClick={handleMtnBuy}></div>

                                          
            </>
    );
}
 
export default Package;