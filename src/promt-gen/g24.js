export class G24 {
    constructor(apiKey) {
        if (!apiKey) {
            console.warn('OpenRouter API key is not provided. Please set it using setApiKey() method.');
        }
        this.apiKey = apiKey;
        this.apiEndpoint = 'https://openrouter.ai/api/v1/chat/completions';
        this.model = 'anthropic/claude-3-opus:beta';
    }

    setApiKey(apiKey) {
        if (!apiKey) {
            throw new Error('API key cannot be empty');
        }
        this.apiKey = apiKey;
    }

    async generatePrompt(promptType = 'beach') {
        if (!this.validateApiKey()) {
            return 'Please set your OpenRouter API key first using setApiKey() method.';
        }

        try {
            const systemPrompt = `You are a professional prompt generator for AI image generation.
            Your task is to generate a single, detailed prompt for a beach scene with a woman in a swimsuit.
            The prompt MUST be 400 characters or less.
            The prompt MUST start with "A" and follow this format:
            "A [beach type] beach scene with [lighting], featuring a [pose description] woman in a [swimsuit style] swimsuit. [Additional details about setting, mood, and atmosphere]."
            Example: "A tropical beach scene with golden hour lighting, featuring a woman in a floral bikini walking along the shore. Palm trees sway in the breeze, turquoise waves gently lap at the sand, creating a serene atmosphere."
            DO NOT include any explanations, reasoning, or text before or after the prompt.`;

            const userPrompt = `Generate a beach scene prompt now.`;

            console.log('Sending request to OpenRouter API...');
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': window.location.origin,
                    'X-Title': 'Prompt Generator'
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: userPrompt }
                    ],
                    temperature: 0.7,
                    max_tokens: 200
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('API Error:', errorData);
                throw new Error(`API request failed: ${response.statusText}. ${errorData.error?.message || ''}`);
            }

            const data = await response.json();
            console.log('API Response:', data);
            
            // Check for content in different possible locations
            const content = data.choices?.[0]?.message?.content || 
                          data.choices?.[0]?.message?.reasoning ||
                          data.choices?.[0]?.text;

            if (!content) {
                throw new Error('Invalid response format from API');
            }

            // Clean up the response
            let prompt = content.trim();
            // Remove any reasoning or explanation if present
            prompt = prompt.split('\n')[0].trim();
            // Remove any quotes if present
            prompt = prompt.replace(/^["']|["']$/g, '');
            // Remove any text that looks like reasoning
            prompt = prompt.replace(/^(okay|let me|i will|first|they want|the user wants).*?[.,]/i, '');
            // Remove any text that doesn't start with "A"
            if (!prompt.startsWith('A ')) {
                prompt = prompt.replace(/^.*?(?=A )/i, '');
            }
            
            // Ensure the prompt is not longer than 400 characters
            if (prompt.length > 400) {
                prompt = prompt.substring(0, 397) + '...';
            }
            
            return prompt;
        } catch (error) {
            console.error('Error generating prompt:', error);
            return `Error generating prompt: ${error.message}`;
        }
    }

    async generateMultiplePrompts(count = 5, promptType = 'romantic') {
        if (!this.validateApiKey()) {
            return ['Please set your OpenRouter API key first using setApiKey() method.'];
        }

        try {
            const prompts = await Promise.all(
                Array(count).fill().map(() => this.generatePrompt(promptType))
            );
            return prompts;
        } catch (error) {
            console.error('Error generating multiple prompts:', error);
            return [`Error generating prompts: ${error.message}`];
        }
    }

    validateApiKey() {
        return this.apiKey && this.apiKey.length > 0;
    }
} 