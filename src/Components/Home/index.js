import { Component } from "react";
import {Link, withRouter} from 'react-router-dom'

class Home extends Component{
    render(){
        return(
            <div className="w-screen h-screen bg-black text-white p-10">
                <h1 className="font-[Poppins] text-3xl font-semibold ml-4">Select a Category</h1>
                <div className="w-full p-3 mt-4 flex flex-row flex-wrap">
                    <Link to={"/play/GeneralKnowledge"}>
                        <div className="w-80 h-40 flex rounded-lg m-2 p-4 bg-red-500 font-[Poppins]">
                            <div className="w-1/2 flex items-center">
                                <h1 className="text-xl">General Knowledge</h1>
                            </div>
                            <div className="w-1/2 flex flex-row justify-center items-center">
                                <img className="w-3/4 " src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1709042545/thought_owh1ms.png"/>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/play/Geography"}>
                        <div className="w-80 h-40 flex rounded-lg m-2 p-4 bg-green-500 font-[Poppins]">
                            <div className="w-1/2 flex items-center">
                                <h1 className="text-xl">Geography</h1>
                            </div>
                            <div className="w-1/2 flex flex-row justify-center items-center">
                                <img className="w-3/4 " src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1709043013/world_hu5aam.png"/>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/play/Animals"}>
                        <div className="w-80 h-40 flex rounded-lg m-2 p-4 bg-yellow-500 font-[Poppins]">
                            <div className="w-1/2 flex items-center">
                                <h1 className="text-xl">Animals</h1>
                            </div>
                            <div className="w-1/2 flex flex-row justify-center items-center">
                                <img className="w-3/4 " src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1709043197/livestock_orblea.png"/>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/play/Science&Nature"}>
                        <div className="w-80 h-40 flex rounded-lg m-2 p-4 bg-blue-500 font-[Poppins]">
                            <div className="w-1/2 flex items-center">
                                <h1 className="text-xl">Science & Nature</h1>
                            </div>
                            <div className="w-1/2 flex flex-row justify-center items-center">
                                <img className="w-3/4 " src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1709043365/science_pugizz.png"/>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/play/Computers"}>
                        <div className="w-80 h-40 flex rounded-lg m-2 p-4 bg-pink-500 font-[Poppins]">
                            <div className="w-1/2 flex items-center">
                                <h1 className="text-xl">Computers</h1>
                            </div>
                            <div className="w-1/2 flex flex-row justify-center items-center">
                                <img className="w-3/4 " src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1709043520/medical-research_jzv1od.png"/>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/play/Mathematics"}>
                        <div className="w-80 h-40 flex rounded-lg m-2 p-4 bg-violet-800 font-[Poppins]">
                            <div className="w-1/2 flex items-center">
                                <h1 className="text-xl">Mathematics</h1>
                            </div>
                            <div className="w-1/2 flex flex-row justify-center items-center">
                                <img className="w-3/4 " src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1709043863/mathematics_phbsdt.png"/>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/play/Gadgets"}>
                        <div className="w-80 h-40 flex rounded-lg m-2 p-4 bg-teal-600 font-[Poppins]">
                            <div className="w-1/2 flex items-center">
                                <h1 className="text-xl">Gadgets</h1>
                            </div>
                            <div className="w-1/2 flex flex-row justify-center items-center">
                                <img className="w-3/4 " src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1709044070/gadgets_elz1if.png"/>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home