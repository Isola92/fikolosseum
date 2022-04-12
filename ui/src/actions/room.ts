export const setPlayerReadyForNextRound = () => {
	return async (dispatch) => {
		try {
			await fetch('/room/1/set-player-ready', {
				method: 'PUT',
			}).then((response) => {
				if (resp.status == 200 || resp.status == 201) {
				}
			});
		} catch (error) {}
	};
};

export const getRoomStatus = () => {
	return async (dispatch) => {
		try {
			await fetch('/room/1/room-status', {
				method: 'GET',
			}).then((response) => {
				if (resp.status == 200 || resp.status == 201) {
				}
			});
		} catch (error) {}
	};
};
