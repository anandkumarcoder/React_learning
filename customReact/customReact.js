//how custom render will work


function customRender(element,container){

    /* - first time code 

const domElement = document.createElement(element.type) //create element from object reactElement - a tag is created

domElement.innerHTML = element.children //text is added from object reactElement
domElement.setAttribute('href', element.props.href) //props taken from object reactElemnet
domElement.setAttribute('target',reactElement.props.target)

container.appendChild(domElement) */

//--------

// -- optimized code
const domElement = document.createElement(element.type)
domElement.innerHTML = element.children

for (const prop in element.props) {
    if (prop === 'children') continue 
    domElement.setAttribute(prop, element.props[prop])
}

container.appendChild(domElement)


}
//-------

const reactElement = {
    type: 'a',
    props : {
        href:'https://google.com',
        target : '_blank'
    },
    children: 'Click me to visit google'

}


const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer) //what to render and where to render 