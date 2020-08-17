declare interface ButtonProps {
	text: string;
}

declare interface InputProps {
	placeholder: string;
	id: string;
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
