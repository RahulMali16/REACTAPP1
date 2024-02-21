import './App.css';
import { useState } from 'react';

function App() {

  // const[firstname,setFirstname] = useState("");

  // const[latname,setLastname] = useState("");



  // function changefirstHandler(event){
  //   setFirstname(event.target.value);
  // }
  // function changelastHandler(event){

  //    setLastname(event.target.value);
  // }
  const [FormData, setFormData] = useState({ firstname: " ", lastname: " ", emailname: " ", comments: " ", Isvisible: false, mode: " ",favCar: "" })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData(
      PrevFormData => {
        return {
          ...PrevFormData,
          [name]: type === "checkbox" ? checked : value

        }
      }
    );
   
  }
  function submithandler(event){
    event.preventDefault();
    console.log("printing form ka data");
    console.log(FormData);
 }
  return (
    <div className="App">
      <form  onSubmit={submithandler}>

        <input type="text"
          placeholder='first name'
          name='firstname'
          onChange={changeHandler}
          value={FormData.firstname}></input>
        <br></br>
        <input type="text"
          placeholder='last name'
          name='lastname'
          onChange={changeHandler}
          value={FormData.lastname}></input>
        <br></br>
        <input type="text"
          placeholder='emailname'
          name='emailname'
          onChange={changeHandler}
          value={FormData.emailname}></input>

        <br></br>
        <br></br>
        <textarea placeholder='enter your comments here'
          name='comments'
          onChange={changeHandler}
          value={FormData.comments}></textarea>

        <br></br>
        <br></br>
        <input type='checkbox'
          id='Isvisible'
          onChange={changeHandler}
          name="Isvisible"
          checked={FormData.Isvisible} >
        </input>
        <label htmlFor='Isvisible'>Am I visible bro</label>
        <br></br>
        <br></br>


        <fieldset>
          <legend>
            MODE:
            </legend>

        <input type='radio'
          onChange={changeHandler}
          name='mode'
          value="online-mode"
          id='online-mode'
          checked = {FormData.mode === "online-mode"}>

        </input>
        <label htmlFor='online-mode'>ONLINE</label>

        <input type='radio'
          onChange={changeHandler}
          name='mode'
          value="offline-mode"
          id='online-mode'
          checked = {FormData.mode === "offline-mode"}>
        </input>

        <label htmlFor='online-mode'>OFFLINE</label>
        </fieldset>

        <select
        name = 'favCar'
        id='favCar'
        value = {FormData.favCar}
        onChange={changeHandler}>

          <option value = "scorpio">
            Scorpio
          </option>
          <option value = "Vokswagen">
            Vokswagen
          </option>
          <option value = "Hondacity">
            Honda-city
          </option>
         

        </select>
          

          <br></br>
          <br></br>

          <button>Submit</button>



      </form>
    </div>
  );
}

export default App;
