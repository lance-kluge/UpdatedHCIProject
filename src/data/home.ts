export type ThreadStatus = 'red' | 'orange' | 'green';
export type ThreadCategory = 'Homeworks' | 'Exams' | 'Projects' | 'General';
export type InstructorNotifyState = 'notified' | 'scheduled' | 'not-notified';

export interface ThreadMock {
	id: string;
	status: ThreadStatus;
	category: ThreadCategory;
	statusLabel: string;
	title: string;
	aiSummary: string;
	href?: string;
	footerLabel?: string;
	instructorNotifyState?: InstructorNotifyState;
	instructorNotifyInHours?: number;
}

export const mockThreads: ThreadMock[] = [
	{
		id: 'thread-red',
		status: 'red',
		category: 'Homeworks',
		statusLabel: '[3 days unanswered]',
		title: 'Homework 2 Clarification',
		aiSummary: 'AI Summary: Multiple classmates are blocked on rubric wording and need instructor clarification.',
		instructorNotifyState: 'notified'
	},
	{
		id: 'thread-green',
		status: 'green',
		category: 'Projects',
		statusLabel: '[Replied 2 hours ago]',
		title: 'Project 1 Discussion',
		aiSummary: 'AI Summary: Team setup questions were answered and next steps are now clear for implementation.',
		instructorNotifyState: 'not-notified'
	},
	{
		id: 'thread-orange',
		status: 'orange',
		category: 'Exams',
		statusLabel: '[1 day unanswered]',
		title: 'Exam 1 Study Guide',
		aiSummary: 'AI Summary: Students are requesting confirmation on covered topics and priority review areas.',
		instructorNotifyState: 'scheduled',
		instructorNotifyInHours: 24
	},
	{
		id: 'thread-homework-1',
		status: 'orange',
		category: 'Homeworks',
		statusLabel: '[14 hours unanswered]',
		title: 'Homework 3 Submission Format',
		aiSummary: 'AI Summary: Students need confirmation about PDF naming and late-upload policy.',
		instructorNotifyState: 'scheduled',
		instructorNotifyInHours: 10
	},
	{
		id: 'thread-homework-2',
		status: 'green',
		category: 'Homeworks',
		statusLabel: '[Replied 30 minutes ago]',
		title: 'Homework 4 Collaboration Rules',
		aiSummary: 'AI Summary: TA clarified what collaboration is allowed and what must be individual.',
		instructorNotifyState: 'not-notified'
	},
	{
		id: 'thread-homework-3',
		status: 'red',
		category: 'Homeworks',
		statusLabel: '[4 days unanswered]',
		title: 'Homework 1 Autograder Failure',
		aiSummary: 'AI Summary: Multiple students report failing tests despite matching expected output.',
		href: '/threads/homework-1-autograder-failure/',
		instructorNotifyState: 'notified'
	},
	{
		id: 'thread-exam-1',
		status: 'green',
		category: 'Exams',
		statusLabel: '[Replied 5 hours ago]',
		title: 'Exam 1 Practice Questions',
		aiSummary: 'AI Summary: Instructor shared guidance on which topics are highest priority to review.',
		instructorNotifyState: 'not-notified'
	},
	{
		id: 'thread-exam-2',
		status: 'orange',
		category: 'Exams',
		statusLabel: '[22 hours unanswered]',
		title: 'Exam 2 Formula Sheet',
		aiSummary: 'AI Summary: Students are requesting clear constraints for allowed reference materials.',
		instructorNotifyState: 'scheduled',
		instructorNotifyInHours: 2
	},
	{
		id: 'thread-exam-3',
		status: 'red',
		category: 'Exams',
		statusLabel: '[3 days unanswered]',
		title: 'Exam Conflict Request',
		aiSummary: 'AI Summary: Time-conflict accommodation requests are pending confirmation.',
		instructorNotifyState: 'notified'
	},
	{
		id: 'thread-project-1',
		status: 'orange',
		category: 'Projects',
		statusLabel: '[1 day unanswered]',
		title: 'Project 2 Scope Check',
		aiSummary: 'AI Summary: Teams want validation that their project scope meets assignment expectations.',
		instructorNotifyState: 'scheduled',
		instructorNotifyInHours: 24
	},
	{
		id: 'thread-project-2',
		status: 'green',
		category: 'Projects',
		statusLabel: '[Replied 1 hour ago]',
		title: 'Project Demo Rubric',
		aiSummary: 'AI Summary: Grading categories were clarified, including demo and write-up weighting.',
		instructorNotifyState: 'not-notified'
	},
	{
		id: 'thread-project-3',
		status: 'red',
		category: 'Projects',
		statusLabel: '[5 days unanswered]',
		title: 'Project Repository Access',
		aiSummary: 'AI Summary: Some teams cannot access required repos and are blocked from starting work.',
		instructorNotifyState: 'notified'
	},
	{
		id: 'thread-general-1',
		status: 'green',
		category: 'General',
		statusLabel: '[Replied 3 hours ago]',
		title: 'Office Hours Schedule',
		aiSummary: 'AI Summary: Updated office hour times were posted and confirmed for next week.',
		instructorNotifyState: 'not-notified'
	},
	{
		id: 'thread-general-2',
		status: 'orange',
		category: 'General',
		statusLabel: '[10 hours unanswered]',
		title: 'Lecture Recording Access',
		aiSummary: 'AI Summary: Students report intermittent access issues with the latest lecture upload.',
		instructorNotifyState: 'scheduled',
		instructorNotifyInHours: 14
	},
	{
		id: 'thread-general-3',
		status: 'red',
		category: 'General',
		statusLabel: '[6 days unanswered]',
		title: 'Waitlist Enrollment Question',
		aiSummary: 'AI Summary: Waitlisted students are asking when enrollment decisions will be finalized.',
		instructorNotifyState: 'notified'
	}
];
