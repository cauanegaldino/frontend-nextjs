import Title from "./FormBoxComponents/Title"
import Info from "./FormBoxComponents/Info"
export default function FormBox() {
  return (
    <div className="w-[95%] max-w-90 aspect-square bg-amber-50 rounded-3xl overflow-hidden border-8 border-red-600 shadow-[0_0_0_7px_white]">
        <Title></Title>
        <Info></Info>
    </div>
  );
}
