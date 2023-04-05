import React from "react";
import { useState } from 'react';


const textarea = () => {

  const [loading, setLoading] = useState(false)
    const [prompt, setPrompt] = useState('');
    const [data, setData] = useState('')
    const [error, setError] = useState(false)

  const handleClick = async (e) => {
    e.preventDefault()

    setLoading(true)
    const res = await fetch('/api/apiopenai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    })

    if (res.status !== 200) {
      setLoading(false)
      setError(true)
      return
    }

    const dataReal = await res.json()
    setData(dataReal.response)
    setLoading(false)
    setError(false)
    
  }

  return (
    <form>
        <div className="m-5">
        <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="lifestyle">
            <p className="border-yellow-500 border-b-4 w-1/5 rounded"></p>
          Ayudame contandome tu dia para hacer la mejor seleccion para ti:
          
        </label>
        <textarea rows={6}
          onChange={(e) => setPrompt(e.target.value)}
          type={'text'}
          name={'prompt'}
          className="bg-white border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Detalla tu estilo de vida:"
        />
      </div>
      <button onClick={handleClick} className="bg-white hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow">
        Enviar
      </button>

      
      <label className="block text-yellow-500 font-bold mb-2 pt-6" htmlFor="lifestyle">
       {error?"Lo sentimos, intentalo mas tarde":data}
      </label>


        </div>
    </form>
  );
};

export default textarea;
