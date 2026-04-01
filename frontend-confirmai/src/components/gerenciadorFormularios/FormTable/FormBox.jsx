import Title from "./FormBoxComponents/Title"
import Info from "./FormBoxComponents/Info"
import ButtonArea from "./FormBoxComponents/ButtonArea"
export default function FormBox() {
  return (
    <div className="w-full max-w-140 aspect-square bg-amber-50 rounded-3xl overflow-hidden border-8 border-red-600 shadow-[0_0_0_7px_white]">
        <Title></Title>
        <Info></Info>
        <ButtonArea></ButtonArea>
    </div>
  );
}
