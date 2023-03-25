import React from "react";

const textarea = () => {
  return (
    <form>
        <div className="m-5">
        <div className="mb-4">
        <label className="block text-white font-bold mb-2" htmlFor="lifestyle">
            <p className="border-yellow-500 border-b-4 w-1/5 rounded"></p>
          Ayudame contandome tu dia para hacer la mejor seleccion para ti:
        </label>
        <textarea
          className="bg-white border-yellow-500 border-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Detalla tu estilo de vida:"
        ></textarea>
      </div>
      <button className="bg-white hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow">
        Enviar
      </button>

      <label className="block text-yellow-500 font-bold mb-2 pt-6" htmlFor="lifestyle">

En base a tu estilo de vida, te recomendaria un vape con terpenos organicos de perfil hibrido equilibrado. Esto te ayudará a mantenerte alerta y enfocado durante el día, mientras te da la energía necesaria para seguir con la escuela y el trabajo. También te ayudará a relajarte por la noche para que puedas hacer tareas y proyectos. Además, el perfil hibrido equilibrado es ideal para personas con estilos de vida muy ocupados, ya que ayuda a equilibrar el estado de ánimo, la energía y la concentración.
        </label>


        </div>
    </form>
  );
};

export default textarea;
