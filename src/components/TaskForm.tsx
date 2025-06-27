import { useEffect, useState } from "react";
import type { Task, Category } from "../types/task";
import { Pencil, PlusCircle } from "lucide-react";

interface Props {
    onSubmit: (task: Omit<Task, "id" | "done">) => void;
    editingTask: Task | null;
    onCancelEdit: () => void;
}

function TaskForm({ onSubmit, editingTask, onCancelEdit }: Props) {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState<Category>("Travail");
    const [dueDate, setDueDate] = useState("");

    useEffect(() => {
        if (editingTask) {
            setDescription(editingTask.description);
            setCategory(editingTask.category);
            setDueDate(editingTask.dueDate || "");
        } else {
            const today = new Date().toISOString().split("T")[0];
            setDueDate(today);
            setDescription("");
            setCategory("Travail");
        }
    }, [editingTask]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description.trim()) return;
        onSubmit({ description, category, dueDate });
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div
                className={`form-header ${
                    editingTask ? "edit-banner" : "add-banner"
                }`}
            >
                <div className="form-header-content">
                    {editingTask ? (
                        <>
                            <Pencil size={18} />
                            <span>Modification d’une tâche</span>
                        </>
                    ) : (
                        <>
                            <PlusCircle size={18} />
                            <span>Ajouter une nouvelle tâche</span>
                        </>
                    )}
                </div>

                {editingTask && (
                    <button
                        type="button"
                        className="cancel-edit-btn"
                        onClick={onCancelEdit}
                    >
                        Annuler
                    </button>
                )}
            </div>

            <input
                type="text"
                placeholder="Nouvelle tâche"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
            >
                <option value="Travail">Travail</option>
                <option value="Personnel">Personnel</option>
                <option value="Urgent">Urgent</option>
            </select>

            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />

            <button type="submit">
                {editingTask ? "Modifier" : "Ajouter"}
            </button>
        </form>
    );
}

export default TaskForm;
