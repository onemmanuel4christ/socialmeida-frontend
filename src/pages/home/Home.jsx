import Posts from '../../components/posts/Posts'
import Story from '../../components/stories/Story'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Story />
      <Posts />
    </div>
  )
}

export default Home
