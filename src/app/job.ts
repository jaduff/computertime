export class Job {
    id: number;
    title: string;
    question: string;
    completed: boolean;

    constructor (id: number, title: string, question: string)
    {
        this.title = title;
        this.question = question;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }
}