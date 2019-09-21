import random
''' 
Generates random database 
	inserts this database into Trie
	Creates a List of websites
'''
#Generate params for js init file
def generateGlobalParameters(init_file,links,damping,epsilon):
	init_file.write("const LINKS ="+str(links)+";\nconst DAMPING = "+str(damping)+";\nconst EPSILON="+str(epsilon)+";\n")
file = open("words_alpha.txt",'r')
js_file = open("js/init.js",'w')
database = open("database.txt",'w')
word_list = []
words = []
LINKS=5
DAMPING = 0.85
EPSILON = 0.0001
generateGlobalParameters(js_file,LINKS,DAMPING,EPSILON)

for line in file:
	word_list.append("trie.insert("+ "'" +str(line)[:-1] +"'" +");\n")
	words.append(str(line)[:-1]+"\n")

#Pick LINKS randomly
indices = [random.randint(0,len(words)-1) for i in range(LINKS)]

js_file.write("function insertData(){\nvar trie = new Trie();\n")
for index in indices:
	#index = random.randint(0,len(words)-1)
	js_file.write(word_list[index])
	database.write(words[index])
js_file.write("return trie;\n}\n")
file.close()
js_file.close()
database.close()