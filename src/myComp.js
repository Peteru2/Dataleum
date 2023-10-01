const MyComponent = () => {
    return ( 

        <>
        <section  className=" bg-gray-100 grid grid-cols-2 flex py-14">
                        <div id="delayed-element" className="m-auto text-center opacity-1 justify-center">
                            <h4 className="font-bold text-5xl  text-center ">
                                WHAT WE DO
                            </h4>
                            <div className="bg-blue-400 flex justify-center text-center items-center text-white py-4 px-6 mx-14 mt-4 rounded-md">
                                Read More
                            </div>
                        </div>
                        <div>
                            {/* <img src = {rect} alt="rect"/> */}
                        </div>
                </section>
        </>
     );
}
 
export default MyComponent;