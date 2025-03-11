### **Assignment: Clean Code Refactoring Case Study**  

#### **Objective:**  
Your task is to **refactor** the given JavaScript code using **Clean Coding Principles**. The provided code is **messy, difficult to read, and violates multiple best practices**. Your goal is to **make it more readable, maintainable, and efficient** by applying **meaningful names, small functions, proper formatting, and other best practices**.  

---

## **The Bad Code (Before Refactoring)**
> **Scenario:** You are working on an **e-commerce platform** where customers can add items to the cart, calculate total cost, and place an order. However, the current implementation is messy and violates multiple clean coding principles.

```javascript
function x(a,b,c,d,e){
  let p=0; let t=0; let o={}; let l="";
  for(let i=0;i<a.length;i++){
    p+=a[i].p*b[i];
    if(a[i].c=="DISCOUNT"){
      p=p-(p*a[i].d/100);
    }
    if(a[i].c=="TAX"){
      p=p+(p*a[i].d/100);
    }
    if(a[i].n==""){
      return "Invalid item name";
    }
  }
  if(c=="COD" && p>5000){
    return "COD not allowed for orders above 5000";
  }
  if(d!="PREPAID" && d!="COD"){
    return "Invalid payment method";
  }
  if(e!="DELIVERED" && e!="CANCELLED" && e!="SHIPPED"){
    return "Invalid order status";
  }
  t=p; 
  o["total"]=t; o["status"]=e; o["payment"]=d; o["summary"]=l;
  return o;
}
```

---

## **Task: Refactor This Code**
### **Expected Improvements**
- **Meaningful Variable & Function Names**
- **Smaller, Well-Defined Functions**
- **Proper Formatting & Readability**
- **Avoid Deep Nesting & Unnecessary Conditions**
- **Use Constants Where Necessary**

## **💡 Hint for Refactoring**
Think about **breaking the function into multiple smaller functions** like:  
- `calculateTotalPrice()`  
- `applyDiscount()`  
- `validateItem()`  
- `validatePaymentMethod()`  
- `validateOrderStatus()`
- `processOrder()` - Main Function
