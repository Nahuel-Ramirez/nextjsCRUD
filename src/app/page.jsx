import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  return await prisma.task.findMany();
}

export const dynamic = "force-dynamic";

async function HomePage() {
  const tasks = await loadTasks();

  return (
    <div className="grid grid-cols-3 p-3 max-h-screen">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default HomePage;
