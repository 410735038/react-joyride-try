import { useDispatch, useSelector } from 'react-redux';
import StepCard from './StepCard.jsx';
import { updateComponent4Note } from '../store/component4Slice.js';

function StepFour() {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.component4.note);

  return <StepCard step={4} note={note} onNoteChange={(value) => dispatch(updateComponent4Note(value))} />;
}

export default StepFour;
