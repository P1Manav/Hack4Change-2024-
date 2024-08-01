# Import necessary libraries
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error, mean_squared_error
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense


# Sample Data from backend
data = pd.read_csv('')

# Convert 'Date' to datetime
data['Date'] = pd.to_datetime(data['Date'])


features = ['MarketingSpend', 'Quantity of Raw Materials','Seasonality','Eaarnings','Interest','Loss percentage']
target = 'Revenue'

X = data[features]
y = data[target]

for feature in features:
    plt.figure(figsize=(10, 6))
    sns.barplot(x=data['Date'], y=data[feature])
    plt.title(f'{feature} Over Time')
    plt.xlabel('Date')
    plt.ylabel(feature)
    plt.xticks(rotation=45)
    plt.show()

print('-------------------')
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)

print(f"Mean Absolute Error: {mae}")
print(f"Mean Squared Error: {mse}")
print(f"Root Mean Squared Error: {rmse}")

# Predict future revenues (example)
future_data = pd.DataFrame({
    'MarketingSpend': [50000, 60000],
    'Seasonality': [1.2, 1.5],'Seasonality','Eaarnings','Interest','Loss percentage',
})
future_revenue_predictions = model.predict(future_data)
print(f"Future Revenue Predictions: {future_revenue_predictions}")


#OOOORRRR
#using ann
model = Sequential()
model.add(Dense(units=64, activation='relu', input_dim=X_train.shape[1]))
model.add(Dense(units=32, activation='relu'))
model.add(Dense(units=1))

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

# Train the model
history = model.fit(X_train, y_train, epochs=100, batch_size=32, validation_split=0.2)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mae = mean_absolute_error(y_test, y_pred)