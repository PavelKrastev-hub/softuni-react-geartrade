import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Logout() {
    const { logoutHandler } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        logoutHandler()
            .catch(() => {
                alert('Problem with logout');
            });
    }, [logoutHandler, navigate]);

    return null;
}
