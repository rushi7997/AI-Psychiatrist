import pandas as pd
import numpy as np

df = pd.read_csv("train.csv", header = None, encoding = 'latin-1')

df.columns = ['ID', 'sentiment', 'text']

df = df.drop(['ID'],axis = 1)

import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
import re

new = []
for i in range(len(df)):
    temp = re.sub('[^a-zA-Z]', ' ', df['text'][i])
    temp = temp.lower()
    temp = temp.split()
    ps = PorterStemmer()
    temp = [ps.stem(word) for word in temp if not word in stopwords.words('english')]
    temp = ' '.join(temp)
    new.append(temp)

# new_df = pd.DataFrame({'text':new})
#
# new_df.to_csv('clened_data.csv')

# new = pd.read_csv('clened_data.csv')
#
# print(new.head())


from sklearn.feature_extraction.text import CountVectorizer
cv = CountVectorizer(max_features = 10000)
X = cv.fit_transform(new).toarray()
y = df.iloc[:,-1].values
# print(X)
print(len(X))
print(len(y))
from sklearn.cross_validation import train_test_split
X_Train, X_Test, y_Train, y_Test = train_test_split(X, y, test_size = 0.1, random_state = 0)


from sklearn.svm import SVC
classifier = SVC(kernel = 'rbf', gamma = 0.085)
classifier.fit(X_Train, y_Train)

y_pred = classifier.predict(X_Test)

from sklearn.metrics import confusion_matrix
cm = confusion_matrix(y_Test, y_pred)
