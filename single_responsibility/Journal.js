const fs = require('fs');

class PeristenceManager {

    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }

}

class Journal {

    constructor(){
        this.entries = {};
    }

    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`
        this.entries[c] = entry;
        return c;
    }    

    removeEntry(index) {
        delete this.entries[index];
    }

    toString(){
        return Object.values(this.entries).join('\n')
    }

    save(filename){
        fs.writeFileSyncs(filename, this.toString());
    }

    load(filename){
     
    }

    loadFromUrl(url) {

    }
}

Journal.count = 0;

let journal = new Journal();

journal.addEntry('I cried');

let p = new PeristenceManager();
let filename = '/Users/thangnguyen/projects/design-pattern/javascripts/single_responsibility/journal.txt';

p.saveToFile(journal, filename);
console.log(journal.toString());