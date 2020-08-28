export const encode = (data: { [key: string]: string }) => {
	return Object.keys(data)
		.map(
			(key) =>
				encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
		)
		.join('&');
};
