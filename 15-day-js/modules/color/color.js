

// get window size 
 const windowSize = ()=>{
    const height= window.innerHeight;
    const width=window.innerWidth;

    return {height:height , width:width};
    // return as object

}
// re load 
const reloadButton = ()=>{
    window.location.reload();
}

// get running port 
const runningPort = ()=>{
    const ports = window.location?.port;
    return {ports:ports};
}




export const ModulesJspath = {
    runningPort, reloadButton, windowSize
}