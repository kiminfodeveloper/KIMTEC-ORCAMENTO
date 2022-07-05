import { BsFillTrashFill } from 'react-icons/bs'
import styles from './styles/ServiceCard.module.css'

function ServiceCard({id, name, kim, description, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, kim)
    }

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total</span> R${kim}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
        
    )
}

export default ServiceCard