import { ComponenteInicio } from "./subComponetes/ComponenteInicio";
import { ComponenteHabilidad } from "./subComponetes/ComponenteHabilidad";
import { ComponenteAcercaDeMi } from './subComponetes/ComponenteAcercaDeMi';
import { ComponenteProyectos } from './subComponetes/ComponenteProyectos';
import { ComponenteContacto } from "./subComponetes/ComponenteContacto";

export const ComponentePrincipal = () => {
    return (
        <>
            <ComponenteInicio></ComponenteInicio>
            <ComponenteHabilidad></ComponenteHabilidad>
            <ComponenteAcercaDeMi></ComponenteAcercaDeMi>
            <ComponenteProyectos></ComponenteProyectos>
            <ComponenteContacto ></ComponenteContacto>

        </>
    )
}
