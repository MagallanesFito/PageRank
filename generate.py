import random
import sys
''' 
Generates random database 
	inserts this database into Trie
	Creates a List of websites
'''
#Generate params for js init file
def generateGlobalParameters(init_file,links,damping,epsilon,search_results):
	init_file.write("/*THIS FILE WAS GENERATED AUTOMATICALLY using generate.py\n------------------------------\n*/\n")
	init_file.write("const SEARCH_RESULTS = "+str(search_results)+";\nconst LINKS ="+str(links)+";\nconst DAMPING = "+str(damping)+";\nconst EPSILON="+str(epsilon)+";\n")
file = open("words_alpha.txt",'r')
js_file = open("js/init.js",'w')
database = open("database.txt",'w')
word_list = []
words = []
#Parameters are set here, if not specified default parameters are the following
if len(sys.argv) == 1:
	LINKS=1000
	DAMPING = 0.85
	EPSILON = 0.0001
	SEARCH_RESULTS = 10
else:
	LINKS=int(sys.argv[1])
	DAMPING = float(sys.argv[2])
	EPSILON = float(sys.argv[3])
	SEARCH_RESULTS = int(sys.argv[4])
#---------------
generateGlobalParameters(js_file,LINKS,DAMPING,EPSILON,SEARCH_RESULTS)

for line in file:
	word_list.append("trie.insert("+ "'" +str(line)[:-1] +"'" +");\n")
	words.append(str(line)[:-1]+"\n")

#Pick LINKS randomly
indices = [random.randint(0,len(words)-1) for i in range(LINKS)]

js_file.write("function insertData(){\nvar trie = new Trie();\n")
for index in indices:
	#index = random.randint(0,len(words)-1)
	js_file.write("\t"+word_list[index])
	database.write(words[index])
js_file.write("return trie;\n}\n")
file.close()
js_file.write("/*THIS FILE WAS GENERATED AUTOMATICALLY using generate.py\n------------------------------*/\n")
js_file.close()
database.close()