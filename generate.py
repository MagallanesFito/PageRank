import random
''' 
Generates random database 
	inserts this database into Trie
	Creates a List of websites
'''
file = open("words_alpha.txt",'r')
file_out = open("fillDatabase.js",'w')
database = open("database.txt",'w')
word_list = []
words = []
MAX_WORDS=10

for line in file:
	word_list.append("trie.insert("+ "'" +str(line)[:-1] +"'" +");\n")
	words.append(str(line)[:-1]+"\n")

#Pick MAX_WORDS randomly
indices = [random.randint(0,len(words)-1) for i in range(MAX_WORDS)]

for index in indices:
	#index = random.randint(0,len(words)-1)
	file_out.write(word_list[index])
	database.write(words[index])

file.close()
file_out.close()
database.close()