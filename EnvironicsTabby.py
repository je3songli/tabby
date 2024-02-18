# -*- coding: utf-8 -*-
"""
Created on Sun Feb 18 00:21:57 2024

@author: shahd
"""

import matplotlib.pyplot as plt

months = []
website = []
category = []
city = []
visitors = []

# Open the text file
with open('~File Path~', 'r') as file:
    
    next(file)
    
    # Iterate through each line in the file
    for line in file:
        # Split the line into columns using tab ('\t') as delimiter
        columns = line.strip().split('\t')
        
        column1 = columns[0]
        column2 = columns[1]
        column3 = columns[2]
        column4 = columns[3]
        column5 = columns[4]
        
        date = column1.strip().split('-')
        del date[0]
        del date[1]
        newdate = int(date[0])
        
        months.append(newdate)
        website.append(column2)
        category.append(column3)
        city.append(column4)
        visitors.append(column5)
    
