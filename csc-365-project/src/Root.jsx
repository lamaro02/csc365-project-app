import { Link } from 'react-router-dom'

const Root = () => {
    
    return (
        <div>
            <button className='button'><Link to='/products'>Products</Link></button>
            <button className='button'><Link to='/guilds'>Guilds</Link></button>
            <button className='button'><Link to='/addGuild'>Add a Guild</Link></button>
        </div>
    )
}
export default Root;