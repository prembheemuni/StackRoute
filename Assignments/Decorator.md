# **Assignment: Case Study on Decorator Pattern**
---

## **Scenario: Text Editor with Formatting Options**  
You are working as a **TypeScript developer** for a **web-based text editor** like Google Docs or Microsoft Word. The editor allows users to **apply multiple text formatting styles** dynamically, such as:  
- **Bold**  
- **Italic**  
- **Underline**  
- **Strikethrough**  

Currently, the editor uses **separate classes for each text style**, leading to **code duplication and rigidity**. Your team decides to **refactor the system using the Decorator Pattern** to allow users to **apply multiple formatting styles dynamically without modifying the base class**.  

---

## **Task:**  
### **Step 1: Implement Decorator Pattern**  
Create a **TypeScript-based Decorator Pattern** that:  
- Defines a **common interface (`TextFormatter`)** with a method `formatText(): string`.  
- Implements a **concrete class (`PlainText`)** that provides basic text.  
- Implements **decorators (`BoldText`, `ItalicText`, `UnderlineText`, `StrikethroughText`)** that dynamically apply text formatting **without modifying the base class**.  

### **Step 2: Simulate Application Usage**  
- Simulate a **text editor** where users can apply **multiple styles dynamically** (e.g., bold + italic + underline).  
- Ensure that **each decorator modifies the text appearance** accordingly while maintaining the base functionality.  
