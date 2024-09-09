import "./Button.scss";

type Props = {
  text: string;
  classProp?: string;
};

export function Button({ text, classProp }: Props) {
  return <button className={classProp}>{text}</button>;
}
