interface Props {
  step: number;
}
export default function StepIndicator({ step }: Props) {
  const totalSteps = 3;

  return (
    <div className="flex w-full justify-center absolute bottom-[70px] left-0">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full mx-1 ${
            index == step ? 'bg-black' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
