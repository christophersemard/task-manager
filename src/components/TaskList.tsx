import type { Task } from "../types/task";
import { Pencil, Trash2, CheckCircle, Circle, Clock } from "lucide-react";

interface Props {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onRequestDelete: (task: Task) => void;
    onToggleDone: (id: number) => void;
}

function TaskList({ tasks, onEdit, onRequestDelete, onToggleDone }: Props) {
    if (tasks.length === 0) {
        return <p className="empty">Aucune tâche à afficher.</p>;
    }

    return (
        <div className="task-grid">
            {tasks.map((task) => {
                const dateFormatted = task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                      })
                    : "";

                return (
                    <div
                        key={task.id}
                        className={`task-card ${task.category.toLowerCase()} ${
                            task.done ? "done" : ""
                        }`}
                    >
                        <div className="left-border"></div>
                        <div className="task-content">
                            <div className="top">
                                <span
                                    className={`badge ${task.category.toLowerCase()}`}
                                >
                                    {task.category}
                                </span>
                                <button
                                    className="done-btn"
                                    onClick={() => onToggleDone(task.id)}
                                    title="Marquer comme terminée"
                                >
                                    {task.done ? (
                                        <CheckCircle size={18} />
                                    ) : (
                                        <Circle size={18} />
                                    )}
                                </button>
                            </div>

                            <h3>{task.description}</h3>

                            {task.dueDate && (
                                <small className="flex">
                                    <Clock size={14} /> {dateFormatted}
                                </small>
                            )}

                            <div className="actions">
                                <button
                                    onClick={() => onEdit(task)}
                                    className="edit"
                                >
                                    <Pencil size={16} /> Modifier
                                </button>
                                <button
                                    className="delete"
                                    onClick={() => onRequestDelete(task)}
                                >
                                    <Trash2 size={16} />
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TaskList;
