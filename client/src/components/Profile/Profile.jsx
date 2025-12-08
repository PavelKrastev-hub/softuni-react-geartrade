import { Link, useParams } from "react-router";
import "../../../public/styles/profile.css"
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Profile() {
    const { user } = useUserContext();
    const { userId } = useParams();

    return (
        <section className="profile-wrapper">
            <div className="profile-container">

                <div className="profile-header">
                    <img
                        src={"/images/defaultUser.png"}
                        alt="user avatar"
                        className="profile-avatar"
                    />
                    <div>
                        <h2 className="profile-name">Peter</h2>
                        <p className="profile-role">Regular User</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>Personal Information</h3>
                    <div className="profile-grid">
                        <p><strong>Full Name:</strong> {user.fullName || "—"}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone || "—"}</p>
                        <p><strong>City:</strong> {user.city || "—"}</p>
                        <p><strong>Country:</strong> {user.country || "—"}</p>
                        <p><strong>Address:</strong> {user.address || "—"}</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>Account Details</h3>
                    <div className="profile-grid">
                        <p><strong>User ID:</strong> {user._id}</p>
                        <p><strong>Username:</strong> {user.username}</p>
                        <p><strong>Created On:</strong> {new Date(user._createdOn).toLocaleString()}</p>
                        <p><strong>Last Login:</strong> {user.lastLogin || "—"}</p>
                        <p><strong>Status:</strong> {user.status || "Active"}</p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3>Activity</h3>
                    <div className="profile-grid">
                        <p><strong>Published Parts:</strong> {user.partsCount || 0}</p>
                        <p><strong>Orders:</strong> {user.ordersCount || 0}</p>
                        <p><strong>Wishlist Items:</strong> {user.wishlistCount || 0}</p>
                    </div>
                </div>

                <div className="profile-actions">
                    <Link to={`/users/${userId}/edit`} className="profile-btn profile-btn-edit">
                        Edit Profile
                        <span className="profile-btn-border"></span>
                    </Link>

                    <button className="profile-btn profile-btn-delete">
                        Delete Account
                        <span className="profile-btn-border"></span>
                    </button>
                </div>
            </div>
        </section>
    );
}