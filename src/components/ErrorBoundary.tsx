import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-[#10173f] text-white">
          <div className="flex flex-col items-center w-full max-w-2xl p-8 bg-white/5 border border-white/10 rounded-2xl">
            <AlertTriangle
              size={48}
              className="text-[#f26522] mb-6 flex-shrink-0"
            />
            <h2 className="text-xl mb-4 font-bold font-['Space_Grotesk']">Ocorreu um erro inesperado</h2>
            <div className="p-4 w-full rounded bg-black/40 overflow-auto mb-6">
              <pre className="text-xs text-white/70 whitespace-break-spaces">
                {this.state.error?.stack}
              </pre>
            </div>
            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-lg",
                "bg-[#f26522] text-white font-medium hover:bg-[#ff7330]",
                "cursor-pointer transition-colors"
              )}
            >
              <RotateCcw size={16} />
              Recarregar página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
