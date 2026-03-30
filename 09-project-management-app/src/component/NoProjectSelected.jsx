import noProjectImg from "../assets/no-projects.png";
import Button from "../component/Button.jsx";
export default function NoProjectSelected() {
  return (
    <div className="flex flex-col items-center">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="object-contain w-16 h-16 mx-auto"
      />
      <h2 className="mt-4 text-xl font-bold text-stone-500">
        No Project Selected
      </h2>
      <p className="mb-4 text-stone-400">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button> Create new project </Button>
      </p>
    </div>
  );
}
