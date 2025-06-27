import { X } from "lucide-react";

interface Props {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    taskName: string;
}

export default function DeleteModal({
    open,
    onClose,
    onConfirm,
    taskName,
}: Props) {
    if (!open) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    <X size={20} />
                </button>
                <h2>Supprimer la tâche</h2>
                <p>
                    Es-tu sûr de vouloir supprimer <strong>{taskName}</strong> ?
                </p>
                <div className="modal-actions">
                    <button className="cancel" onClick={onClose}>
                        Annuler
                    </button>
                    <button className="confirm" onClick={onConfirm}>
                        Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
}
