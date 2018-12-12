import pickle
import sys

with open('model_pickle', 'rb') as f:
    mp = pickle.load(f)

with open('new.pickle', 'rb') as f:
    new = pickle.load(f)

from sklearn.feature_extraction.text import CountVectorizer

cv = CountVectorizer(max_features=10000)

xcol = cv.fit(new)

x = sys.argv[1]
# x = 'good'
# x = 'bad'
# print(x)
arr = []
arr.append(x)

xcol = cv.transform(arr)

y_pred = mp.predict(xcol)

# print(y_pred)
#
if(y_pred[0] == '1'):
    print("positive")
else:
    print("negative")