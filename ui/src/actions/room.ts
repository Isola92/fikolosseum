export const setPlayerReadyForNextRound = async () => {
  try {
    return await fetch("/room/1/set-player-ready", {
      method: "PUT",
    }).then((response) => {
      if (response.status == 200 || response.status == 201) {
        return response.json();
      }
    });
  } catch (error) {}
};

export const getRoomStatus = async () => {
  try {
    return await fetch("/room/1/room-status", {
      method: "GET",
    }).then((response) => {
      if (response.status == 200 || response.status == 201) {
        return response.json();
      }
    });
  } catch (error) {}
};
