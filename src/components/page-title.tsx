import { ScreenShare } from "lucide-react";

export default function PageTitle() {
  return (
    <h1 className="text-2xl font-bold p-6 m-2 mb-6 flex items-center gap-2 shadow-blue-500 bg-blue-900 shadow-md rounded-2xl">
      <ScreenShare></ScreenShare>
      Movie List
    </h1>
  );
}
