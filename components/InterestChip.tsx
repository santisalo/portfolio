type InterestChipProps = {
  label: string;
  color: string;
  emoji: string;
};
const palette: any = {
  violet: "from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r",
  green: "from-green-400 via-lime-500 to-blue-500 bg-gradient-to-r",
  beach: "from-yellow-700 via-orange-200 to-red-300 bg-gradient-to-r",
  red: "from-red-800 via-fuchsia-200 to-purple-800 bg-gradient-to-r",
  argentina: "from-cyan-600 via-white-500 to-blue-200 bg-gradient-to-r",
  futbol: "from-green-600 via-lime-500 to-yellow-700 bg-gradient-to-r",
};

export default function InterestChip(props: InterestChipProps) {
  return (
    <div
      className={`${palette[props.color]} mb-2 p-1 rounded-full cursor-crosshair`}
    >
      <div className="flex justify-between items-center py-4 dark:text-white light:text-black px-4 font-semibold rounded-full dark:bg-black light:bg-white dark:hover:bg-transparent transition duration-75">
        <span className="text-lg">{props.label}</span>
        <span className="text-xl">{props.emoji}</span>
      </div>
    </div>
  );
}
