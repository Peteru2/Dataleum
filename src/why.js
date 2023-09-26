import Email from "./mail.svg"
import Facebook from "./facebook.svg"
import Instagram from "./instagram.svg"
import Twitter from "./twitter.svg"
import Call from "./call.svg"
const Why = () => {
    return ( 
        <>
                <section className="bg-blue-500 py-10">
                    <div className="grid grid-cols-2 text-white px-52 gap-52 ">
                        <div>
                            <h3 className="text-5xl font-bold mb-8">Why Us</h3>
                            <p className="text-white">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet ipsam nobis vero autem inventore repellat commodi perspiciatis saepe dolorum ut repudiandae asperiores voluptates, id deleniti praesentium optio quasi dicta. Lorem ipsum dolor, sit amet consectetur adipisicing "
                            </p>
                           
                            <button className="bg-white px-16 py-3 text-blue-500 rounded-lg mt-6  ">Read More</button>
                           
                        </div>

                        <div>
                            <h3 className="text-5xl font-bold mb-8">Why Us</h3>
                            <p className="text-white">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias amet ipsam nobis vero autem inventore repellat commodi perspiciatis saepe dolorum ut repudiandae asperiores voluptates, id deleniti praesentium optio quasi dicta. Lorem ipsum dolor, sit amet consectetur adipisicing "
                            </p>
                          
                            
                            <button className="bg-white px-16 py-3 text-blue-500 rounded-lg mt-6  ">Read More</button>
                           
                        </div>
                    </div>
                </section>
                <section>
                    <div className = "grid grid-cols-2 px-52 gap-52 mt-10">
                            <div >
                                    <h2 className="text-3xl mb-5">
                                        About Dataleum
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum at reiciendis placeat fugit in dolor quas repellat neque. Possimus ut perspiciatis dolorum temporibus quaerat. Velit repellendus ipsam amet! Ab, voluptas. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur rerum nam neque velit alias et dolore est vel maiores, suscipit quibusdam, quos in doloribus rem voluptatum repudiandae, labore laborum quod?
                                    </p>
                            </div>
                            <div>
                            <h2 className="text-3xl mb-5">
                                        Contact Us
                             </h2>
                             <div>
                                <p className="flex mb-3"><img src={Email} alt="email" className="w-6 mr-3"/><span>dataleaum@gmail.com</span></p>
                                <p className="flex mb-3"><img src={Facebook} alt="facebook" className="w-6 mr-3"/><span>dataleaum</span></p>
                                <p className="flex mb-3"><img src={Instagram} alt="instagram" className="w-6 mr-3"/><span>dataleaum</span></p>
                                <p className="flex mb-3"><img src={Twitter} alt="twitter" className="w-6 mr-3"/><span>dataleaum</span></p>
                                <p className="flex "><img src={Call} alt="call" className="w-6 mr-3"/><span>+234 80 340 894 780</span></p>

                                <p className="flex  ml-9"><span>+234 80 340 894 780</span></p>
                                <p className="flex  ml-9"><span>+234 80 340 894 780</span></p>



                             </div>
                            </div>
                    </div>
                </section>
        </>
     );
}
 
export default Why;