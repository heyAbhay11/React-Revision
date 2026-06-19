import { useSelector, useDispatch } from 'react-redux'
import { fetchUserData } from '../Redux/features/UserSlice';
import { useEffect } from 'react';

export const useUser = () => {
    const { data, loading, error } = useSelector((state) => state.user)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch])

    return { data, loading, error }

}