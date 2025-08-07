export interface ConvAIProps {
    agentId: string;
    buttonPosition?: 'top-left' | 'middle-left' | 'bottom-left' | 'top-middle' | 'center' | 'bottom-middle' | 'top-right' | 'middle-right' | 'bottom-right';
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
