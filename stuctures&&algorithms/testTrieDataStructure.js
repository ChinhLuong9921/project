let Node = function() {
    this.root = new Map();
    this.end = false;
    this.setEnd = function() {
        this.end = true;
    };
    this.isEnd = function() {
        return this.end;
    };
};

let Trie = function() {
    this.root = new Node();
    
    this.add = function(input, node = this.root) {
        if (input.length == 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            return node.keys.add(input.substr(1), node.keys.get(input[0])); 
        } else {
            return node.keys.add(input.substr(1), node.keys.get(input[0]));
        }
    };

    this.isWord = function(word) {
        let node = this.root;
        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
    };

    this.print = function() {
        let words = new Array();
        let search = function(node, string) {
            if (node.keys.size != 0) {
                for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                }
                if (node.isEnd()) {
                    words.push(string);
                }
            } else {
                string.length > 0 ? word.push(string) : undefined;
                return;
            }
        };
        search(this.root, new String());
        return words.length > 0 ? words : null;
    }
};