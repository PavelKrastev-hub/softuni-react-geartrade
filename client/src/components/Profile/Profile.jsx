import { Link, useParams } from "react-router";
import "../../../public/styles/profile.css"
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Profile() {
    const { user } = useUserContext();
    const { userId } = useParams();
    console.log(user);

    return (
        <section className="profile-simple-wrapper">
            <div className="profile-simple-container">

                <div className="profile-simple-header">
                    <img
                        src={user.imageUrl || "/images/defaultIcon.jpg"}
                        alt="user avatar"
                        className="profile-simple-avatar"
                    />
                    <div className="profile-simple-info">
                        <h2 className="profile-simple-name">@{user.username || "—"}</h2>
                    </div>
                </div>

                <div className="profile-simple-section">
                    <div className="profile-simple-grid">
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Full Name:</strong> {user.fullName || "—"}</p>
                        <p><strong>Country:</strong> {user.country || "—"}</p>
                    </div>
                </div>

                {/* <div className="profile-simple-actions">
                    <Link to={`/users/${userId}/edit`} className="profile-btn profile-btn-edit">
                        Edit Profile
                        <span className="profile-btn-border"></span>
                    </Link>
                </div> */}

            </div>
        </section>
    );
}