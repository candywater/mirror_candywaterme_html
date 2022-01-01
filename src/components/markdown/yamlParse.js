export function yamlParse(content){
    //https://stackoverflow.com/questions/454908/split-java-string-by-new-line
    //https://stackoverflow.com/questions/8125709/javascript-how-to-split-newline
    let array = content.split(/\r?\n/)
    let result = {}
    array.forEach(line => {
        if(line.startsWith('---')){
            return;
        }
        let keyvalue = line.split(/[:|：]/)
        if(keyvalue.length >= 2){
            let key = keyvalue[0].trim()
            let value = keyvalue[1].trim()
            result[key] = value
        }
    });
    return result
}

export function extractYaml(content){
    //https://github.com/markedjs/marked/issues/485
    let res = content.match(/^---$.*^---$/ms); 
    if(res && res.length > 0){
        return res[0]
    }
}