import { useEffect, useState } from "react";
import type { Task, CategoryFilter, StatusFilter } from "./types/task";
import { initialTasks } from "./types/task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import DeleteModal from "./components/DeleteModal";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [filterCategory, setFilterCategory] =
        useState<CategoryFilter>("Toutes");
    const [filterStatus, setFilterStatus] = useState<StatusFilter>("Toutes");
    const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

    useEffect(() => {
        setTasks(initialTasks);
    }, []);

    const addOrUpdateTask = (task: Omit<Task, "id" | "done">) => {
        if (editingTask) {
            setTasks((prev) =>
                prev.map((t) =>
                    t.id === editingTask.id ? { ...t, ...task } : t
                )
            );
            setEditingTask(null);
        } else {
            setTasks((prev) => [
                ...prev,
                { ...task, id: Date.now(), done: false },
            ]);
        }
    };

    const confirmDeleteTask = () => {
        if (taskToDelete) {
            setTasks((prev) =>
                prev.filter((task) => task.id !== taskToDelete.id)
            );
            setTaskToDelete(null);
        }
    };

    const cancelEdit = () => setEditingTask(null);

    const toggleDone = (id: number) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        );
    };

    const filteredTasks = tasks.filter((task) => {
        const matchCategory =
            filterCategory === "Toutes" || task.category === filterCategory;
        const matchStatus =
            filterStatus === "Toutes" ||
            (filterStatus === "Terminées" && task.done) ||
            (filterStatus === "À faire" && !task.done);
        return matchCategory && matchStatus;
    });

    return (
        <main>
            <h1>Gestionnaire de tâches</h1>

            <div className="task-layout">
                <div className="form-section">
                    <TaskForm
                        onSubmit={addOrUpdateTask}
                        editingTask={editingTask}
                        onCancelEdit={cancelEdit}
                    />
                </div>
                <div className="list-section">
                    <section className="filters">
                        <div className="filter-group">
                            {["Toutes", "Travail", "Personnel", "Urgent"].map(
                                (cat) => {
                                    const isActive = filterCategory === cat;
                                    const catClass =
                                        cat === "Travail"
                                            ? "travail"
                                            : cat === "Personnel"
                                            ? "personnel"
                                            : cat === "Urgent"
                                            ? "urgent"
                                            : "";
                                    return (
                                        <button
                                            key={cat}
                                            className={`filter-badge ${catClass} ${
                                                isActive ? "active" : ""
                                            }`}
                                            onClick={() =>
                                                setFilterCategory(
                                                    cat as CategoryFilter
                                                )
                                            }
                                        >
                                            {cat}
                                        </button>
                                    );
                                }
                            )}
                        </div>

                        <div className="filter-group">
                            {["Toutes", "À faire", "Terminées"].map(
                                (status) => {
                                    const isActive = filterStatus === status;
                                    const statusClass =
                                        status === "À faire"
                                            ? "todo"
                                            : status === "Terminées"
                                            ? "done"
                                            : "";
                                    return (
                                        <button
                                            key={status}
                                            className={`filter-badge ${statusClass} ${
                                                isActive ? "active" : ""
                                            }`}
                                            onClick={() =>
                                                setFilterStatus(
                                                    status as StatusFilter
                                                )
                                            }
                                        >
                                            {status}
                                        </button>
                                    );
                                }
                            )}
                        </div>
                    </section>

                    <TaskList
                        tasks={filteredTasks}
                        onEdit={setEditingTask}
                        onRequestDelete={setTaskToDelete}
                        onToggleDone={toggleDone}
                    />
                </div>
            </div>

            <DeleteModal
                open={taskToDelete !== null}
                onClose={() => setTaskToDelete(null)}
                onConfirm={confirmDeleteTask}
                taskName={taskToDelete?.description || ""}
            />
        </main>
    );
}

export default App;
