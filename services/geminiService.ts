import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini Client
// Note: In a production environment, ensure the API key is handled securely (e.g., via backend proxy).
// For this demo, we assume it's available in the environment.
const ai = new GoogleGenAI({ apiKey });

export const getDesignAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "AI Assistant is currently offline (API Key missing). Please contact us directly for a consultation.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are "Meraki AI", a virtual interior design consultant for the company "Meraki Ample". 
        Your tone is professional, sophisticated, and innovative.
        The company slogan is "The key of innovation homes".
        Key services include: Residential (Bedroom, Living, Kitchen), Commercial, CNC Works, and Renovations.
        Offer concise, stylish advice on interior design trends, color palettes (especially emphasizing white, black, and ash grey), and space planning.
        Always suggest booking a consultation with Meraki Ample for detailed execution.`,
      }
    });

    return response.text || "I apologize, I couldn't generate a design tip right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the design database. Please try again later.";
  }
};
