export type Category = "Travail" | "Personnel" | "Urgent";
export type CategoryFilter = Category | "Toutes";
export type StatusFilter = "Toutes" | "À faire" | "Terminées";

export interface Task {
    id: number;
    description: string;
    category: Category;
    dueDate?: string;
    done: boolean;
}

export const initialTasks: Task[] = [
    {
        id: 1,
        description: "Préparer la réunion de lundi",
        category: "Travail",
        dueDate: "2025-07-01",
        done: false,
    },
    {
        id: 2,
        description: "Aller à la salle de sport",
        category: "Personnel",
        dueDate: "2025-06-28",
        done: true,
    },
    {
        id: 3,
        description: "Rappeler le dentiste",
        category: "Urgent",
        dueDate: "2025-06-27",
        done: false,
    },
];
