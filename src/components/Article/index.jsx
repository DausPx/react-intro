import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

function Article(props) {
    const articleData = useSelector(state => state.news.activeArticle)
    const navigate = useNavigate()

    useEffect(()=>{
        console.log('it works')
        if(!articleData.title){
            navigate('../search',{replace: true})
        }
    },[articleData.title, navigate])

    return <div>
        <p>{articleData.title}</p>
    </div>
}

export default Article