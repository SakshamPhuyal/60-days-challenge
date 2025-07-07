import PropTypes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name:{props.Name}</p>
            <p>Age:{props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "No" }</p>
        </div>
    );
}
Student.defaultProps={
    Name:"Guest",
    age:0,
    isStudent:false,
}
   Student.PropTypes = {
  Name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
   }
export default Student