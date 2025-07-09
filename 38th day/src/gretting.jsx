function Greeting(props){

if(props.isLoggedIn){
    
    return <h2>{props.welcome}</h2>;

} 
}
export default Greeting