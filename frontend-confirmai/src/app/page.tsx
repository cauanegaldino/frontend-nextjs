import Background from "../components/background";
import Header from "../components/header";
import LoginAdm from "../components/loginAdm";

export default function Home() {
  return (
    <Background>
          <Header subtitle="Acesso ao Painel Administrativo"/>
          <div className="pt-9 flex items-center justify-center px-4">
            <LoginAdm/>
           </div>
    </Background>
  );
}
