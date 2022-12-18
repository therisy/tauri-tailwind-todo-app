import {useState} from "react";
import Image from "next/image";
import reactLogo from "../assets/react.svg";

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    function handleClick() {
        setTodos([...todos, newTodo]);
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <div className="flex flex-col justify-center p-20">
            <Image src={reactLogo} alt="React Logo" width={64} height={64}/>

            <h1 className="text-3xl mt-4 mb-4">React + Tauri + Next.js + TailwindCSS</h1>

            <div className="flex justify-between mt-2">
                <input
                    id="todo-input"
                    placeholder="Enter a todo"
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="w-full"
                />

                <button className="ml-2" onClick={handleClick}>
                    Create
                </button>
            </div>

            <div className="mt-4">
                <div className="flex flex-col gap-y-4">
                    {todos.map((todo, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <div className="w-24">
                                <span>{todo}</span>
                            </div>

                            <div>
                                <button className="bg-red-600 hover:bg-red-700" onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
