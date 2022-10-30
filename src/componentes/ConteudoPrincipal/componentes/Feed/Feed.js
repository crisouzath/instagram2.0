import './Feed.css';
import Stories from './Stories/Stories';
import Posts from './Posts/Posts'


function Feed(){
    return(
        <div className='feed'>
             <Stories/>
             <Posts/>
        </div>
    )
}

export default Feed;