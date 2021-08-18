import React, { useState } from 'react';
import BucketForm from './BucketForm';

console.log("BUCKET.JS ACCESSED")

function Bucket(props) {
  console.log("BUCKET.JS =>FUNCTION BUCKET(PROPS)")
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

console.log("CURRENT PROPS.BUCKET FROM BUCKETLIST")
console.log(props.bucket);
console.log("CURRENT PROPS.BUCKET FROM BUCKETLIST")

console.log("CURRENT EDIT STATE")
console.log(edit)
console.log("CURRENT EDIT STATE")

  const submitUpdate = (value) => {
    console.log("Bucket.js=>submitUpdate");
    console.log("NEW VALUE TO BE PASSED AS PROPS TO BUCKETLIST.JS");
    console.log(value)
    console.log("NEW VALUE TO BE PASSED AS PROPS TO BUCKETLIST.JS");
    console.log(" BUCKET.JS=>props.editBucketItem(edit.id, value)=>Bucketlist.JS")
    props.editBucketItem(edit.id, value)
    
   
        // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list


    // TODO: Set the key:value pairs in the `edit` object back to empty strings
    setEdit({ id: null, value: '', eagerness: '' });
    console.log("EDIT STATE VALUES SET BACK TO EMPTY")

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    console.log("EDIT STATE POPULATED PASS EDIT VALUES AS PROPS TO BUCKETFORM COMPONENT")
    //edit= can be bulldog referenced in bucketform as !props.edit can be props.bulldog
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }
 
  return props.bucket.map((item, index) => (
   
    // TODO: Add a className of `bucket row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div className={ item.isComplete ? `bucket-row complete ${item.eagerness}`:
     `bucket-row ${item.eagerness}`} key={index}>
       {console.log("MAP PROPS.BUCKET DATA FROM BUCKETLIST.JS RETURN DATA + JSX =>BUCKETLIST COMPONENT=>CALLED AT Bucket.JS(Line:38)")}
      
      {/* // TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}
      <div onClick={() => props.completeBucketItem((item.id), console.log("BUCKET.JS=>() => props.completeBucketItem(item.id)=>BUCKETLIST.JS"))}>
          {/* TODO: Add the item text here */}
          <p> {item.text} </p>
      </div>
      <div className="icons">
        {/* // TODO: Add an onClick event update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        {/* CREATES EDIT STATE CONST */}
        <p onClick={() => setEdit(({ id: item.id, value: item.text, eagerness: item.eagerness }), console.log("BUCKET.JS=>() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness}"))}> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
         {/* PASSES DATA TO BUCKETLIST.JS FOR PROCESSING */}
        <p onClick={() => props.removeBucketItem((item.id), console.log("BUCKET.JS=>() => props.removeBucketItem((item.id)=>Bucketlist.js"))}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
