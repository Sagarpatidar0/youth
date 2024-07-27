import PropTypes from "prop-types";

Rank.propTypes = {
  users: PropTypes.func.isRequired,
};

export default function Rank({ users }) {
  return (
    <div id="table_body">
      {users.map((user, idx) => (
        <div key={idx} id="single-rank">
          <div id="idx">#{user.rank}</div>
          <div id="rank-user-profile">
            <img
              src={user.img}
              alt="user"
            />
            <div id="rank-username">{user.username}</div>
          </div>
          <div id="user-accountid">********aUQ8k</div>
          <div id="rank-score">{user.score}</div>
        </div>
      ))}
    </div>
  );
}
