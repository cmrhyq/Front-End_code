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

let parent = new Map()

for (let i = 1; i < 41; i++) {
    for (let j = 1; j < 51; j++){
        let name = ''
        let country = ''
        
        if (i<2){
            name = getXPathResults('//*[@id="table"]/div[1]/div['+i+']/div[3]/a['+j+']/div[2]/div').map(p => p.textContent);
            country = getXPathResults('//*[@id="table"]/div[1]/div['+i+']/div[3]/a['+j+']/div[3]/div').map(p => p.textContent);
        } else if (i<5) {
            name = getXPathResults('//*[@id="table"]/div[1]/div['+i+']/div[2]/a['+j+']/div[2]/div').map(p => p.textContent);
            country = getXPathResults('//*[@id="table"]/div[1]/div['+i+']/div[2]/a['+j+']/div[3]/div').map(p => p.textContent);
        } else {
            name = getXPathResults('//*[@id="table"]/div[1]/div['+i+']/div[1]/a['+j+']/div[2]/div').map(p => p.textContent);
            country = getXPathResults('//*[@id="table"]/div[1]/div['+i+']/div[1]/a['+j+']/div[3]/div').map(p => p.textContent);
        }

        parent.set(name, country)
    }
}
// JSON.stringify(parent, null, 2)
copy(parent)