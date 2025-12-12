import find from 'lodash/find'

export default function (name) {
    let componentText = find(window.graphQLResponse.data.designsystemcomponentCollection.items, { componenter: name });
    if (componentText === undefined) return '';
    return "#" + componentText.heading + "\n  " + componentText.mainbody;

}