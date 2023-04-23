import { useEffect } from "react";
import { fetchUser } from "../redux/user/userActions";
import { connect } from "react-redux";

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {userData.loading ? (
        <h6>Loading...</h6>
      ) : userData.error ? (
        <h6>{userData.error}</h6>
      ) : (
        <div>
          <h3>LIST OF USERS</h3>
          <ul>
            {userData &&
              userData.users &&
              userData.users.map(user => (
                <li key={user.id}>{user.firstName}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user
    //loading: state.user.loading,
    //userData: state.user.users,
    //error: state.user.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
