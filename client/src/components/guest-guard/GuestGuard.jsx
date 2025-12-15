import { Navigate, Outlet } from "react-router";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function GuestGuard() {
    const { isAuthenticated } = useUserContext();

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}