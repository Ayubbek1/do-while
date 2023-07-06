// let password
// let atempt = 5
// do {
//     password = +prompt()
//     if(password !==7777){
//         let atempt_counter = atempt--   
//         alert(`У вас осталось ${atempt_counter} попыток`)  
//         if(atempt_counter === 0){
//             break
//         }
//     }
// } while (password !== 7777);
let password
let atempt = 1
do {
    password = +prompt()
    if(password !==7777){
        let atempt_counter = atempt++   
        alert(`Попытка номер ${atempt_counter}` )  
        if(atempt_counter === 4){
            break
        }
    }
} while (password !== 7777);