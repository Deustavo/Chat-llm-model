import { create } from "zustand";

interface AgentApiKeyProps {
    apiKey: string | undefined,
    setAPIKey: (apiKey: string) => void
};

const initialApiState = undefined;

export const useAgentApiKeyProps = create<AgentApiKeyProps>((set) => ({
    apiKey: initialApiState,
    setAPIKey: async (key) => set({ apiKey: key })
}));