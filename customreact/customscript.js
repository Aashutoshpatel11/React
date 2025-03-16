const inserElement = function(reactElement, mainContainer){
    // const element = document.createElement(reactElement.type);

    // element.setAttribute('href', reactElement.props.href );
    // element.setAttribute('target', reactElement.props.target );

    // element.innerHTML = reactElement.children;

    // mainContainer.appendChild(element);

    const element = document.createElement(reactElement.type);

    for (let prop in reactElement.props) {
        if( prop == 'children' ) continue;
        element.setAttribute( prop , reactElement.props[prop] )
    }

    element.innerHTML= reactElement.children;

    mainContainer.appendChild(element);

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https//www.google.com',
        target: '_black'
    },
    children: 'Click here to visit'
}

const mainContainer = document.querySelector('#root');

inserElement(reactElement, mainContainer)