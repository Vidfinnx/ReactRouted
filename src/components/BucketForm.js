import React, { useState } from 'react';

console.log("BUCKETFORM.JS ACCESSED");

function BucketForm(props) {
  console.log("BUCKETFORM.js=>Function BucketForm(props)");
  const [input, setInput] = useState('');
  let [eagerness, setEagerness] = useState('');
  console.log("Current input:" + input)
  console.log("Current Eagerness level:" + eagerness)

  // TODO: Use this array in the return statement below
  const eagernessLevel = ['high', 'medium', 'low']

  const handleSubmit = (e) => {
    console.log("BUCKETFORM=>handleSubmit")
    e.preventDefault();
//If no eagerness set default to low
    if (!eagerness) {
      eagerness = 'low';
    }
//submit form data through props listener onSubmit to Bucketlist.js
    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,
      
    });

    setInput('');
    setEagerness('');
    console.log("input and eagerness reset to \"\" ")
  };

// TRACKS TYPED LETTERS AND UPDATES INPUT STATE
  const handleChange = (e) => { 
    setInput(e.target.value);   
    console.log("Bucketform.Js=>handleChange=>setInput:" + e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      {console.log("NO PROPS.EDIT STATE FOUND RETURN BUCKETFORM JSX TO BUCKETLIST")}
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO: Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
            {/* OnClick must be put in a () => otherwise causes infinite renderloop */}
            <p onClick={() => setEagerness((eagernessLevel[0]), console.log("BucketForm.JS=>() => setEagerness((eagernessLevel[0])"))}>Must do</p>
            <p onClick={() => setEagerness((eagernessLevel[1]), console.log("BucketForm.JS=>() => setEagerness((eagernessLevel[1])"))}>Want to do</p>
            <p onClick={() => setEagerness((eagernessLevel[2]), console.log("BucketForm.JS=>() => setEagerness((eagernessLevel[2])"))}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    <div>
       {console.log("PROPS.EDIT FOUND RETURNING UPDATE FORM JSX TO BUCKETLIST")}
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO: Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
            <p onClick={() => setEagerness((eagernessLevel[0]), console.log("BucketForm.JS=>() => setEagerness((eagernessLevel[0])"))}>Must do</p>
            <p onClick={() => setEagerness((eagernessLevel[1]), console.log("BucketForm.JS=>() => setEagerness((eagernessLevel[1])"))}>Want to do</p>
            <p onClick={() => setEagerness((eagernessLevel[2]), console.log("BucketForm.JS=>() => setEagerness((eagernessLevel[2])"))}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;
