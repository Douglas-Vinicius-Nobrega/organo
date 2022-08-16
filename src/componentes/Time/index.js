import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const corBackground = { background: props.corSecundaria }
    const corBorderColor = {borderColor: props.corPrimaria}
    

    return (
        (props.colaboradores.length > 0) && <section className='time' style={corBackground}>
            <h3 style={corBorderColor}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    ) 
}

export default Time