import React, { useEffect, useState } from "react";
import Participant from "./Participant";

const Room = ({ roomName, room, handleLogout }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant, index) => (
    <>
      {index === 0 &&
        <>
          <h3>Remote Participants</h3>
          <Participant key={participant.sid} participant={participant} />
        </>
      }
    </>
  ));

  return (
    <div className="room">
      <h2>Room: {roomName}</h2>
      <button className="btn btn-danger" onClick={handleLogout}>Leave</button>
      <div>

        <div className="local-participant">
          {room ? (
            <>
             <h3>local Participants</h3>
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
            />
            </>
          ) : (
            ""
          )}
        </div>
        <div className="remote-participants">{remoteParticipants}</div>
      </div>
    </div>
  );
};

export default Room;
