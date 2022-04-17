export const playerLogIn = async (playerAuth) => {
  try {
    await fetch("/authentication/1", {
      method: "PUT",
      headers: {
        playerName: playerAuth.playerName,
      },
    }).then((response) => {
      if (response.status == 200 || response.status == 201) {
        return response.json();
      }
    });
  } catch (error) {}
};

export const playerLogOut = () => {
  return async () => {
    try {
      await fetch("/room/{roomId}/log-out", {
        method: "PUT",
      }).then((response) => {
        if (response.status == 200 || response.status == 201) {
          return response.json();
        }
      });
    } catch (error) {}
  };
};
