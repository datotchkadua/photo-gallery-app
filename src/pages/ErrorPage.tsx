import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();

  return (
    <div className="min-h-screen text-center flex flex-col items-center justify-center">
      <img
        src={img}
        className="w-[90vw] max-w-[600px] block mb-8 mt-[-48px]"
        alt="not found"
      />
      <h2 className="mb-0.5 text-2xl">
        {` ${(error as { status?: number })?.status}`}
        {` ${(error as { statusText?: string })?.statusText} !`}
      </h2>

      <Link to="/" className="text-[#10b981] uppercase">
        back home
      </Link>
    </div>
  );
};

export default ErrorPage;
