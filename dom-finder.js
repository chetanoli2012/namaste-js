const findKnowPathFromChildToParent = function (parentNode, childNode) {
  let currentNode = childNode;
  const pathArrayIndex = [];
  while (currentNode !== parentNode) {
    const parentElement = currentNode.parentElement;
    const childrenArray = Array.from(parentElement.children);
    pathArrayIndex.push(childrenArray.indexOf(currentNode));
    currentNode = parentElement;
  }

  return pathArrayIndex;
};

const findNodeValueFromParentToChild = function (knowParent, knownPathIndex) {
  let currentNode = knowParent;
  while (knownPathIndex.length) {
    const chidrenNodes = currentNode.children;
    currentNode = chidrenNodes[knownPathIndex.pop()];
  }
  return currentNode.innerText;
};

const findKnownNodes = function () {
  const rootA = document.getElementById("rootA");
  const nodeA = document.getElementById("nodeA");
  const rootB = document.getElementById("rootB");
  const knownPath = findKnowPathFromChildToParent(rootA, nodeA);

  return findNodeValueFromParentToChild(rootB, knownPath);
};

console.log(findKnownNodes());
