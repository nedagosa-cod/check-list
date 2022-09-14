
const Check = (props) => {
  const {check, step, title} = props
  return (
    <li>
        <label className='checklist__label' htmlFor={'check-' + step}>
            <input className='checklist__label--check' id={'check-' + step} name={'checkDes-' + step} type='checkbox' />
            <span className='checklist__label--scala'>{check}</span>
            <p className='checklist__label--title'>{title}</p>
            <span className='checklist__label--span'></span>
        </label>
    </li>
  );
}

export default Check;
