import { Image } from "@nextui-org/react";

export default function AvatarWorkplace({ workplace, className }: any) {
  const workplaceLogo = {
    getronics: "/img/iconos-work/getronics.png",
    globant: "/img/iconos-work/globant.png",
    sgoweb: "/img/iconos-work/sgoweb.png",
    macamedia: "/img/iconos-work/macamedia.png",
  };

  return (
    <div className={className}>
      <Image
        alt={workplace}
        height={32}
        src={workplaceLogo[workplace]}
        width={32}
      />
    </div>
  );
}
