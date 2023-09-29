import Navbar from "./Navbar";

const Dashboard = () => {
    return ( 
        <>
            <Navbar />
            <section className="px-16 mt-32">
                <h4 className="text-gray-500 font-bold text-2xl">My Dashboard</h4>

                <p className="text-gray-700 mt-8">Data Network Transaction</p>


                <div className=" justify-center  mt-6">
                    <div className="flex justify-center flex-wrap dashPlan">                   
                    <div className=" bg-white shadow-lg w-96 h-50  rounded-lg py-8 px-14 mx-4 my-4">
                        <h2 className="font-bold text-3xl mb-10 text-center">MTN</h2>
                        <div className="flex justify-center">
                        <div className="bg-yellow-400 w-10 h-10 rounded-full"></div>
                        </div>
                        <div className="w-full">
                        <p className="ml-28 mt-6 font-bold text-sm">View all >>></p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg w-96  h-50 rounded-lg py-8 px-14 mx-4 my-4">
                        <h2 className="font-bold text-3xl mb-10 text-center">GLO</h2>
                        <div className="flex justify-center">
                        <div className="bg-green-200 w-10 h-10 rounded-full"></div>
                        </div>
                        <div className="w-full">
                        <p className="ml-28 mt-6 font-bold text-sm">View all >>></p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg w-96 h-50   rounded-lg py-8 px-14 mx-4 my-4">
                        <h2 className="font-bold text-3xl mb-10 text-center">AIRTEL</h2>
                        <div className="flex justify-center">
                        <div className="bg-red-200 w-10 h-10 rounded-full"></div>
                        </div>
                        <div className="w-full">
                        <p className="ml-28 mt-6 font-bold text-sm">View all >>></p>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="mt-20">
                    <p>
                        <span className="font-bold mr-6 text-2xl">All Transaction</span>
                         <span className="text-gray-400 font-bold mr-6 text-2xl">Succesful</span>
                         <span  className="text-gray-400 font-bold  text-2xl">Failed</span>
                    </p>
                    <div className="mt-5 allTransaction  overflow-x-scroll">
                        <div className="flex justify-between my-2  border-4 items-center p-2 px-4 ">
                            <div className="w-4 h-4 rounded-full bg-green-300 "></div>
                            <p className="text-xs font-bold">August 8th, 2023 02:45pm</p>
                            <p className="text-xs font-bold text-center">1023785489</p>
                            <p className="text-xs font-bold ">Peters Simon</p>
                            <p className="text-xs font-bold">Palmpay, Microfinace Bank</p>
                            <p className="text-xs font-bold">5 GIG</p>
                            <p className="text-xs font-bold bg-red-600 rounded-md px-6 text-white py-2">Error</p>
                            <p className="text-xs font-bold">N2500</p>
                        </div>

                        <div className="flex justify-between my-2  border-4 items-center p-2 px-4">
                            <div className="w-4 h-4 rounded-full bg-green-300"></div>
                            <p className="text-xs font-bold">August 8th, 2023 02:45pm</p>
                            <p className="text-xs font-bold text-center">1023785489</p>
                            <p className="text-xs font-bold ">Peters Simon</p>
                            <p className="text-xs font-bold">Palmpay, Microfinace Bank</p>
                            <p className="text-xs font-bold">5 GIG</p>
                            <p className="text-xs font-bold bg-red-600 rounded-md px-6 text-white py-2">Error</p>
                            <p className="text-xs font-bold">N2500</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Dashboard;