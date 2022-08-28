import axios from 'axios';

import { IGoal } from '../interfaces/interfaces';
import { IUser } from '../store/features/user/slice';
import { ILoginDto } from '../store/features/user/sagas';

export const apiClient = axios.create();

const API_DOMAIN = 'http://localhost:8428';

export const ApiRoute = {
    goals: `${API_DOMAIN}/api/goals`,
    feedbacks: `${API_DOMAIN}/api/feedbacks`,
};

class Api {
    static async fetchGoals(): Promise<IGoal[]> {
        try {
            const { data } = await apiClient.get<IGoal[]>(ApiRoute.goals);
            return data;
        } catch (e) {
            console.error(e);
            throw Error('An error occurred while fetching your yearly goals. Try refreshing the page or drop us a message.');
        }
    }

    static async login({ email, password }: ILoginDto): Promise<IUser> {
        try {
            // const { data } = await apiClient.get<IGoal[]>(ApiRoute.goals);
            const data = {
                id: '1',
                name: 'Vanya',
                email: 'hi@nefagin.ru',
            };
            return data;
        } catch (e) {
            console.error(e);
            throw Error('An error occurred while login. Try refreshing the page or drop us a message.');
        }
    }

    static async sendFeedback(dto: IFeedbackDto): Promise<void> {
        try {
            await apiClient.post(ApiRoute.feedbacks, {
                ...dto,
                createdAt: Date.now(),
            });
        } catch (e) {
            console.error(e);
            throw Error('An error occurred while sending your feedback. Try refreshing the page.');
        }
    }

    static async createGoal(dto: IGoalDto): Promise<IGoal> {
        try {
            const response = await apiClient.post<IGoal>(ApiRoute.goals, {
                ...dto,
                isCompleted: false,
                amount: dto.amountTarget ? 0 : undefined,
                notes: [],
            });

            return response.data;
        } catch (e) {
            console.error(e);
            throw Error('An error occurred while creating a new goal. Try refreshing the page or drop us a message.');
        }
    }
}

export interface IFeedbackDto {
    email: string;
    message: string;
    name: string;
    userId: string;
}

export interface IGoalDto {
    title: string;
    type: string;
    amountTarget?: string;
    description: string;
    userId: string;
}

export default Api;
