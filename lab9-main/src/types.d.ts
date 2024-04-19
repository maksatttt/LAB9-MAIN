export interface Task {
    id: number | string;
    title: string;
    date: string;
    status: 'opened' | 'completed';
 }
 