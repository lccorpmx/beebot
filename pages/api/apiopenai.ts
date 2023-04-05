const { Configuration, OpenAIApi } = require("openai");
import { error } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
     const configuration = new Configuration({
        organization: process.env.OPENAI_ORG,
        apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
  
    const promptVariable =  `${process.env.PROMPTTRAIN} ${req.body.prompt}.`

    console.log(promptVariable)
  
    try {
        const completionApi = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: promptVariable,
            temperature: 0.7,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          }); 
    
    
      const responseApi = completionApi.data.choices[0].text;
      return res.status(200).json({ response: responseApi})
    } catch (error) {
        return res.status(400).json({ response: error})
  }
}
