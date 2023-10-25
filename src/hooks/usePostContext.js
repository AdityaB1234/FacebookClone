import { PostsContext } from "../context/postContext";
import { useContext} from "react";
export const usePostsContext = () =>{
    const context = useContext(PostsContext)
    if(!context){
        throw Error('context is null')
    }
    return context
}