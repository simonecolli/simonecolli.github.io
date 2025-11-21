import { Link } from "react-router-dom";

export default function Back2Home() {
    return (
        <section className="mt-12 mb-8 text-center flex justify-center">
          <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors back2home flex flex-row items-center gap-2 m-auto">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Home
          </Link>
        </section>
    );
}