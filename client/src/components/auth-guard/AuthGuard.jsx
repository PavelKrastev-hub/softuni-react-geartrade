import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function AuthGuard() {
    const { isAuthenticated } = useUserContext();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}