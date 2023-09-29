import "./style.css"
import access from "./accessSvg.svg"
import rect from "./Rectangle.png"
import Package from "./Package";
import Why from "./why";
import Navbar from "./Navbar";
import React, { useEffect } from 'react';

const Landing = () => {
  useEffect(() => {
    // Select the delayed element by its id or class
    const delayedElement = document.getElementById('delayed-element');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Check if the element is in the viewport
        if (entry.isIntersecting) {
            console.log('Element is in the viewport');
          // Remove the 'hidden' class to make the element visible
          delayedElement.classList.remove('hidden');
          // Stop observing once the element is visible (optional)
          observer.unobserve(delayedElement);
        }
      });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    // Start observing the element
    observer.observe(delayedElement);

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

    return ( 
            <>
            <Navbar />
            <section>
                <section className="grid grid-cols-2 gap-3 mt-28 px-32">
                        <div className="mt-32">
                                <p className="text-7xl font-bold">
                                    Get Access To Data
                                </p>
                                <div className="bg-blue-500 text-white  py-4 px-4 w-96 font-bold text-6xl text-center mt-4 accessButton">
                                    Buy now
                                </div>
                        </div>
                        <div>
                                <img src={access} alt="svg" />

                        </div>
                </section>
                <section  className=" bg-gray-100 grid grid-cols-2 flex py-14">
                        <div id="delayed-element" className="m-auto text-center justify-center">
                            <h4 className="font-bold text-5xl  text-center ">
                                WHAT WE DO
                            </h4>
                            <div className="bg-blue-400 flex justify-center text-center items-center text-white py-4 px-6 mx-14 mt-4 rounded-md">
                                Read More
                            </div>
                        </div>
                        <div>
                            <img src = {rect} alt="rect"/>
                        </div>
                </section>

                <Package />
                <Why />
            </section>
        </>
     );
}
 
export default Landing;