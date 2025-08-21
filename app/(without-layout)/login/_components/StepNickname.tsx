import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function StepNickname({ step, setStep }: Props) {
  return <div>StepNickname</div>;
}
