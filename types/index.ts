export type Stage = 'Applied' | 'Shortlisted' | 'Interview Booked' | 'Interviewed' | 'Hired' | 'Rejected';
export type Candidate = { id: string; name: string; email: string; position: string; date: string; stage: Stage; color: string; notes: string; activity: string[]; booking?: string; lastBooking?: string; interviewStatus?: 'Upcoming' | 'Completed' | 'Cancelled' | 'Rescheduled'; interviewer: string };
export type Position = { id: string; title: string; department: string; location: string; status: 'Open' | 'Closed'; color: string };
export type DayRule = { enabled: boolean; ranges: { start: string; end: string }[] };
