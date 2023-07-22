import {Link} from 'react-router-dom'
import './all.css'
function F()
{
    return (
        <div className='main_body '>
         
          <div className='item'>
            <h1 className='tracking-in-expand-fwd-top ' style={{ color: 'chocolate' }}>Memorica</h1>
    
             <h4 className='tracking-in-expand-fwd ' style={{ color: 'mediumpurple' }}>A Place to Share your Memories</h4>
          <Link id='nk' to='/opera'><h4 className='shake-horizontal'>Click to Post</h4></Link>
          </div>
    
          <div className='body'>
            <div className='bg1 color-change-5x ' />
            <div className='bg2' />
          </div>
        </div>
      )}

export default F