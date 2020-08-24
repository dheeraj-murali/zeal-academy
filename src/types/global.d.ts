declare interface NavProps {
	links: {
		link: string;
		text: string;
	}[];
	phone?: string;
}

declare interface ButtonProps {
	text: string;
}

declare interface InputProps {
	placeholder: string;
	id: string;
	message?: string;
	type?: string;
	value: string;
	onChangeFn: (string) => void;
}

declare interface InputGroupProps {
	message?: string;
	id: string;
}

declare interface CourseCardProps {
	course: {
		image: string;
		span: string;
		title: string;
		description: string;
	};
}

declare interface CounterProps {
	item: { count: string; label: string };
}

declare interface TestimonialCardProps {
	person: {
		name: string;
		qualification: string;
		message: string;
		photo: string;
	};
}

declare interface TeamCardProps {
	person: {
		name: string;
		qualification: string;
		role: string;
		highlight: boolean;
		message: string;
		photo: string;
	};
}

declare interface ContactListProps {
	contactList: {
		type: 'mail' | 'tel';
		contacts: string[];
	}[];
}

declare interface SocialProps {
	item: 'facebook' | 'twitter' | 'instagram' | 'whatsApp' | 'linkedIn';
	link: string;
}
