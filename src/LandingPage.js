import "./style.css"
import access from "./accessSvg.svg"
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
            </section>
        </>
     );
}
 
export default Landing;