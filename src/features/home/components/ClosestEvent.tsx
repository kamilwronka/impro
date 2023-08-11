import Image from "next/image";

const ClosestEvent: React.FC = () => {
  return (
    <div className="rounded-xl flex flex-col">
      <div className=" w-full">
        <Image
          className="rounded-t-xl"
          src="/event.jpg"
          alt="event"
          width={500}
          height={500}
        />
      </div>
      <div className="bg-white rounded-b-xl p-4">
        <p className="font-bold">NAJBLIŻSZE WYDARZENIE</p>
      </div>
    </div>
  );
};

export default ClosestEvent;
