import { create } from "zustand";
import store from "store2";

export interface UseInvestorProfileProps {
    questionnaire: Questionnaire[],
    currentQuestion: number,
    setCurrentQuestion: (payload: number) => void,
    answers: [],
    setAnswers: (payload: { id: string, answer: string }) => void,
};

type Questionnaire = {
    id: string,
    question: string,
    options: string[]
};

const questionnaire = [
    {
        id: '1',
        question: 'Qual a sua experiencia com investimentos?',
        options: [
            'Nunca fiz um investimento',
            'Já fiz alguns investimentos',
            'Sou um investidor experiente'
        ]
    },
    {
        id: '2',
        question: 'Pergunta 2',
        options: [
            'Opção A',
            'Opção B',
            'Opção C'
        ]
    },
    {
        id: '3',
        question: 'Pergunta 3',
        options: [
            'Opção A',
            'Opção B',
            'Opção C'
        ]
    },
    {
        id: '4',
        question: 'Pergunta 4',
        options: [
            'Opção A',
            'Opção B',
            'Opção C'
        ]
    },
    {
        id: '5',
        question: 'Pergunta 5',
        options: [
            'Opção A',
            'Opção B',
            'Opção C'
        ]
    },
];

export const useInvestorProfile = create<UseInvestorProfileProps>((set) => ({
    questionnaire,
    currentQuestion: 0,
    setCurrentQuestion: (payload: number) => set(() => ({ currentQuestion: payload })),
    answers: [],
    setAnswers: (payload: { id: string, answer: string }) => {
    },
}));
