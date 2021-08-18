import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';


console.log("BUCKETLIST.JS ACCESSED")

function BucketList() {
  console.log("BUCKETLIST.JS=>BucketList()")
  const [bucket, setBucket] = useState([]);

  console.log("CURRENT BUCKET DATA")
  console.log(bucket);
  console.log("CURENT BUCKET DATA")

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    console.log("BucketList.js=>onSubmit=>addBucketItem")
    console.log("DATA PASSED FROM BUCKETFORM props.onSubmit TO BE ADDED TO BUCKET STATE")
    console.log(item)
    console.log("DATA PASSED FROM BUCKETFORM props.onSubmit TO BE ADDED TO BUCKET STATE")

    // TODO: Write logic to add the new bucket item to the bucket state variable
    const newBucket = [item, ...bucket];
    console.log("NEWBUCKET TO BE PUT INTO BUCKET STATE")
    console.log(newBucket);
    console.log("NEWBUCKET TO BE PUT INTO BUCKET STATE")

    setBucket(newBucket);
    console.log("BUCKET STATE UPDATED")

  };

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    console.log("BUCKLIST.js=>completeBucketItem")
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedBucket = bucket.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    // TODO: Write logic that marks an item as complete or incomplete when invoke
    console.log("COMPLETED ITEM BUCKET LIST TO BE PUT INTO BUCKET STATE")
    console.log(updatedBucket);
    console.log("COMPLETED ITEM BUCKET LIST TO BE PUT INTO BUCKET STATE")
    setBucket(updatedBucket);
    console.log("BUCKET STATE UPDATED")
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    console.log("BUCKETLIST.JS=>removeBucketItem")
    console.log("ORIGINAL BUCKET")
    console.log(bucket)
    console.log("ORIGINAL BUCKET")
    console.log("ITEM TO BE REMOVED ID")
    console.log(id)
    console.log("ITEM TO BE REMOVED ID")
    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function
    const updatedBucket = [...bucket].filter((item) => item.id !== id);
    // TODO: Update the bucket state variable
    console.log("NEW BUCKET MINUS THE ITEM TO UPDATE BUCKET STATE")
    console.log(updatedBucket);
    console.log("NEW BUCKET MINUS THE ITEM TO UPDATE BUCKET STATE")
 setBucket(updatedBucket);
 console.log("BUCKET STATE UPDATED")
  }
  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    console.log("BUCKETLIST.JS=>editBucketItem")
    console.log("NEW VALUES IN ITEM TO BE UPDATED")
    console.log(newValue)
    console.log("NEW VALUES IN ITEM TO BE UPDATED")
    
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }
    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
     
    );console.log("BUCKET STATE MAPPED ITEM ID COMPARED AND MATCHED AND BUCKET STATE WITH NEW VALUES UPDATED TO MATCHED")
  };

  return (
    <div>
      {console.log("BUCKETLIST.JS=>RENDER COMPONENTS + PASS {bucket} and functions as props=>BUCKET AND BUCKETFORM")}
      <h1>What is on your bucket list?</h1>
      {/* //onSubmit listener inside BucketForm Child */}
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
      //passing bucket as props bucket= can be renamed as bulldog= See line 39 in Bucket.js would be props.bulldog instead
        bucket={bucket}
      //passing all the functions as props to Bucket Child component name being whats before the = sign
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </div>
  );
}

export default BucketList;
