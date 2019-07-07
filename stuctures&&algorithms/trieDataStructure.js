/* Trie Data Structure */

let Node = function() {
	this.keys = new Map();
	this.end = false;
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};

myNode = new Node();
myNode.keys.set([1, 'a'], [2, 'b']);
console.log();

let Trie = function() {

	this.root = new Node();

	this.add = function(input, node = this.root) {
		if (input.length == 0) {
			node.setEnd();
			return;
		} else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node());
            // nếu ko tìm thấy chữ cái đầu
            // tạo thêm chữ cái mới ở nhánh chính
			return this.add(input.substr(1), node.keys.get(input[0]));
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
			// đã tìm thấy chữ cái đầu
		};
	};

	this.isWord = function(word) {
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) {
            // node.keys là chữ cái đầu tiên, là nhánh chính từ gốc đi xuống
				return false;
			} else {
				node = node.keys.get(word[0]);
				word = word.substr(1);
			}
		}
        return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
        // node.keys.get(word).isEnd() là xét xem từ có kết thúc đúng ko
        // nếu không sẽ trả về false
	};

	this.print = function() {
		let words = new Array();
		let search = function(node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter));
                    // string.concat(letter): nối các chữ cái trong nhánh để tạo thành string
				}
				if (node.isEnd()) {
                    words.push(string);
                    // xét xem các chữ cái đã tạo thành 1 từ 
                    // khi đó nó sẽ đẩy 1 string hoàn chỉnh vào array
				}
			} else {
				string.length > 0 ? words.push(string) : undefined;
                return;
                // đây là lúc nó sẽ lấy hết nhánh để tạo thành chuỗi
                // vì trước đó (if ở trên) chỉ lấy đến giữa nhánh
			}
		};
		search(this.root, new String());
		return words.length > 0 ? words : null;
	};

};
/*
myTrie = new Trie()
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
*/
myTrie = new Trie();
//myTrie.add('are');
console.log(myTrie.print())