import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"

function ArticleWithId(props) {
    const { id } = useParams()
    const articleData = useSelector(state => state.news.newsList[id])
    const navigate = useNavigate()

    useEffect(()=>{
        console.log('it works')
        if(!articleData){
            navigate('../search',{replace: true})
        }
    },[articleData, navigate])

    return <div>
        <p>{articleData && articleData.title}</p>
    </div>
}

export default ArticleWithId