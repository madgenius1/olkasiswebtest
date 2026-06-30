import { CheckCircle, XCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormAlertProps {
  type: "success" | "error";
  message: string;
  onClose?: () => void;
}

export default function FormAlert({ type, message, onClose }: FormAlertProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-xl border text-sm",
        type === "success"
          ? "bg-green-50 border-green-200 text-green-800"
          : "bg-red-50 border-red-200 text-red-800"
      )}
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
      ) : (
        <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
      )}
      <p className="flex-1 leading-relaxed">{message}</p>
      {onClose && (
        <button onClick={onClose} className="flex-shrink-0 hover:opacity-70 transition-opacity">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
