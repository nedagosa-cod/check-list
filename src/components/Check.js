
const Check = () => {
  return (
    <li>
        <label className='checklist__label' htmlFor="check-1">
            <input className='checklist__label--check' id='check-1' name='checkDes-1' type='checkbox' />
            <span className='checklist__label--scala'>A)</span>
            <p className='checklist__label--title'>Titulo del proceso A</p>
            <span className='checklist__label--span'></span>
        </label>
    </li>
  );
}

export default Check;
