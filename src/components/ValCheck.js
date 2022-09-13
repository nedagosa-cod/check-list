const ValCheck = () => {
    return (
        <div className="checklist__boxdata">
            <span>Pregunta a realizar</span>
            <div className="inputs-radio">
                <label htmlFor="box1-si">SI</label>
                <input type="radio" name="box1" id="box1-si" value="SI" className="need" />
                <label htmlFor="1-no">NO</label>
                <input type="radio" name="box1" id="box1-no" value="NO" className="need" />
            </div>
        </div>
    );
  }
  
  export default ValCheck;