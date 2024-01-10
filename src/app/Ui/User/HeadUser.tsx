import { IconBell } from "@tabler/icons-react";

export default function HeadUser() {
  return (
    <header className="w-full flex justify-between">
      <div>
        <p>
          <span className="text-2xl font-semibold">Bienvenido SpFranx</span>
          <br></br>
          Domingo, 24 De Diciembre De 2023
        </p>
      </div>
      <header className="flex gap-2 self-start ">
        <button className="px-1.5 py-1.5 bg-slate-200 rounded-lg hover:shadow-md">
          <IconBell size={30} />
        </button>
      </header>
    </header>
  );
}
