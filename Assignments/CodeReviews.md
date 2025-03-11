### **Assignment: Code Review Case Study**  
*Estimated Time to Solve: 1 Hour*  

#### **Objective:**  
The purpose of this assignment is to apply effective code review techniques, assess code correctness, adhere to coding standards, and provide constructive feedback on a real-world JavaScript codebase.

---

### **Case Study: Code Review for a JavaScript E-Commerce Checkout System**  

#### **Scenario:**  
You are a **Senior Developer** in a team working on an e-commerce website. A junior developer has submitted the following JavaScript code for the checkout functionality. As a **code reviewer**, your job is to:  

1. Identify **code correctness issues and potential bugs**.  
2. Check **adherence to coding standards** and suggest improvements.  
3. Provide a **self-review checklist** before submission.  
4. Write **constructive, actionable, and respectful feedback**.  

---

### **Submitted Code for Review:**
```javascript
class Checkout {
    constructor(cartItems) {
        this.items = cartItems;
        this.totalPrice = 0;
    }

    calculateTotal() {
        for (let i = 0; i < this.items.length; i++) {
            this.totalPrice += this.items[i].price * this.items[i].quantity;
        }
        return this.totalPrice;
    }

    applyDiscount(code) {
        if (code === "DISCOUNT10") {
            this.totalPrice = this.totalPrice - (this.totalPrice * 0.1);
        } else if (code === "DISCOUNT20") {
            this.totalPrice = this.totalPrice - (this.totalPrice * 0.2);
        }
    }

    checkout() {
        console.log("Total Price:", this.totalPrice);
        console.log("Proceeding to Payment...");
    }
}

// Sample Usage
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 }
];

let myCheckout = new Checkout(cart);
myCheckout.calculateTotal();
myCheckout.applyDiscount("DISCOUNT10");
myCheckout.checkout();
```

---

### **Tasks to Complete:**

#### **Task 1: Identify Code Issues (Functionality & Bugs)**
Review the code and list at least **three issues** related to correctness, functionality, and edge cases. Consider:  
- Logical errors  
- Handling of unexpected inputs  
- Performance optimizations  

**Write your observations and suggested fixes.**  

---

#### **Task 2: Adherence to Coding Standards**  
- Check if the code follows **JavaScript best practices**.  
- Identify **missing elements** like proper variable naming, ES6 syntax, and code reusability.  
- Suggest the use of **linting tools (like ESLint)** and propose improvements.  

**Write down coding standard violations and recommendations.**  

---

#### **Task 3: Self-Review Checklist Before Submission**
Imagine you were the **developer** submitting this code.  
- Create a **5-point self-review checklist** before submitting it for code review.  
- The checklist should focus on **readability, correctness, security, and performance**.  

**Write the checklist.**  

---

#### **Task 4: Write Constructive Code Review Comments**  
Provide **actionable and respectful** feedback for the junior developer. Your comments should:  
- Be **specific** (e.g., instead of saying *"Your logic is wrong,"* explain what needs fixing).  
- Include **examples** of how to improve the code.  
- Maintain a **positive and professional tone**.  

**Write at least three constructive review comments.**  
