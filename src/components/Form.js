// import React from "react";
//
// class Form extends React.Component {
//   render() {
//     return (
//   <form>
//             <input type="text" name="city" placeholder="city...">
//
//         <input type="text" name="country" placeholder="country...">
//
//           <button>Submit</button>
//   </form>
//   );
//   }
// };
// export default Form;
//



import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;
