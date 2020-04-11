'''
Scans a notes js file and writes all translations into a javascript array
'''

notes = 'ifnara'
noteFileStr = notes + '.js'
notesFile = open(noteFileStr, 'r')
noteLines = notesFile.readlines()

dataFileStr = 'clean notes/' + notes + 'Data.js'
notesJS = open(dataFileStr, 'w+')
notePair = []

notesJS.write("let notesArr = [\n")

def writePair(p):
    notesJS.write('\t["' + p[0] + '", "' + p[1] + '"],\n')

for nl in noteLines:
    if '=' in nl:
        pair = nl.replace('\n', '').replace(' = ', '|').split('|')
        writePair(pair)
        notePair.append(pair)
