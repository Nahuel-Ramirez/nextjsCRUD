"use client"

import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const router = useRouter()

  return (
    <div className="bg-slate-800 m-2 mt-10 p-4 rounded-xl hover:shadow-xl hover:shadow-slate-700 hover:cursor-pointer hover:bg-slate-600 transition-all"
    onClick={() => {
      router.push("/tasks/edit/" + task.id)
    }}
    >
      <h3 className="mb-2 font-bold text-xl">{task.title}</h3>
      <p className="">{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
