
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Todo = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">

            <section>
                <div>
                    <h1 className="text-center card card-title mb-3 text-pink-600 text-4xl font-semibold">My Todos</h1>
                </div>

                <div className="w-[500px] bg-pink-600 px-10 py-5 rounded">

                    <div className="addInputs relative">
                        <input className="w-[80%] h-[40px] rounded outline-green-500 font-semibold text-purple-700 " type="text" name="" id="" />
                        <button className="flex items-center text-xl absolute top-[5px] right-[-3%] btn btn-sm  bg-blue-900"><span><IoMdAddCircle /></span>New</button>
                    </div>

                    <div className="showItems w-[80%] mt-5 mb-5">
                        <ul className="space-y-3 relative">

                            <li className="bg-purple-900 p-2 rounded text-pink-300 font-bold">Hello</li>

                            <button className="text-purple-700 btn btn-sm absolute top-[-8px] right-12"><RiDeleteBin6Line /></button>

                            <button className="text-purple-700 btn btn-sm absolute top-[-8px] right-0"><FaEdit /></button>




                        </ul>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Todo;