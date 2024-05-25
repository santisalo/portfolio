import { Avatar } from "@nextui-org/react";

export default function MyHistory(props: any) {
  return (
    <div className="px-2 py-10 rounded-3xl lg:px-16 bg-slate-950">
      <div className="w-full flex pb-6">
        <div>
          <p className="text-5xl">Getronics</p>
          <p className="ms-1 text-xl">Ssr Consultant</p>
          <p className="ms-1 font-bold">2022 - Actualmente</p>
        </div>
      </div>
      <div className="w-full flex mb-[-15px]">
        <div className="ps-10 mt-[-10px]">
          <Avatar color="success" name=" " size="sm" />
        </div>
        <div className="grow border-t-4 border-green-800 mt-1" />
        <div />
      </div>
      <div className="w-full flex">
        <div className="grow text-right pt-16 pe-4">
          <p className="text-5xl">Macamedia</p>
          <p className="ms-1 text-xl">Fullstack Dev</p>
          <p className="ms-1  font-bold">2021 - 2022</p>
        </div>
        <div className="border-r-4 border-green-800 py-24">
          <Avatar className="me-[-18px]" color="success" name=" " size="sm" />
        </div>
      </div>
      <div className="w-full flex mt-[-5px]">
        <div className="ps-10 mt-[-10px]" />
        <div className="grow border-t-4 border-green-800 mt-1" />
        <div />
      </div>

      <div className="w-full flex mt-[-3px]">
        <div className="border-r-4 border-green-800 py-24 ms-6">
          <Avatar className="me-[-18px]" color="success" name=" " size="sm" />
        </div>
        <div className="grow text-left pt-16 ps-7">
          <p className="text-5xl">Santiago Web</p>
          <p className="ms-1 text-xl">Fullstack Dev</p>
          <p className="ms-1  font-bold">2010 - 2021</p>
        </div>
      </div>
    </div>
  );
}
