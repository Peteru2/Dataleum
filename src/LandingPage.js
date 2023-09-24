import "./style.css"
import access from "./accessSvg.svg"
import rect from "./Rectangle.png"
const Landing = () => {
    return ( 
        <>
            <section>
                <section className="grid grid-cols-2 gap-3 mt-20 px-32">
                        <div className="mt-14">
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
                <section className="bg-gray-100 grid grid-cols-2 flex py-14">
                        <div className="m-auto text-center justify-center">
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
            </section>
        </>
     );
}
 
export default Landing;