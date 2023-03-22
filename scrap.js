let returnString = (params) => { "this is the codeblock" };
undefined
returnString('hey');
undefined
let returnString = (params) => "this is the codeblock";
undefined
returnString('hey');
'this is the codeblock'
let returnString = params => "this is the codeblock";
undefined
returnString('hey');
'this is the codeblock'
let returnString = () => "this is the codeblock";
undefined
returnString('hey');
'this is the codeblock'
let returnString = params => `this is the codeblock ${params}`;
undefined
returnString('hey');
'this is the codeblock hey'
let returnString = (params) => { return "this is the codeblock" };
undefined
returnString('hey');
'this is the codeblock'


let lis = document.querySelectorAll('li')
let li1 = lis[0]
// const midasTouch = (el) => { el.style.backgroundColor = 'goldenrod'};
const midasTouch = (evt) => {
    console.log(evt);
    console.log(evt.target);
   evt.target.style.backgroundColor = 'goldenrod';
};

for (let li of lis){
  li.addEventListener('mouseover', midasTouch);
}