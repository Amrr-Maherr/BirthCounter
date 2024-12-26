// Define action type constants for better code readability and maintainability
export const Add = "Add";
export const Delete = "Delete";

// Define an action creator for adding a year
// This function returns an action object with the type "Add"
export const AddYearAction = () => ({
    type: Add
});

// Define an action creator for deleting a year
// This function returns an action object with the type "Delete"
export const DeleteYearAction = () => ({
    type: Delete
});
