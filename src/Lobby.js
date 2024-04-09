import React from "react";

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  tokenName,
  handleTokenNameChange,
  handleSubmit,
  connecting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          required
        />
      </div>

      <div>
        <label htmlFor="room">Room name:</label>
        <input
          type="text"
          id="room"
          className="form-control"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          required
        />
      </div>
      <div>
        <label htmlFor="room">Access Token:</label>
        <textarea
        rows={5}
        className="form-control"
          type="text"
          id="token"
          value={tokenName}
          onChange={handleTokenNameChange}
          readOnly={connecting}
          required
        />
      </div>
    <br/>
      <button className="btn btn-success" type="submit" disabled={connecting}>
        {connecting ? "Connecting" : "Join"}
      </button>
    </form>
  );
};

export default Lobby;
