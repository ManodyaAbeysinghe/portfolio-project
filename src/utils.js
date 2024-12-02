/*export const getImageUrl = (path) =>{
    /*console.error("getImageUrl called with undefined path!");
    console.log(new URL(`/assets/${path}`, import.meta.url).href);
    return new URL(`/assets/${path}`, import.meta.url).href;
    
};*/


export const getImageUrl = (path) => {
    if (!path.startsWith("/")) {
        console.error("getImageUrl expects an absolute path starting with '/'.");
        return "";
    }
    return path; // Return the path as-is for assets in the public folder
};







/*console.log(getImageUrl("nav/menuIcon.png"));*/