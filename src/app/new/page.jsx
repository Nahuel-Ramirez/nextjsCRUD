"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewPage({ params }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
      const res = await fetch("api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handlerSubmit}
        className="bg-slate-800 p-10 rounded-xl shadow-xl shadow-slate-700 w-2/4"
      >
        <h3 className="py-2 font-bold text-2xl">
          {params.id ? "Editar tarea" : "Tarea Nueva"}
        </h3>

        <label htmlFor="title" className="font-bold text-xs">
          Titulo de la tarea
        </label>
        <input
          id="title"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description" className="font-bold text-xs">
          Descripcion de la tarea
        </label>
        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full rounded-md text-black"
          placeholder="Describe tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
          {params.id ? "Editar" : "Crear  "}
        </button>

        {params.id && (
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all ml-5" type="button"
          onClick={async () => {
            const res = await fetch(`/api/tasks/${params.id}`,{
              method: "DELETE",
            })
            const data = await res.json()
            console.log(data)
            router.refresh()
            router.push("/")
          }}
          >
            Eliminar
          </button>
        )}
      </form>
    </div>
  );
}

export default NewPage;
