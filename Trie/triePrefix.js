class trieNode{
    constructor(){
        this.children={}
        this.isWordEnd=false
    }
}

class Trie{
    constructor(){
        this.root= new trieNode()
    }

    insert(value){
        let node = this.root
        for(let char of value){
            if(!node.children[char]){
                node.children[char] = new trieNode()
            }
            node = node.children[char]
        }
        node.isWordEnd=true
    }

    search(value){
        let node = this.root
        for(let char of value){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isWordEnd
    }
    prefix(value){
        let node = this.root
        for(let char of value){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return true
    }
}

let trie = new Trie()
trie.insert("apple")
trie.insert("airoplane")
console.log(trie.search("apple"));
console.log(trie.prefix("app"));
