import pickle

with open('model_pickle_multiclass','rb') as f:
    mp = pickle.load(f)

with open('new_multiclass.pickle','rb') as f:
    new = pickle.load(f)
    
from sklearn.feature_extraction.text import CountVectorizer
cv = CountVectorizer(max_features = 10000)

x = cv.fit(new)
  
import sys

x = sys.argv[1]
arr = []
arr.push(x)

x = cv.transform(arr)

y_pred = mp.predict(x)

print(y_pred)