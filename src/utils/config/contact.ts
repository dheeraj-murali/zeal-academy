export const contact: {
	title: string;
	text: string;
	background: string;
} & ContactListProps = {
	title: `Let's talk`,
	text: `Ask us anything or just say Hi...`,
	background: `linear-gradient(180deg, rgb(41, 216, 119) 0%, rgb(51,51,51) 100%`,
	contactList: [
		{
			type: 'mail',
			contacts: ['info@fakemail.com', 'fakemail@gmail.com'],
		},
		{
			type: 'tel',
			contacts: ['0473 9563728', '+91 9846251481'],
		},
	],
};
