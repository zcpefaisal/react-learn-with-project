function customRender(myReactElement, mainContainer){

    // ----- dom element add with conventional approch with for loop so that we set unlimited attribute ------ //

    // const domElement = document.createElement(myReactElement.type)
    // domElement.innerHTML = myReactElement.child
    // domElement.setAttribute('href', myReactElement.property.href)
    // domElement.setAttribute('target', myReactElement.target)

    // mainContainer.appendChild(domElement)


    
    // ----- dom element add with moduler approch with for loop so that we set unlimited attribute ------ //
    const domElement = document.createElement(myReactElement.type)
    domElement.innerHTML = myReactElement.child

    for (const property in myReactElement.property) {
        if (property === 'child') continue;
        domElement.setAttribute(property, myReactElement.property[property])
    }

    mainContainer.appendChild(domElement)

}

const myReactElement = {
    type: 'a',
    property: {
        href: 'http://github.com',
        target: '_blank'
    },
    child: 'Click Me'
}


const mainContainer = document.querySelector('#myRoot');

customRender(myReactElement, mainContainer);

