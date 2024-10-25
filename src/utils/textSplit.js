
export const wordSplit = (text) => {
    const wordLimit = 15; 
    const words = text?.split(' '); 
    if (words?.length > wordLimit) {
      return words?.slice(0, wordLimit).join(' ') + '...'; 
    }
    return text; 
}