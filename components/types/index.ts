import { MouseEventHandler } from "react";

export interface CustomFormProps {
  currentIndex?: Number;
  handleNext?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  handleComplete?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.MouseEventHandler<HTMLInputElement>;
  value?: string;
}
