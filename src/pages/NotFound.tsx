import { Frown, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center p-6">
      <div className="mb-6">
        <Frown className="w-16 h-16 text-gray-400 animate-bounce" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Uh-oh! We couldn’t find what you were looking for. Maybe the doctor moved it?
      </p>
      <div className="mb-4 flex items-center justify-center gap-2 text-blue-500">
        <Stethoscope className="w-5 h-5" />
        <span className="text-sm font-medium">Doctor on call... but not this page!</span>
      </div>
      <button
        onClick={() => navigate("/")}
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-dark rounded shadow hover:bg-blue-700 transition"
      >
        Go Back to Dashboard
      </button>
    </div>
  );
}
