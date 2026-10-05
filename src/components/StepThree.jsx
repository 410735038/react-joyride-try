import { useDispatch, useSelector } from 'react-redux';
import StepCard from './StepCard.jsx';
import { updateComponent3Note } from '../store/component3Slice.js';

function StepThree() {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.component3.note);

  return <StepCard step={3} note={note} onNoteChange={(value) => dispatch(updateComponent3Note(value))} />;
}

export default StepThree;
