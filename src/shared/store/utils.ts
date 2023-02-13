import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/providers/withStore';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector<RootState>;
