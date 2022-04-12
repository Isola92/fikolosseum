export const playerLogIn = (playerAuth) => {
	return async () => {
		try {
			await fetch('/authentication/1', {
				method: 'PUT',
				headers: {
					playerName: playerAuth.playerName,
				},
			}).then((response) => {
				if (resp.status == 200 || resp.status == 201) {
				}
			});
		} catch (error) {}
	};
};

export const playerLogOut = () => {
	return async () => {
		try {
			await fetch('/room/{roomId}/log-out', {
				method: 'PUT',
			}).then((response) => {
				if (resp.status == 200 || resp.status == 201) {
				}
			});
		} catch (error) {}
	};
};
