export default function Home() {
  return (
    <div className="flex gap-4 flex-col">
      <h1 className="text-4xl text-rose-500">
        This is main heading with default inter font
      </h1>
      <h1 className="text-4xl text-rose-500 font-poppins">
        this is poppins with next and tailwind
      </h1>
      <p className="font-roboto text-rose-500">
        This is roboto with next and tailwind
      </p>
    </div>
  );
}
