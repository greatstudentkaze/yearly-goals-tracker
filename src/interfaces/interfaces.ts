export interface IGoal {
    id: string;
    title: string;
    isCompleted: boolean;
    description?: string;
    amountTarget?: number;
    amount?: number;
    notes?: IGoalNote[];
}

interface IGoalNote {
    text: string;
    createdAt: Date;
}
