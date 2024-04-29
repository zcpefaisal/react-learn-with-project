import React from 'react'

// function Card(props) {
//     // console.log(props);
//     // console.log(props.myObj);
//     // console.log(props.myArr);
//     // console.log(props.customBtnText);
//     return (
//         <div className="relative h-[400px] w-[300px] rounded-md mb-4">
//             <img
//             src="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//             alt="AirMax Pro"
//             className="z-0 h-full w-full rounded-md object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//             <div className="absolute bottom-4 left-4 text-left">
//             <h1 className="text-lg font-semibold text-white">{props.myTitle}</h1>
//             <p className="mt-2 text-sm text-gray-300">
//                 Name: {props.myObj.name} <br />
//                 Age: {props.myObj.age} <br />
//                 Interest: {props.myObj.interest} <br />
//             </p>
//             <p className="mt-2 text-sm text-gray-300">
//                 Array data: {props.myArr[0]} <br />
//                 Array data: {props.myArr[1]} <br />
//                 Array data: {props.myArr[2]} <br />
//                 Array data: {props.myArr[3]} <br />
//                 Array data: {props.myArr[4]} <br />
//             </p>
//             <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold">
//                 {props.customBtnText}
//             </button>
//             </div>
//         </div>
//     )
// }


function Card({myTitle, myObj, myArr, customBtnText='View'}) {
    // console.log(myTitle);
    // console.log(myObj);
    // console.log(myArr);
    // console.log(customBtnText);
    return (
        <div className="relative h-[400px] w-[300px] rounded-md mb-4">
            <img
            src="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{myTitle}</h1>
            <p className="mt-2 text-sm text-gray-300">
                Name: {myObj.name} <br />
                Age: {myObj.age} <br />
                Interest: {myObj.interest} <br />
            </p>
            <p className="mt-2 text-sm text-gray-300">
                Array data: {myArr[0]} <br />
                Array data: {myArr[1]} <br />
                Array data: {myArr[2]} <br />
                Array data: {myArr[3]} <br />
                Array data: {myArr[4]} <br />
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold">
                {customBtnText}
            </button>
            </div>
        </div>
    )
}

export default Card
