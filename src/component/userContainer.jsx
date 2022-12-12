import React, { useEffect } from "react";
import { feachUser } from "../redux";
import { connect } from "react-redux";

function userContainer({ userData, feachUser }) {
  useEffect(() => {
    feachUser();
  }, []);
  console.log(userData);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{useData.error}</h2>
  ) : (
    <div>
      <h2> user List</h2>
      {userData &&
        userData.user &&
        userData.user.map((user) => <p key={user.name}>{user.name}</p>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    feachUser: () => dispatch(feachUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userContainer);
