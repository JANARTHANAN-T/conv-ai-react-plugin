export interface ConvAIProps {
    agentId: string;
    buttonPosition?: string;
    theme?: {
        primaryColor?: string;
        secondaryColor?: string;
        backgroundColor?: string;
        textColor?: string;
    };
}
declare global {
    interface Window {
        ConvAIPlugin: any;
    }
}
export declare const ConvAIPlugin: ({ agentId, buttonPosition, theme }: ConvAIProps) => null;
