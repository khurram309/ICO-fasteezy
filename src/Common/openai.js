import openai from 'openai';

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
const openaiInstance = new openai.OpenAI({apiKey: openaiApiKey, dangerouslyAllowBrowser: true});

export { openaiInstance as openai };