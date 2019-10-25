# Exercise 4: Test Inventory & Checkout page

Let's create a Inventory page object & test case to test 
`https://www.saucedemo.com/inventory.html`.


### 🚀 CHALLENGE 2 🚀 **Create Inventory Page object & Test case**

### 💬 Hint 💬 

#### 1. Compared to Login page, you'd want to open different URL.

#### 2. After each test case, you'd want to reset shopping cart such as 

```
  afterEach('reset app state', function() {
    inventoryPage.resetAppState();
  });
```

### 🚀 CHALLENGE 3 🚀 **Create Checkout Page object & Test case**

### 💬 Hint 💬 

#### You'd want to import Inventory page object into Checkout page object. 


[ ◀️ Back to Exercise 3](./exercise3.md)

[Go to Exercise 5 ▶️](./exercise5.md)