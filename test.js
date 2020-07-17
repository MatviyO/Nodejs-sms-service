//EXAMPLE 1

// try {
//     const LOGIN = 'femmaservice@gmail.com';
//     const PASSWORD = 'service313';
//     const data = await req.body;
//     const TEXT = data.message;
//     const PHONE = data.phone
//     console.log(data)
//     if (data.phone && data.message) {
//         const result = await fetch(`http://api.sms-prosto.ru/?method=push_msg&email=${LOGIN}&password=${PASSWORD}&text=${TEXT}&phone=${PHONE}&sender_name=MyBrandName`)
//             .then(res => {
//                 if (res.status >= 400) {
//                     throw new Error("Bad response from server");
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 console.log(data);
//                 res.status(200).json({
//                     success: true,
//                     data: data
//                 });
//             })
//     } else {
//         res.status(400).json({
//             message: 'Data should be not a Null',
//             success: false
//         })
//     }
//
// } catch (e) {
//     res.status(500).json({
//         message: `Error ${e.message}`,
//         success: false
//     })
// }
// };


//EXAMPLE 2
// try {
//
//     const LOGIN = config.get('login');
//     const PASSWORD = config.get('pass');
//     const data = await req.body;
//     const TEXT = data.message;
//     const PHONE = data.phone
//     console.log(data)
//     if (data.phone && data.message) {
//         const result = await fetch(
//             `https://smsc.ru/sys/send.php?login=femmaservice&psw=service313&phones=79932170135&mes=hello23`, {
//                 method: 'POST',
//                 mode: 'cors',
//                 cache: 'no-cache',
//                 headers: {
//                     'Content-Type': 'application/json'
//                     // 'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//                 referrerPolicy: 'no-referrer',
//                 body: JSON.stringify(data) // body data type must match "Content-Type" header
//             })
//             .then(res => {
//                 if (res.status >= 400) {
//                     throw new Error("Bad response from server");
//                 }
//                 return res.text();
//             })
//             .then(data => {
//                 console.log(data);
//                 res.status(200).json({
//                     success: true,
//                     data: data
//                 });
//             })
//     } else {
//         res.status(400).json({
//             message: 'Data should be not a Null',
//             success: false
//         })
//     }
//
// } catch (e) {
//     res.status(500).json({
//         message: `Error ${e.message}`,
//         success: false
//     })
// }
