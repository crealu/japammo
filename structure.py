'''
Scans a notes js file and writes all translations into a javascript array
'''
import re

notes = 'wishidid'
noteFileStr = notes + '.js'
notesFile = open(noteFileStr, 'r')
noteLines = notesFile.readlines()

dataFileStr = 'clean notes/' + notes + 'Data.js'
notesJS = open(dataFileStr, 'w+')

words = []
verbs = []
phrases = []
sentences = []

notesJS.write("let " + notes + "notesArr = [\n")

def writePair(p):
    notesJS.write('\t["' + p[0] + '", "' + p[1] + '"],\n')

for nl in noteLines:
    if '=' in nl:
        pair = nl.replace('\n', '').replace(' = ', '|').replace('\\u3000', ' ').split('|')
        if pair is not None:
            if ' ' not in pair[0]:
                words.append(pair)
            elif 't' is pair[0][0] and 'o' is pair[0][1] and len(pair[0]) < 15:
                verbs.append(pair)
            elif 'I' not in pair[0][0]:
                phrases.append(pair)
            else:
                sentences.append(pair)

notePairs = words + verbs + phrases + sentences
print(notePairs)

for p in notePairs:
    writePair(p)
