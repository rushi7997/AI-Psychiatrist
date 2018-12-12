#import pandas as pd
#import matplotlib.pyplot as plt
#import numpy as mp

import pickle

with open('model_pickle','rb') as f:
    mp = pickle.load(f)

with open('new.pickle','rb') as f:
    new = pickle.load(f)
    
from sklearn.feature_extraction.text import CountVectorizer
cv = CountVectorizer(max_features = 10000)

xcol = cv.fit(new)
  
import sys

x = "good"
arr = []
arr.append(x)

xcol = cv.transform(arr)

y_pred = mp.predict(xcol)

print(y_pred)