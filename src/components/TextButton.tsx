interface Props {
    text: string;
    onClick: () => void;
}

export default function TextButton(props: Props) {
  return (
    <div className="bg-gray-200 text-center py-5 mb-5 cursor-pointer rounded">
      {props.text}
    </div>
  );
}
