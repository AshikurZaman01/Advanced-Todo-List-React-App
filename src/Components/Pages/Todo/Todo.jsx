
import { IoMdAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    const handleAddInput = () => {

        if (title.trim() === "") {
            alert("Please enter a task");
        } else {
            const newTodos = {
                "title": title,
                "status": "pending"
            }
            setTodos([...todos, newTodos]);
            setTitle('');
        }




    }

    const handleDeleteTodo = (id) => {
        const deleteTodo = todos.filter((todo, indx) => indx !== id);
        setTodos(deleteTodo);
        if (deleteTodo.length === 0) {
            alert("No more tasks");
        }
    }

    const handleEditTodo = (id) => {
        const editTodo = todos.find((todo, indx) => indx === id);
        setTitle(editTodo.title);
        handleDeleteTodo(id);
    }

    return (
        <div className="flex justify-center items-center min-h-screen">

            <section>
                <div>
                    <h1 className="text-center card card-title mb-3 text-pink-600 text-4xl font-semibold">My Todos</h1>
                </div>

                <div className="w-[500px] bg-pink-600 px-10 py-5 rounded">

                    <div className="addInputs relative">
                        <input value={title} onChange={e => setTitle(e.target.value)} className="w-[80%] h-[40px] rounded outline-green-500 font-semibold text-purple-700 " type="text" name="" id="" />
                        <button onClick={handleAddInput} className="flex items-center text-xl absolute top-[5px] right-[-3%] btn btn-sm  bg-blue-900"><span><IoMdAddCircle /></span>New</button>
                    </div>

                    <div className="showItems w-[80%] mt-5 mb-5">

                        {
                            todos.map((todo, indx) => {
                                return (
                                    <ul key={indx} className="space-y-3 relative">
                                        <span>
                                            <li className="bg-purple-900 p-2 rounded text-pink-300 font-bold mb-2">{todo.title}</li>

                                            <button onClick={() => handleDeleteTodo(indx)} className="text-purple-700 btn btn-sm absolute top-[4px] right-12"><RiDeleteBin6Line /></button>

                                            <button onClick={() => handleEditTodo(indx)} className="text-purple-700 btn btn-sm absolute top-[4px] right-0"><FaEdit /></button>
                                        </span>
                                    </ul>
                                )
                            })
                        }






                    </div>
                </div>

            </section>

        </div>
    );
};

export default Todo;