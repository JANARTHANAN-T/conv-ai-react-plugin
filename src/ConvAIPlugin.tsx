import { useEffect, useRef } from 'react';

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

export const ConvAIPlugin = ({ agentId, buttonPosition = 'bottom-right', theme = {} }: ConvAIProps) => {
  const pluginRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/JANARTHANAN-T/conv-ai-plugin@0.0.4/conv-ai-plugin.min.js";
    script.async = true;
    script.onload = () => {
      if (window.ConvAIPlugin) {
        pluginRef.current = new window.ConvAIPlugin({
          agentId,
          buttonPosition,
          theme,
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (pluginRef.current?.destroy) {
        pluginRef.current.destroy();
      }
    };
  }, [agentId, buttonPosition, JSON.stringify(theme)]);

  return null; // nothing is rendered by React directly
};
