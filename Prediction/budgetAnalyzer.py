mport numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Generating random data for plotting
np.random.seed(1)
sample_size = 100

random_data = {
    'MarketingSpend': np.random.normal(50000, 10000, sample_size),
    'Quantity of Raw Materials': np.random.normal(1000, 200, sample_size),
    'Seasonality': np.random.uniform(1.0, 2.0, sample_size),
    'Earnings': np.random.normal(200000, 50000, sample_size),
    'Interest': np.random.uniform(0.01, 0.05, sample_size),
    'Loss percentage': np.random.uniform(0.1, 0.3, sample_size),
    'Revenue': np.random.normal(250000, 60000, sample_size)
}

random_df = pd.DataFrame(random_data)

# Plotting the data
plt.figure(figsize=(14, 10))

plt.subplot(2, 2, 1)
plt.scatter(random_df['MarketingSpend'], random_df['Revenue'])
plt.title('MarketingSpend vs Revenue')
plt.xlabel('MarketingSpend')
plt.ylabel('Revenue')

plt.subplot(2, 2, 2)
plt.hist(random_df['Quantity of Raw Materials'], bins=20, color='green')
plt.title('Distribution of Quantity of Raw Materials')
plt.xlabel('Quantity of Raw Materials')
plt.ylabel('Frequency')

plt.subplot(2, 2, 3)
plt.plot(random_df['Seasonality'], color='red')
plt.title('Trend of Seasonality')
plt.xlabel('Index')
plt.ylabel('Seasonality')

plt.subplot(2, 2, 4)
plt.boxplot(random_df['Loss percentage'])
plt.title('Boxplot of Loss percentage')
plt.ylabel('Loss percentage')

plt.tight_layout()
plt.show()