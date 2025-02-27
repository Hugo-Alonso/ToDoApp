import { useState } from "react";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState("");

    const onSubmit = (event) => {
        event.preventDefault(); // Prevenir la recarga de la página

        if (description.trim() === "") return; // Evitar tareas vacías

        setTasks([...tasks, { id: Date.now(), done: false, description }]);
        setDescription(""); // Limpiar el input

        console.log(tasks);
    };

    return (
        <div>
            <section>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.description}</li>
                    ))}
                </ul>
            </section>
            <section>
                <form onSubmit={onSubmit}>
                    <label htmlFor="task">Insert a task: </label>
                    <input
                        id="input-task"
                        name="task"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="submit">Insert</button>
                </form>
            </section>
        </div>
    );
};

export default App;