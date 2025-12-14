function getXPathResults(xpath) {
    const nodes = [];
    const result = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE,
        null
    );

    let node;
    while(node = result.iterateNext()) {
        nodes.push(node);
    }

    return nodes;
}
copy_result = []
for (let i = 62; i < 562; i++) {
    const paragraphs = getXPathResults('//*[@id="ui-id-'+i+'"]/div/oj-list-item-layout/div/div/div/span/oj-highlight-text/span').map(p => p.textContent);
    copy_result.push(paragraphs);
}
JSON.stringify(copy_result, null, 2)
copy(copy_result)