import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import "./DisplayData.css"

const UsersJsonDisplay = () => {
    // Assuming you have stored user data in Redux state
    const users = useSelector((state: RootState) => state.user.users);

    return (
        <div className="text-display">
            <h1>User Data (JSON Format)</h1>
            <pre>{JSON.stringify(users[users.length - 1], null, 2)}</pre>
        </div>
    );
};

export default UsersJsonDisplay;
