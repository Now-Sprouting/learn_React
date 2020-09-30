import react, { useContext } from 'react'
import { UserContext, TokenContext } from '../App'

const useUserContext = () => {
    const user = useContext(UserContext)
    const token = useContext(TokenContext)
    return [user, token]
}
export default useUserContext