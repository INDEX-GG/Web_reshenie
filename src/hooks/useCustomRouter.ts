import { useNavigate } from "react-router-dom";

export const useCustomRouter = () => {
  const navigate = useNavigate();

  const handlePushTo = (location: string, replace = false) => {
    const prevSlash = location[0] === "/" ? "" : "/";
    return () => {
      navigate(`${prevSlash}${location}`, { replace });
    };
  };

  return {
    navigate,
    handlePushTo,
  };
};
