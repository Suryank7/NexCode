const gptService = require('../services/gptService');

exports.generateCode = async (req, res, next) => {
    try {
        const { prompt, language, framework } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const result = await gptService.generate(prompt, language, framework);
        res.json(result);
    } catch (error) {
        next(error);
    }
};

exports.explainCode = async (req, res, next) => {
    try {
        const { code } = req.body;
        if (!code) {
            return res.status(400).json({ error: 'Code is required' });
        }

        const result = await gptService.explain(code);
        res.json(result);
    } catch (error) {
        next(error);
    }
};
