with open('measuredefs3.csv', 'r') as infile, open('measuredefs4.csv', 'w') as outfile:
    temp = infile.read().replace(" ,", ",")
    outfile.write(temp)