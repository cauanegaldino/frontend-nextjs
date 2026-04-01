import Background from "@/components/background";
import {MenuButton} from "@/components/gerenciadorFormularios/UpperComponents/managerButtons"
import Input from "@/components/gerenciadorFormularios/UpperComponents/input"
import FormBox from "@/components/gerenciadorFormularios/FormTable/FormBox"
import Cabecalho from "@/components/gerenciadorFormularios/cabecalho"
import Grid from "../../components/gerenciadorFormularios/FormTable/Grid";

export default function Page()
{
    return(
        <Background>
            <Cabecalho/>
            <Input></Input>
            <Grid></Grid>
        </Background>
    )
}