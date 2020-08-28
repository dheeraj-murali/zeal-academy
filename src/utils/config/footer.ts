export const footer: {
	title: string;
	text: string;
	background: string;
	copyright: string;
	socials: {
		item: 'facebook' | 'twitter' | 'instagram' | 'whatsApp' | 'linkedIn';
		link: string;
	}[];
} = {
	title: 'Connect with us on',
	text: 'A division of upskiinternational pvt ltd.',
	background: `rgb(51,51,51)`,
	copyright: `© COPYRIGHT UPSKI INTERNATIONAL.  ALL RIGHTS RESERVED.`,
	socials: [
		{
			item: 'facebook',
			link: '#',
		},
		{
			item: 'instagram',
			link: '#',
		},
		{
			item: 'linkedIn',
			link: '#',
		},
		{
			item: 'twitter',
			link: '#',
		},
		{
			item: 'whatsApp',
			link: '#',
		},
	],
};
