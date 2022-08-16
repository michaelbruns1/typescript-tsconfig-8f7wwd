// Import stylesheets
import './style.css';
 
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const VALID_FIRST_CHARACTERS:string[] = ['Y', 'Q', 'M', 'W']


export function firstCharacterValid(headers:string[]) {

  if (headers.length > 0 ) {
    const firstHeader = headers[0]
    const firstCharacter = firstHeader.charAt(0)
    return VALID_FIRST_CHARACTERS.includes(firstCharacter)
  }
}