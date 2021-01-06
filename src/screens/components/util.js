const mapBlockNumberToColorClass = function(blockNumber){
    const blockNumberClass = `gridBlock${blockNumber}`
    return blockNumberClass;
}

export {
    mapBlockNumberToColorClass
}