declare interface NavProps {
	links: {
		link: string;
		text: string;
	}[];
	phone?: string;
}

declare interface ButtonProps {
	text: string;
	isDisabled?: boolean;
	loader?: boolean;
}

declare interface InputProps {
	placeholder: string;
	id: string;
	message?: string;
	type?: string;
	value: string;
	onChangeFn: CallableFunction;
	onBlurFn?: CallableFunction;
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
		job: string;
		message: string;
		photo: string;
	};
}

declare interface TeamCardProps {
	person: {
		name: string;
		qualification: string;
		role: string;
		highlight?: boolean;
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

declare interface ContactFormData {
	email: string;
	name: string;
	message: string;
}

declare interface ScrollProps {
	leftClickFn: () => void;
	rightClickFn: () => void;
}
