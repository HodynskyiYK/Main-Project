import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AllActionsCreators } from '../store/actions-creators'

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AllActionsCreators, dispatch)
}