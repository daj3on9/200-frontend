import React, { Dispatch, SetStateAction } from 'react';
interface Props {
  setStep: Dispatch<SetStateAction<number>>;
  canProceed: boolean;
}

export default function LoginNextBtn({ setStep, canProceed }: Props) {
  return (
    <div className="absolute bottom-0 left-0 w-full cursor-pointer">
      <button
        className={`w-full py-4  text-Static-White text-base font-bold bg-Primary-Normal ${
          canProceed ? '' : 'opacity-30'
        }`}
        disabled={!canProceed}
        onClick={() => setStep((prev) => prev + 1)}
      >
        다음
      </button>
    </div>
  );
}
