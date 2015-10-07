with open('measuredefs2.csv', 'r') as infile, open('measuredefs3.csv', 'w') as outfile:
    temp = infile.read().replace("'", "")
    outfile.write(temp)