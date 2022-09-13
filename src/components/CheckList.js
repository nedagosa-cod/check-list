import Check from './Check';
import ValText from './ValText';
import ValCheck from './ValCheck';

const CheckList = () => {
    return (
        <section className="checklist">
            <form className="checklist__form" id="fromChecks">
                <ul className="checklist__listas">
                    <Check />
                    <Check />
                    <Check />
                    <Check />
                    <Check />
                </ul>
            </form>
            <form className="checklist__desc" id="formDesc">
                <div className="checklist__content checklist__content--ok" id="checkDes-0">
                    <h1 className="checklist__titles">A) Descripción del proceso A</h1>
                    <p>1. Parrafo de descripción del proceso A donde se puede mostrar una imagen para facilitar el entendiemiento</p>
                    <i className="fa-solid fa-images openNav('migr2.png')"></i>
                    <p>2. Aquí otra descripción aclarando que tambien se puede hacer uso de botones para redirijir a otros aplicativos segun el contexto de la descripción.</p>
                    <a className="checklist__button--link" href="https://cwc.sharepoint.com/sites/DatosCT/Internet/SitePages/Equipos-HFC.aspx" target="_blank">Ver</a>
                    <p>3. Recuerda siempre numerar los pasos para entender el proceso, en este momento estamos en la descripción 3 del check A</p>
                    <h3>Tambien se puede poner estas NOTAS para que resalten un poco más!</h3>
                    <h4>O esta NOTA que es mas importante aun!</h4>
                    <p>4. Otra parte importante de estos checklist son las validaciones de datos, que pueden ser de texto, valor contable, de si o no y de fecha y hora, te mostraré la validación de datos de texto:</p>
                    <ValText />
                    <p>5. Validaciones de datos de SI/NO:</p>
                    <ValCheck />
                </div>
                <div className="checklist__content" id="checkDes-1">
                    <h1 className="checklist__titles">Escenarios en los que no se puede realizar una migración.</h1>
                    <h3>1. ¿El servicio es FTTH Jasec?</h3>
                    <p>"XXX, de momento el servicio Next TV no se encuentra disponible en tu zona, estamos trabajando para que en un corto plazo esté disponible"</p>
                    <h3>2. ¿El servicio es PHC?</h3>
                    <p>"XXX, de momento el servicio Next TV no se encuentra disponible para clientes del programa Hogares Conectados, estamos trabajando para que en un corto plazo esté disponible"</p>
                    <h3>3. ¿El cliente es colaborador?</h3>
                    <p>Indicarle el proceso que debe de seguir para solicitar la actualización del plan según Datos CT. <a href="https://cwc.sharepoint.com/sites/DatosCT/SitePages/C2021-18082021.aspx" target="_blank">Ir</a></p>
                    <h3>4. ¿El servicio se ubica en Cóbano o Tambor?</h3>
                    <p>"XXXX, de momento el servicio Next TV no se encuentra disponible en tu zona, estamos trabajando para que en un corto plazo esté disponible"</p>
                    <h3>5. ¿El servicio tiene lista de precios exenta o PYMES?</h3>
                    <p>"XX, de momento el servicio Next TV no se encuentra disponible para tu tipo de servicio, estamos trabajando para que en un corto plazo esté disponible"</p>
                    <h3>6. ¿El cliente tiene un solo servicio?</h3>
                    <p>Cliente que solo cuenta con un servicio debe ser transferido a ventas EXT 23964, para realizar la migración.</p>
                    <h3>7. ¿El cliente tiene 5 o más convertidores?</h3>
                    <p>Si el cliente desea mantener la cantidad de convertidores, se deberá de hacer mediante Clientes Híbridos.</p>
                </div>
            </form>
            <div class="checklist__btns">
                <button type="reset" class="button__button" id="resetAllForm">Reiniciar</button>
                <button type="button" class="button__button" id="btnData">Datos</button>
            </div>
        </section>
    );
  }
  
  export default CheckList;