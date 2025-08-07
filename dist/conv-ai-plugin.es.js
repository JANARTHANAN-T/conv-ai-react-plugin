import { useRef as o, useEffect as c } from "react";
const l = ({ agentId: e, buttonPosition: t = "bottom-right", theme: i = {} }) => {
  const r = o(null);
  return c(() => {
    const n = document.createElement("script");
    return n.src = "https://cdn.jsdelivr.net/gh/JANARTHANAN-T/conv-ai-plugin@0.0.5/conv-ai-plugin.min.js", n.async = !0, n.onload = () => {
      window.ConvAIPlugin && (r.current = new window.ConvAIPlugin({
        agentId: e,
        buttonPosition: t,
        theme: i
      }));
    }, document.head.appendChild(n), () => {
      r.current?.destroy && r.current.destroy();
    };
  }, [e, t, JSON.stringify(i)]), null;
};
export {
  l as ConvAIPlugin
};
