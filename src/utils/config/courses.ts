import {
	banner1,
	banner2,
	banner3,
	banner4,
	banner5,
	banner6,
	wave,
} from '../../images';

export const course = {
	title: `Our Popular Courses`,
	text: `We offer the facility of online and classroom coaching
	for major abroad pharmacy exams. We have a proven track
	record and are committed to your success.`,
	background: wave,
	courseList: [
		{
			image: banner1,
			span: 'KAPS Classroom coaching',
			title: 'Knowledge Assessment of Pharmaceutical Sciences',
			description: `5 month training with 75 mock tests and 10 model exams. We take only 10 students in every batch and delivers attention to detail training.`,
		},
		{
			image: banner2,
			span: 'KAPS Online Coaching',
			title: 'Knowledge Assessment of Pharmaceutical Sciences',
			description: `Our instructors coach you with interactive and informative online sessions including mock tests and exams.`,
		},
		{
			image: banner3,
			span: 'PEBC Online coaching',
			title: 'Pharmacy Examining Board of Canada',
			description: `A 6 month program by resourceful staff aiming in delivering excellence with focused and updated lectures.`,
		},
		{
			image: banner4,
			span: 'FPGEE online coaching',
			title: 'Foreign Pharmacy Graduate Equivalency Examination',
			description: `6 month course to perform and excel in FPGEE. We provide evidence based content integrated into your practice questions.`,
		},
		{
			image: banner5,
			span: 'NAPLEX Online coaching',
			title: 'North American Pharmacist Licensure Examination',
			description: `6 month program with online classes and mock tests which supports you in clearing NAPLEX.`,
		},
		{
			image: banner6,
			span: 'APC Intern Written Exam Coaching',
			title: 'Australian Pharmacy Council',
			description: `We also serve to provide helps with Intern Written Exam Online.`,
		},
	],
};
